export interface Marketplace {
  /**
   * Amazon Marketplace Name.
   */
  name: string

  advertising: {
    region: {
      /**
       * Authorization URI.
       */
      authorizationUri: string

      /**
       * Access Token URI
       */
      accessTokenUri: string

      /**
       * Access endpoint URI.
       */
      endpoint: string
    }
  }
}
