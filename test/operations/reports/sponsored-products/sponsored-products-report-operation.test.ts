import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { SponsoredProductsReportOperation } from '../../../../src/operations/reports/sponsored-products/sponsored-products-report-operation'
import { ReportResponseStatus } from '../../../../src/operations/reports/report-response'

jest.setTimeout(15000)

describe('SponsoredProductsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredProductsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'campaigns',
        metrics: ['attributedSales14d'],
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
        metrics: ['campaignId', 'campaignName', 'adGroupId', 'adGroupName', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with asins report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'asins',
        metrics: ['campaignId', 'campaignName', 'asin', 'keywordId', 'sku'],
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
        metrics: ['campaignId', 'keywordId', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with product ads report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'productAds',
        metrics: ['campaignId', 'cost', 'impressions', 'sku', 'asin'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe<ReportResponseStatus>('IN_PROGRESS')
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with targets report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: 'targets',
        metrics: ['campaignId', 'targetId', 'cost', 'impressions'],
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
      const requestReportResponse = await reportOperation.requestReport({
        recordType: 'targets',
        metrics: ['cost', 'impressions'],
        reportDate: '20200314',
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
      const requestReportResult = await reportOperation.requestReport({
        recordType: 'campaigns',
        metrics: ['clicks', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      const res = await reportOperation.downloadReport(requestReportResult.reportId)

      expect(res.length).toBeGreaterThan(0)
    })
  })
})
