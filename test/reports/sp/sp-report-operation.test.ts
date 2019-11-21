import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import setupPolly from '../../polly'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { SponsoredProductsReportOperation } from '../../../src/operations/reports/sp/sp-report-operation'
import { SponsoredProductsReportTypeEnum } from '../../../src/operations/reports/report-types-enum'
import { CampaignReportMetricsEnum } from '../../../src/operations/reports/metrics/campaign-report-metrics-enum'
import { ReportResponseStatusEnum } from '../../../src/operations/reports/report-response'

setupPolly()

describe('SponsoredProductsReportOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const reportOperation = operationProvider.create(SponsoredProductsReportOperation)

  describe('requestReport', () => {
    it(`should return a response ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS,
        metrics: [CampaignReportMetricsEnum.ATTRIBUTED_SALES_14D],
        reportDate: new Date()
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, ''),
      })

      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
    })
  })
})
