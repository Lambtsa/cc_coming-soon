declare namespace NodeJS {
  /**
   * Add custom environment variables
   */
  interface ProcessEnv {
    readonly storeBackendUri: string;
    readonly buildId: string;
    readonly gaTrackingId: string;

    readonly MAILCHIMP_AUDIENCE_ID: string;
    readonly MAILCHIMP_API_KEY: string;
    readonly MAILCHIMP_API_SERVER: string;

    readonly NEXTAUTH_URL: string;
  }
}
