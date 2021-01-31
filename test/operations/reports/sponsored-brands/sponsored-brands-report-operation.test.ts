import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { SponsoredBrandsReportOperation } from '../../../../src/operations/reports/sponsored-brands/sponsored-brands-report-operation'
import { ReportResponseStatus } from '../../../../src'

jest.setTimeout(15000)

describe('SponsoredBrandsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredBrandsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status with campaigns report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'campaigns',
        metrics: [
          'campaignName',
          'campaignId',
          'campaignStatus',
          'campaignBudget',
          'campaignBudgetType',
          'adGroupName',
          'adGroupId',
          'keywordText',
          'keywordBid',
          'keywordStatus',
          'targetId',
          'targetingExpression',
          'targetingText',
          'targetingType',
          'matchType',
          'impressions',
          'clicks',
          'cost',
          'attributedDetailPageViewsClicks14d',
          'attributedSales14d',
          'attributedSales14dSameSKU',
          'attributedConversions14d',
          'attributedConversions14dSameSKU',
          'attributedOrdersNewToBrand14d',
          'attributedOrdersNewToBrandPercentage14d',
          'attributedOrderRateNewToBrand14d',
          'attributedSalesNewToBrand14d',
          'attributedSalesNewToBrandPercentage14d',
          'attributedUnitsOrderedNewToBrand14d',
          'attributedUnitsOrderedNewToBrandPercentage14d',
          'unitsSold14d',
          'dpv14d',
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with adgroups report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'adGroups',
        metrics: [
          'campaignId',
          'campaignName',
          'campaignBudget',
          'campaignBudgetType',
          'campaignStatus',
          'adGroupName',
          'adGroupId',
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with keywords report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'keywords',
        metrics: [
          'campaignId',
          'campaignName',
          'adGroupId',
          'adGroupName',
          'campaignBudgetType',
          'campaignStatus',
          'keywordId',
          'keywordStatus',
          'keywordBid',
          'keywordText',
          'matchType',
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with target report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'targets',
        metrics: [
          'campaignId',
          'campaignName',
          'adGroupId',
          'adGroupName',
          'campaignBudgetType',
          'campaignStatus',
          'targetId',
          'targetingExpression',
          'targetingType',
          'targetingText',
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })
  })

  describe('getReport', () => {
    it(`only return report location when report status is SUCCESS`, async () => {
      expect.assertions(4)
      const requestReportResult = await reportOperation.requestReport({
        recordType: 'keywords',
        metrics: [
          'campaignId',
          'campaignName',
          'adGroupId',
          'adGroupName',
          'campaignBudgetType',
          'campaignStatus',
          'keywordId',
          'keywordStatus',
          'keywordBid',
          'keywordText',
          'matchType',
        ],
        reportDate: '20200314',
      })

      const res = await reportOperation.getReport(requestReportResult.reportId)
      expect(res.reportId).toBeDefined()
      expect(res.statusDetails).toBeDefined()

      if (res.status == 'SUCCESS') {
        expect(res.location).toBeDefined()
        expect(res.fileSize).toBeDefined()
      }
    })
  })

  describe('downloadReport', () => {
    it('should return the report uncompressed', async () => {
      const requestReportResult = await reportOperation.requestReport({
        recordType: 'campaigns',
        metrics: ['campaignBudget', 'campaignBudgetType', 'campaignStatus'],
        reportDate: '20200314',
      })

      const res = await reportOperation.downloadReport(requestReportResult.reportId)

      expect(res.length).toBeGreaterThanOrEqual(0)
    })
  })
})
