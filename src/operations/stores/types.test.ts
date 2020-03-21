import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('StoreInfoResponse', () => {
  it('should pass', () => {
    const res = t.StoreInfoResponse.decode({
      code: 'SUCCESS',
      entityId: 'ENTITY6SICSOL71XVX',
      storeName: 'Test 1',
      brandEntityId: 'ENTITY6SICSOL71XVX',
      storePageInfo: [
        {
          storePageId: '75233FD4-DC27-4D39-A3AE-2DDBEE144AD2',
          storePageUrl: 'https://www.amazon.com/stores/page/75233FD4-DC27-4D39-A3AE-2DDBEE144AD2',
          storePageName: 'Home',
        },
        {
          storePageId: '75233FD4-DC27-4D39-A3AE-2DDBEE144AD3',
          storePageUrl: 'https://www.amazon.com/stores/page/75233FD4-DC27-4D39-A3AE-2DDBEE144AD3',
          storePageName: 'Subpage title',
        },
      ],
    })

    expect(isRight(res)).toBeTruthy()
  })
})
