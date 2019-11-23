import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import setupPolly from '../../polly'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { SponsoredProductsReportOperation } from '../../../src/operations/reports/sp/sp-report-operation'
import { SponsoredProductsReportTypeEnum } from '../../../src/operations/reports/report-types-enum'
import { CampaignReportMetricsEnum } from '../../../src/operations/reports/metrics/campaign-report-metrics-enum'
import { ReportResponseStatusEnum } from '../../../src/operations/reports/report-response'
import { DateTimeUtils } from '../../datetime-utils'

setupPolly()

describe('SponsoredProductsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredProductsReportOperation)

  describe('requestReport', () => {
    it(`should return a in progress status ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS,
        metrics: [CampaignReportMetricsEnum.ATTRIBUTED_SALES_14D],
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
      const reportId: string = 'amzn1.clicksAPI.v1.m1.5DD6AC1A.fcb02e87-8b0a-4edf-8f04-cd87e66376d5'
      const res = await reportOperation.getReport(reportId)

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.statusDetails).toBeDefined()

      if (res.status == ReportResponseStatusEnum.SUCCESS) {
        expect(res.location).toBeDefined()
        expect(res.fileSize).toBeDefined()
      }
    })
  })
})
