import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('Keyword', () => {
  it('should pass getBiddableKeyword response', () => {
    const res = t.Keyword.decode({
      keywordId: 16577721726418,
      adGroupId: 149522344269714,
      campaignId: 164069484151709,
      keywordText: 'Apple',
      matchType: 'broad',
      state: 'paused',
    })

    expect(isRight(res)).toBeTruthy()
  })
})
