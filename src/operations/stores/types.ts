import * as t from 'io-ts'

export const BrandEntityId = t.string
export type BrandEntityId = t.TypeOf<typeof BrandEntityId>

export const StorePageInfo = t.strict({
  /**
   * The ID of the store.
   */
  storePageId: t.string,

  /**
   * The store url page. Can be used for SB campaigns as a possible landing page.
   */
  storePageUrl: t.string,

  /**
   * The page name. Defaults to Home for the main store page.
   */
  storePageName: t.string,
})
export type StorePageInfo = t.TypeOf<typeof StorePageInfo>

export const StoreInfoResponse = t.strict({
  /**
   * The response code.
   */
  code: t.string,

  /**
   * The entity ID.
   */
  entityId: t.string,

  /**
   * The name of the store.
   */
  storeName: t.string,

  /**
   * ID used in campaign creation and asset registration.
   */
  brandEntityId: BrandEntityId,

  /**
   * The information related to the store.
   */
  storePageInfo: t.array(StorePageInfo),
})
export type StoreInfoResponse = t.TypeOf<typeof StoreInfoResponse>
