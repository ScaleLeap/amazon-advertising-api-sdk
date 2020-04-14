import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { SponsoredProductsReportOperation } from '../../../../src/operations/reports/sponsored-products/sponsored-products-report-operation'
import { SponsoredProductsReportTypeEnum } from '../../../../src/operations/reports/report-types-enum'
import { ReportResponseStatusEnum } from '../../../../src/operations/reports/report-response'
import { ProductAdsReportMetricsEnum } from '../../../../src/operations/reports/metrics/product-ads-report-metrics-enum'
import { ProductTargetingReportMetricsEnum } from '../../../../src/operations/reports/metrics/product-targeting-report-metrics-enum'

jest.setTimeout(15000)

describe('SponsoredProductsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredProductsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS,
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
        recordType: SponsoredProductsReportTypeEnum.AD_GROUPS,
        metrics: ['campaignId', 'campaignName', 'adGroupId', 'adGroupName', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with asins report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.ASINS,
        metrics: ['campaignId', 'campaignName', 'asin', 'keywordId', 'sku'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with keywords report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.KEYWORDS,
        metrics: ['campaignId', 'keywordId', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with product ads report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.PRODUCT_ADS,
        metrics: [
          ProductAdsReportMetricsEnum.CAMPAIGN_ID,
          ProductAdsReportMetricsEnum.COST,
          ProductAdsReportMetricsEnum.IMPRESSIONS,
          ProductAdsReportMetricsEnum.SKU,
          ProductAdsReportMetricsEnum.ASIN,
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with targets report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.PRODUCT_ATTRIBUTE_TARGETING,
        metrics: [
          ProductTargetingReportMetricsEnum.CAMPAIGN_ID,
          ProductTargetingReportMetricsEnum.TARGET_ID,
          ProductTargetingReportMetricsEnum.COST,
          ProductTargetingReportMetricsEnum.IMPRESSIONS,
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
      const requestReportResponse = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.PRODUCT_ATTRIBUTE_TARGETING,
        metrics: [
          ProductTargetingReportMetricsEnum.COST,
          ProductTargetingReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: '20200314',
      })

      const res = await reportOperation.getReport(requestReportResponse.reportId)

      expect(res.reportId).toBeDefined()
      expect(res.statusDetails).toBeDefined()

      if (res.status == ReportResponseStatusEnum.SUCCESS) {
        expect(res.location).toBeDefined()
        expect(res.fileSize).toBeDefined()
      }
    })
  })

  describe('downloadReport', () => {
    it(`should return the report uncompressed`, async () => {
      const requestReportResult = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS,
        metrics: ['clicks', 'cost', 'impressions'],
        reportDate: '20200314',
      })

      const res = await reportOperation.downloadReport(requestReportResult.reportId)

      expect(res.length).toBeGreaterThan(0)
    })
  })
})
