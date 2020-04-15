import { OperationProvider } from '../../../../src/operations/operation-provider'
import { httpClientFactory } from '../../../http-client-factory'
import { SponsoredBrandsReportOperation } from '../../../../src/operations/reports/sponsored-brands/sponsored-brands-report-operation'
import { SponsoredBrandsReportTypeEnum } from '../../../../src/operations/reports/report-types-enum'
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
        metrics: ['campaignBudget', 'campaignBudgetType', 'campaignStatus'],
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
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    it(`should return a in progress status with keywords report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.KEYWORDS,
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
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    /**
     * TODO: Need check on Production API again. Sandbox API returns an error:
     * Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/headlineSearch/report
     */
    it.skip(`should return a in progress status with headline search report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.HEADLINE_SEARCH,
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
        ],
        reportDate: '20200314',
      })

      expect(res.reportId).toBeDefined()
      expect(res.recordType).toBeDefined()
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })

    /**
     * TODO: Need check on Production API again. Sandbox API returns an error:
     * Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/searchTerms/report
     */
    it.skip(`should return a in progress status with search term report`, async () => {
      const res = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.SEARCH_TERM,
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
      expect(res.status).toBe(ReportResponseStatusEnum.IN_PROGRESS)
      expect(res.statusDetails).toBeDefined()
    })
  })

  describe('getReport', () => {
    it(`only return report location when report status is SUCCESS`, async () => {
      expect.assertions(4)
      const requestReportResult = await reportOperation.requestReport({
        recordType: SponsoredBrandsReportTypeEnum.KEYWORDS,
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
        metrics: ['campaignBudget', 'campaignBudgetType', 'campaignStatus'],
        reportDate: '20200314',
      })

      const res = await reportOperation.downloadReport(requestReportResult.reportId)

      expect(res.length).toBeGreaterThanOrEqual(0)
    })
  })
})
