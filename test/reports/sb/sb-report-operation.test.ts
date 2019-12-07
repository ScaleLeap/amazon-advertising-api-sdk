import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import setupPolly from '../../polly'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { DateTimeUtils, Ramdom } from '../../test-utils'
import { SponsoredBrandsReportOperation } from '../../../src/operations/reports/sb/sb-report-operation'
import { SponsoredBrandsReportTypeEnum } from '../../../src/operations/reports/report-types-enum'
import { AdGroupReportMetricsEnum } from '../../../src/operations/reports/metrics/adgroup-report-metrics-enum'
import { CampaignReportMetricsEnum } from '../../../src/operations/reports/metrics/campaign-report-metrics-enum'
import { KeywordReportMetricsEnum } from '../../../src/operations/reports/metrics/keyword-report-metrics-enum'
import { ReportResponseStatusEnum } from '../../../src/operations/reports/report-response'

setupPolly()

describe('SponsoredBrandsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredBrandsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS,
        metrics: [CampaignReportMetricsEnum.ATTRIBUTED_SALES14D],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with adgroups report ${POLLY_PASSTHROUGH_TAG}`, done => {
      jest.setTimeout(15000)

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      setTimeout(async () => {
        const res = await reportOperation.requestReport({
          recordType: SponsoredBrandsReportTypeEnum.AD_GROUPS,
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
        done()
      }, Ramdom.getRandomTimeout())
    })

    it(`should return a in progress status with keywords report ${POLLY_PASSTHROUGH_TAG}`, done => {
      jest.setTimeout(15000)

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      setTimeout(async () => {
        const res = await reportOperation.requestReport({
          recordType: SponsoredBrandsReportTypeEnum.KEYWORDS,
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
        done()
      }, Ramdom.getRandomTimeout())
    })
  })

  describe('getReport', () => {
    it(`only return report location when report status is SUCCESS ${POLLY_PASSTHROUGH_TAG}`, done => {
      jest.setTimeout(15000)

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      setTimeout(async () => {
        const requestReportResult = await reportOperation.requestReport({
          recordType: SponsoredBrandsReportTypeEnum.KEYWORDS,
          metrics: [
            KeywordReportMetricsEnum.CAMPAIGN_ID,
            KeywordReportMetricsEnum.KEYWORD_ID,
            KeywordReportMetricsEnum.COST,
            KeywordReportMetricsEnum.IMPRESSIONS,
          ],
          reportDate: DateTimeUtils.getCurrentISODate(),
        })
        const res = await reportOperation.getReport(requestReportResult.reportId)

        expect(res.reportId).toBeDefined()
        expect(res.statusDetails).toBeDefined()

        if (res.status == ReportResponseStatusEnum.SUCCESS) {
          expect(res.location).toBeDefined()
          expect(res.fileSize).toBeDefined()
        }
        done()
      }, Ramdom.getRandomTimeout())
    })
  })

  describe.skip('downloadReport', () => {
    it('should return the report uncompressed', async () => {
      const requestReportResult = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS,
        metrics: [
          CampaignReportMetricsEnum.CLICKS,
          CampaignReportMetricsEnum.COST,
          CampaignReportMetricsEnum.IMPRESSIONS,
        ],
        reportDate: DateTimeUtils.getCurrentISODate(),
      })

      const res = await reportOperation.downloadReport<CampaignReportMetricsEnum>(
        requestReportResult.reportId,
      )

      expect(res.length).toBeGreaterThan(0)
    })
  })
})
