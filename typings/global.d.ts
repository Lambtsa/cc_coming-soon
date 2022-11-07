declare namespace NodeJS {
  /**
   * Add custom environment variables
   */
  interface ProcessEnv {
    readonly storeBackendUri: string;
    readonly buildId: string;
    readonly gaTrackingId: string;

    readonly APPLE_ID: string;
    readonly APPLE_SECRET: string;

    readonly FACEBOOK_ID: string;
    readonly FACEBOOK_SECRET: string;

    readonly GITHUB_ID: string;
    readonly GITHUB_SECRET: string;

    readonly GOOGLE_ID: string;
    readonly GOOGLE_SECRET: string;

    readonly NEXTAUTH_URL: string;
  }
}
