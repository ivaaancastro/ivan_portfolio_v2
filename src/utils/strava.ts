const STRAVA_CLIENT_ID = import.meta.env.STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = import.meta.env.STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = import.meta.env.STRAVA_REFRESH_TOKEN;
const STRAVA_ATHLETE_ID = import.meta.env.STRAVA_ATHLETE_ID || "102757003";

const TOKEN_ENDPOINT = "https://www.strava.com/api/v3/oauth/token";
const STATS_ENDPOINT = `https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`;

async function getAccessToken() {
  const params = new URLSearchParams({
    client_id: STRAVA_CLIENT_ID,
    client_secret: STRAVA_CLIENT_SECRET,
    refresh_token: STRAVA_REFRESH_TOKEN,
    grant_type: "refresh_token",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await response.json();
  return data.access_token;
}

export async function getStravaStats() {
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    console.warn("Strava credentials are not fully set in .env. Returning dummy data.");
    return {
      ytd_run_totals: { distance: 0 },
      ytd_ride_totals: { distance: 0 },
      ytd_swim_totals: { distance: 0 },
      all_run_totals: { distance: 0 },
      all_ride_totals: { distance: 0 }
    };
  }

  try {
    const accessToken = await getAccessToken();

    const response = await fetch(STATS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching Strava stats: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Strava stats:", error);
    return null;
  }
}
