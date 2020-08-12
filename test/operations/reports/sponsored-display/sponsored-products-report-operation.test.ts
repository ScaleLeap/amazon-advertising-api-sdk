import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { SponsoredDisplayReportOperation } from '../../../../src/operations/reports/sponsored-display/index'
import { ReportResponseStatus } from '../../../../src/operations/reports/report-response'

jest.setTimeout(30000)

describe('SponsoredDisplayReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredDisplayReportOperation)

  /**
   * TODO: Unsupported fields attributed metrics on Sandbox API.
   * Need to check again on Production API.
   */
  describe('requestReport', () => {
    it(`should return a in progress status and metrics specific to T00001 tatic campaigns report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'campaigns',
        reportDate: '20200808',
        tactic: 'T00001',
        metrics: [
          'campaignName',
          'campaignId',
          'campaignStatus',
          'impressions',
          'clicks',
          'cost',
          'currency',
          'attributedDPV14d',
          'attributedUnitsSold14d',
        ],
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status and metrics specific to remarketing tatic ad groups report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'adGroups',
        reportDate: '20200808',
        tactic: 'remarketing',
        metrics: [
          'campaignName',
          'campaignId',
          'impressions',
          'clicks',
          'cost',
          'currency',
          'attributedConversions1d',
          'attributedConversions7d',
          'attributedConversions14d',
          'attributedConversions30d',
          'attributedConversions1dSameSKU',
          'attributedConversions7dSameSKU',
          'attributedConversions14dSameSKU',
          'attributedConversions30dSameSKU',
          'attributedUnitsOrdered1d',
          'attributedUnitsOrdered7d',
          'attributedUnitsOrdered14d',
          'attributedUnitsOrdered30d',
          'attributedSales1d',
          'attributedSales7d',
          'attributedSales14d',
          'attributedSales30d',
          'attributedSales1dSameSKU',
          'attributedSales7dSameSKU',
          'attributedSales14dSameSKU',
          'attributedSales30dSameSKU',
          'adGroupName',
          'adGroupId',
        ],
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    /**
     * TODO: "GenericError: Unsupported record type adGroups" error in Sandbox API.
     * Need to check again on Production API.
     */
    it.skip(`should return a in progress status and metrics specific to T00020 tatic ad groups report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'adGroups',
        reportDate: '20200808',
        tactic: 'T00020',
        metrics: [
          'campaignName',
          'campaignId',
          'impressions',
          'clicks',
          'cost',
          'currency',
          'attributedConversions1d',
          'attributedConversions7d',
          'attributedConversions14d',
          'attributedConversions30d',
          'attributedConversions1dSameSKU',
          'attributedConversions7dSameSKU',
          'attributedConversions14dSameSKU',
          'attributedConversions30dSameSKU',
          'attributedUnitsOrdered1d',
          'attributedUnitsOrdered7d',
          'attributedUnitsOrdered14d',
          'attributedUnitsOrdered30d',
          'attributedSales1d',
          'attributedSales7d',
          'attributedSales14d',
          'attributedSales30d',
          'attributedSales1dSameSKU',
          'attributedSales7dSameSKU',
          'attributedSales14dSameSKU',
          'attributedSales30dSameSKU',
          'adGroupName',
          'adGroupId',
        ],
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    /**
     * TODO: error in Sandbox API without error message.
     * Need to check again on Production API.
     */
    it.skip(`should return a in progress status and metrics specific to remarketing tatic product ads report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'productAds',
        reportDate: '20200808',
        tactic: 'remarketing',
        metrics: [
          'campaignName',
          'campaignId',
          'impressions',
          'clicks',
          'cost',
          'currency',
          'attributedConversions1d',
          'attributedConversions7d',
          'attributedConversions14d',
          'attributedConversions30d',
          'attributedConversions1dSameSKU',
          'attributedConversions7dSameSKU',
          'attributedConversions14dSameSKU',
          'attributedConversions30dSameSKU',
          'attributedUnitsOrdered1d',
          'attributedUnitsOrdered7d',
          'attributedUnitsOrdered14d',
          'attributedUnitsOrdered30d',
          'attributedSales1d',
          'attributedSales7d',
          'attributedSales14d',
          'attributedSales30d',
          'attributedSales1dSameSKU',
          'attributedSales7dSameSKU',
          'attributedSales14dSameSKU',
          'attributedSales30dSameSKU',
          'adGroupName',
          'adGroupId',
          'asin',
          'sku',
          'adId',
        ],
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    /**
     * TODO: "GenericError: Unsupported record type productAds" error in Sandbox API.
     * Need to check again on Production API.
     */
    it.skip(`should return a in progress status and metrics specific to T00020 tatic product ads report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'productAds',
        reportDate: '20200808',
        tactic: 'T00020',
        metrics: [
          'campaignName',
          'campaignId',
          'impressions',
          'clicks',
          'cost',
          'currency',
          'attributedConversions1d',
          'attributedConversions7d',
          'attributedConversions14d',
          'attributedConversions30d',
          'attributedConversions1dSameSKU',
          'attributedConversions7dSameSKU',
          'attributedConversions14dSameSKU',
          'attributedConversions30dSameSKU',
          'attributedUnitsOrdered1d',
          'attributedUnitsOrdered7d',
          'attributedUnitsOrdered14d',
          'attributedUnitsOrdered30d',
          'attributedSales1d',
          'attributedSales7d',
          'attributedSales14d',
          'attributedSales30d',
          'attributedSales1dSameSKU',
          'attributedSales7dSameSKU',
          'attributedSales14dSameSKU',
          'attributedSales30dSameSKU',
          'adGroupName',
          'adGroupId',
          'asin',
          'sku',
          'adId',
        ],
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    /**
     * TODO: "GenericError: Unsupported record type targets" error in Sandbox API.
     * Need to check again on Production API.
     */
    it.skip(`should return a in progress status and metrics specific to T00020 tatic targets report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'targets',
        reportDate: '20200808',
        tactic: 'T00020',
        metrics: [
          'campaignName',
          'campaignId',
          'impressions',
          'clicks',
          'cost',
          'currency',
          'attributedConversions1d',
          'attributedConversions7d',
          'attributedConversions14d',
          'attributedConversions30d',
          'attributedConversions1dSameSKU',
          'attributedConversions7dSameSKU',
          'attributedConversions14dSameSKU',
          'attributedConversions30dSameSKU',
          'attributedUnitsOrdered1d',
          'attributedUnitsOrdered7d',
          'attributedUnitsOrdered14d',
          'attributedUnitsOrdered30d',
          'attributedSales1d',
          'attributedSales7d',
          'attributedSales14d',
          'attributedSales30d',
          'attributedSales1dSameSKU',
          'attributedSales7dSameSKU',
          'attributedSales14dSameSKU',
          'attributedSales30dSameSKU',
          'targetId',
          'targetingExpression',
          'targetingText',
          'targetingType',
        ],
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })
  })

  describe('getReport', () => {
    it(`only return report location when report status is SUCCESS`, async () => {
      const requestReportResponse = await reportOperation.requestReport({
        recordType: 'campaigns',
        reportDate: '20200808',
        tactic: 'T00001',
        metrics: [
          'campaignName',
          'campaignId',
          'campaignStatus',
          'impressions',
          'clicks',
          'cost',
          'currency',
        ],
      })

      const res = await reportOperation.getReport(requestReportResponse.reportId)

      expect(res.reportId).toBeDefined()
      expect(res.statusDetails).toBeDefined()

      if (res.status == 'SUCCESS') {
        expect(res.location).toBeDefined()
        expect(res.fileSize).toBeDefined()
      }
    })
  })

  describe('downloadReport', () => {
    it(`should return the report uncompressed`, async () => {
      const requestReportResponse = await reportOperation.requestReport({
        recordType: 'campaigns',
        reportDate: '20200808',
        tactic: 'T00001',
        metrics: [
          'campaignName',
          'campaignId',
          'campaignStatus',
          'impressions',
          'clicks',
          'cost',
          'currency',
        ],
      })

      const res = await reportOperation.downloadReport(requestReportResponse.reportId)

      expect(res.length).toBeGreaterThan(0)
    })
  })
})
