interface ImportMetaEnv {
  readonly STRAVA_CLIENT_ID?: string;
  readonly STRAVA_CLIENT_SECRET?: string;
  readonly STRAVA_REFRESH_TOKEN?: string;
  readonly STRAVA_ATHLETE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
