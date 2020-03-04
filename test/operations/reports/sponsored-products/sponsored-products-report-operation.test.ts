import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { POLLY_PASSTHROUGH_TAG } from '../../../constants'
import { SponsoredProductsReportOperation } from '../../../../src/operations/reports/sponsored-products/sponsored-products-report-operation'
import { SponsoredProductsReportTypeEnum } from '../../../../src/operations/reports/report-types-enum'
import { CampaignReportMetricsEnum } from '../../../../src/operations/reports/metrics/campaign-report-metrics-enum'
import { ReportResponseStatusEnum } from '../../../../src/operations/reports/report-response'
import { DateTimeUtils, delay } from '../../../test-utils'
import { AdGroupReportMetricsEnum } from '../../../../src/operations/reports/metrics/ad-group-report-metrics-enum'
import { KeywordReportMetricsEnum } from '../../../../src/operations/reports/metrics/keyword-report-metrics-enum'
import { ProductAdsReportMetricsEnum } from '../../../../src/operations/reports/metrics/product-ads-report-metrics-enum'
import { ProductTargetingReportMetricsEnum } from '../../../../src/operations/reports/metrics/product-targeting-report-metrics-enum'
import { AsinsReportMetricsEnum } from '../../../../src/operations/reports/metrics/asins-report-metrics-enum'

jest.setTimeout(15000)

describe('SponsoredProductsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredProductsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS,
        metrics: [CampaignReportMetricsEnum.ATTRIBUTED_SALES14D],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with adgroups report ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.AD_GROUPS,
        metrics: [
          AdGroupReportMetricsEnum.CAMPAIGN_ID,
          AdGroupReportMetricsEnum.CAMPAIGN_NAME,
          AdGroupReportMetricsEnum.ADGROUP_ID,
          AdGroupReportMetricsEnum.ADGROUP_NAME,
          AdGroupReportMetricsEnum.COST,
          AdGroupReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with asins report ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.ASINS,
        metrics: [
          AsinsReportMetricsEnum.CAMPAIGN_ID,
          AsinsReportMetricsEnum.CAMPAIGN_NAME,
          AsinsReportMetricsEnum.ASIN,
          AsinsReportMetricsEnum.KEYWORD_ID,
          AsinsReportMetricsEnum.SKU,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with keywords report ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.KEYWORDS,
        metrics: [
          KeywordReportMetricsEnum.CAMPAIGN_ID,
          KeywordReportMetricsEnum.KEYWORD_ID,
          KeywordReportMetricsEnum.COST,
          KeywordReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with product ads report ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.PRODUCT_ADS,
        metrics: [
          ProductAdsReportMetricsEnum.CAMPAIGN_ID,
          ProductAdsReportMetricsEnum.COST,
          ProductAdsReportMetricsEnum.IMPRESSIONS,
          ProductAdsReportMetricsEnum.SKU,
          ProductAdsReportMetricsEnum.ASIN,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with targets report ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.PRODUCT_ATTRIBUTE_TARGETING,
        metrics: [
          ProductTargetingReportMetricsEnum.CAMPAIGN_ID,
          ProductTargetingReportMetricsEnum.TARGET_ID,
          ProductTargetingReportMetricsEnum.COST,
          ProductTargetingReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })
  })

  describe('getReport', () => {
    it(`only return report location when report status is SUCCESS ${POLLY_PASSTHROUGH_TAG}`, async () => {
      await delay()

      const requestReportResponse = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.PRODUCT_ATTRIBUTE_TARGETING,
        metrics: [
          ProductTargetingReportMetricsEnum.COST,
          ProductTargetingReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      await delay()

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
    it(`should return the report uncompressed ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const requestReportResult = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS,
        metrics: [
          CampaignReportMetricsEnum.CLICKS,
          CampaignReportMetricsEnum.COST,
          CampaignReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      await delay()

      const res = await reportOperation.downloadReport<CampaignReportMetricsEnum>(
        requestReportResult.reportId,
      )

      expect(res.length).toBeGreaterThan(0)
    })
  })
})
