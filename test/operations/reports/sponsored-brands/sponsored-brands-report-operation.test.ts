import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { SponsoredBrandsReportOperation } from '../../../../src/operations/reports/sponsored-brands/sponsored-brands-report-operation'
import { SponsoredBrandsReportTypeEnum } from '../../../../src/operations/reports/report-types-enum'
import { KeywordReportMetricsEnum } from '../../../../src/operations/reports/metrics/keyword-report-metrics-enum'
import { ReportResponseStatusEnum } from '../../../../src/operations/reports/report-response'

jest.setTimeout(15000)

describe('SponsoredBrandsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredBrandsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS,
        metrics: ['attributedSales14d'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with adgroups report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.AD_GROUPS,
        metrics: ['campaignId', 'campaignName', 'adGroupId', 'adGroupName', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with keywords report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.KEYWORDS,
        metrics: [
          KeywordReportMetricsEnum.CAMPAIGN_ID,
          KeywordReportMetricsEnum.KEYWORD_ID,
          KeywordReportMetricsEnum.COST,
          KeywordReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })
  })

  describe('getReport', () => {
    it(`only return report location when report status is SUCCESS`, async () => {
      const requestReportResult = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.KEYWORDS,
        metrics: [
          KeywordReportMetricsEnum.CAMPAIGN_ID,
          KeywordReportMetricsEnum.KEYWORD_ID,
          KeywordReportMetricsEnum.COST,
          KeywordReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: '20200314',
      })

      const res = await reportOperation.getReport(requestReportResult.reportId)
      expect(res.reportId).toBeDefined()
      expect(res.statusDetails).toBeDefined()

      if (res.status == ReportResponseStatusEnum.SUCCESS) {
        expect(res.location).toBeDefined()
        expect(res.fileSize).toBeDefined()
      }
    })
  })

  describe('downloadReport', () => {
    it('should return the report uncompressed', async () => {
      const requestReportResult = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS,
        metrics: ['clicks', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      const res = await reportOperation.downloadReport(requestReportResult.reportId)

      expect(res.length).toBeGreaterThanOrEqual(0)
    })
  })
})
