/**
 * Strava API client used at build time (the site is static).
 *
 * The stats are fetched once per build, so the numbers refresh whenever the site is
 * rebuilt (see the daily rebuild workflow in .github/workflows/strava-refresh.yml).
 *
 * It never throws: if credentials are missing or Strava fails, it logs why and
 * returns null so the build still succeeds and the page shows a placeholder.
 */

const TOKEN_ENDPOINT = "https://www.strava.com/api/v3/oauth/token";
const API_BASE = "https://www.strava.com/api/v3";
const DEFAULT_ATHLETE_ID = "102757003";
const REQUEST_TIMEOUT_MS = 10_000;

/** Subset of Strava's ActivityTotal we use. Distances are in metres. */
export interface StravaActivityTotal {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
}

/** Subset of Strava's ActivityStats response. */
export interface StravaStats {
  ytd_run_totals: StravaActivityTotal;
  ytd_ride_totals: StravaActivityTotal;
  ytd_swim_totals: StravaActivityTotal;
  all_run_totals: StravaActivityTotal;
  all_ride_totals: StravaActivityTotal;
}

interface TokenResponse {
  access_token: string;
}

const LOG_PREFIX = "[strava]";

class StravaError extends Error {}

async function fetchJson<T>(url: string, init: RequestInit, step: string): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, { ...init, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
  } catch (error) {
    throw new StravaError(`${step}: network error (${(error as Error).message})`);
  }

  if (!response.ok) {
    // Strava error bodies contain no secrets; include a short excerpt to ease debugging.
    const body = (await response.text().catch(() => "")).slice(0, 200);
    throw new StravaError(`${step}: HTTP ${response.status} ${response.statusText} ${body}`.trim());
  }

  return (await response.json()) as T;
}

async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  const data = await fetchJson<TokenResponse>(
    TOKEN_ENDPOINT,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }).toString(),
    },
    "token refresh",
  );

  if (!data.access_token) {
    throw new StravaError("token refresh: response has no access_token");
  }
  return data.access_token;
}

function isActivityTotal(value: unknown): value is StravaActivityTotal {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as StravaActivityTotal).distance === "number"
  );
}

async function loadStravaStats(): Promise<StravaStats | null> {
  const clientId = import.meta.env.STRAVA_CLIENT_ID;
  const clientSecret = import.meta.env.STRAVA_CLIENT_SECRET;
  const refreshToken = import.meta.env.STRAVA_REFRESH_TOKEN;
  const athleteId = import.meta.env.STRAVA_ATHLETE_ID || DEFAULT_ATHLETE_ID;

  if (!clientId || !clientSecret || !refreshToken) {
    console.warn(`${LOG_PREFIX} credentials not set; stats will show a placeholder.`);
    return null;
  }

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);
    const stats = await fetchJson<StravaStats>(
      `${API_BASE}/athletes/${athleteId}/stats`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
      "athlete stats",
    );

    if (!isActivityTotal(stats.ytd_run_totals) || !isActivityTotal(stats.ytd_ride_totals)) {
      throw new StravaError("athlete stats: unexpected response shape");
    }

    return stats;
  } catch (error) {
    const message = error instanceof StravaError ? error.message : String(error);
    console.error(`${LOG_PREFIX} could not load stats, showing a placeholder. ${message}`);
    return null;
  }
}

let cached: Promise<StravaStats | null> | undefined;

/**
 * Year-to-date Strava stats, or null if they cannot be loaded. Never throws.
 * Memoised so every page and language in a build shares a single API round-trip.
 */
export function getStravaStats(): Promise<StravaStats | null> {
  cached ??= loadStravaStats();
  return cached;
}
