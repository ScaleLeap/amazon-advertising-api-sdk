import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces'
import { Marketplace } from '../src'

export class DateTimeUtils {
  static date = new Date()

  static getCurrentISODate() {
    return this.date.toISOString().slice(0, 10).replace(/-/g, '')
  }
}

export class Random {
  static getRandomTimeout(min = 1, max = 5): number {
    return Math.floor((Math.random() * (max - min) + min) * 1000)
  }
}

export async function delay(time: number = Random.getRandomTimeout()) {
  return await new Promise((resolve) => setTimeout(resolve, time))
}

export function getAdvertising(amazonMarketplace: AmazonMarketplace): Marketplace {
  const { advertising } = amazonMarketplace

  if (!advertising) {
    throw new Error(`${amazonMarketplace.name} marketplace does not have Amazon Advertising.`)
  }

  return {
    name: amazonMarketplace.name,
    advertising: {
      region: {
        authorizationUri: advertising.region.authorizationUri,
        accessTokenUri: advertising.region.accessTokenUri,
        endpoint: advertising.region.endpoint,
      },
    },
  }
}
