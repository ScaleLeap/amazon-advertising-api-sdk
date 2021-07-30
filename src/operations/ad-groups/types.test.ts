import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('AdGroup', () => {
  it('should pass getAdGroup response', () => {
    const res = t.AdGroup.decode({
      adGroupId: 138818764235694,
      name: 'New Name',
      campaignId: 31299234922913,
      defaultBid: 1,
      state: 'archived',
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('AdGroupExtended', () => {
  it('should pass getAdGroupEx response', () => {
    const res = t.AdGroupExtended.decode({
      adGroupId: 138818764235694,
      name: 'New Name',
      campaignId: 31299234922913,
      defaultBid: 1,
      state: 'archived',
      servingStatus: 'PORTFOLIO_PENDING_START_DATE',
      creationDate: 1550902562000,
      lastUpdatedDate: 1550904242000,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('AdGroupResponse', () => {
  it('should pass createAdGroups, updateAdGroups, archiveAdGroup response', () => {
    const res = t.AdGroupResponse.decode({
      code: 'SUCCESS',
      adGroupId: 138818764235694,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('AdGroupExtendedEdgeCase1', () => {
  it('should pass getAdGroupEx response when servingStatus is "ENDED"', () => {
    const res = t.AdGroupExtended.decode({
      adGroupId: 138818764235694,
      name: 'New Name',
      campaignId: 31299234922913,
      defaultBid: 1,
      state: 'archived',
      servingStatus: 'ENDED',
      creationDate: 1550902562000,
      lastUpdatedDate: 1550904242000,
    })

    expect(isRight(res)).toBeTruthy()
  })
})

describe('AdGroupExtendedEdgeCase2', () => {
  it('should pass getAdGroupEx response when servingStatus is "AD_GROUP_INCOMPLETE"', () => {
    const res = t.AdGroupExtended.decode({
      adGroupId: 138818764235694,
      name: 'New Name',
      campaignId: 31299234922913,
      defaultBid: 1,
      state: 'archived',
      servingStatus: 'AD_GROUP_INCOMPLETE',
      creationDate: 1550902562000,
      lastUpdatedDate: 1550904242000,
    })

    expect(isRight(res)).toBeTruthy()
  })
})
