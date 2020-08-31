
# Table of Contents
- [Table of Contents](#table-of-contents)
- [Basic Configuration](#basic-configuration)
  - [OAuth2](#oauth2)
    - [Examples](#examples)
    - [Available Methods](#available-methods)
  - [HttpClient](#httpclient)
    - [Examples](#examples-1)
- [Basic Usage](#basic-usage)
  - [OperationProvider](#operationprovider)
  - [AmazonAdvertising](#amazonadvertising)
  - [Creating Operations from the class itself](#creating-operations-from-the-class-itself)
- [Operations](#operations)
  - [SponsoredBrandsAdGroupOperation](#sponsoredbrandsadgroupoperation)
    - [getAdGroup](#getadgroup)
    - [listAdGroup](#listadgroup)
  - [SponsoredDisplayAdGroupOperation](#sponsoreddisplayadgroupoperation)
    - [archiveAdGroup](#archiveadgroup)
    - [createAdGroups](#createadgroups)
    - [getAdGroup](#getadgroup-1)
    - [getAddGroupExtended](#getaddgroupextended)
    - [listAdGroups](#listadgroups)
    - [listAdGroupsExtended](#listadgroupsextended)
    - [updateAdGroups](#updateadgroups)
  - [SponsoredProductsAdGroupOperation](#sponsoredproductsadgroupoperation)
    - [archiveAdGroup](#archiveadgroup-1)
    - [createAdGroups](#createadgroups-1)
    - [getAdGroup](#getadgroup-2)
    - [getAddGroupExtended](#getaddgroupextended-1)
    - [listAdGroups](#listadgroups-1)
    - [listAdGroupsExtended](#listadgroupsextended-1)
  - [SponsoredProductsBidRecommendationOperation](#sponsoredproductsbidrecommendationoperation)
    - [getAdGroupBidRecommendations](#getadgroupbidrecommendations)
    - [getKeywordBidRecommendations](#getkeywordbidrecommendations)
    - [createKeywordBidRecommendations](#createkeywordbidrecommendations)
    - [getBidRecommendations](#getbidrecommendations)
  - [SponsoredBrandsCampaignOperation](#sponsoredbrandscampaignoperation)
    - [archiveCampaign](#archivecampaign)
    - [createCampaigns](#createcampaigns)
    - [getCampaign](#getcampaign)
    - [listCampaigns](#listcampaigns)
    - [updateCampaigns](#updatecampaigns)
  - [SponsoredDisplayCampaignOperation](#sponsoreddisplaycampaignoperation)
    - [archiveCampaign](#archivecampaign-1)
    - [createCampaigns](#createcampaigns-1)
    - [getCampaign](#getcampaign-1)
    - [getCampaignEx](#getcampaignex)
    - [listCampaigns](#listcampaigns-1)
    - [listCampaignsEx](#listcampaignsex)
    - [updateCampaigns](#updatecampaigns-1)
  - [SponsoredProductsCampaignOperation](#sponsoredproductscampaignoperation)
    - [archiveCampaign](#archivecampaign-2)
    - [createCampaigns](#createcampaigns-2)
    - [getCampaign](#getcampaign-2)
    - [getCampaignExtended](#getcampaignextended-1)
    - [listCampaigns](#listcampaigns-2)
    - [listCampaignsExtended](#listcampaignsextended-1)
    - [updateCampaigns](#updatecampaigns-2)
  - [SponseredBrandsDraftsOperation](#sponseredbrandsdraftsoperation)
    - [archiveDraftCampaign](#archivedraftcampaign)
    - [createDraftCampaigns](#createdraftcampaigns)
    - [getDraftCampaign](#getdraftcampaign)
    - [listDraftCampaigns](#listdraftcampaigns)
    - [submitDraftCampaigns](#submitdraftcampaigns)
    - [updateDraftCampaigns](#updatedraftcampaigns)
  - [SponsoredBrandsKeywordRecommendationsOperation](#sponsoredbrandskeywordrecommendationsoperation)
    - [getKeywordRecommendations](#getkeywordrecommendations)
  - [SponsoredBrandsKeywordsOperation](#sponsoredbrandskeywordsoperation)
    - [archiveKeyword](#archivekeyword)
    - [createKeywords](#createkeywords)
    - [getKeyword](#getkeyword)
    - [listKeywords](#listkeywords)
    - [updateKeywords](#updatekeywords)
  - [SponsoredBrandsNegativeKeywordsOperation](#sponsoredbrandsnegativekeywordsoperation)
    - [archiveNegativeKeyword](#archivenegativekeyword)
    - [createNegativeKeywords](#createnegativekeywords)
    - [getNegativeKeyword](#getnegativekeyword)
    - [updateNegativeKeywords](#updatenegativekeywords)
  - [SponsoredProductsAdGroupKeywordsOperation](#sponsoredproductsadgroupkeywordsoperation)
    - [archiveBiddableKeyword](#archivebiddablekeyword)
    - [createKeywords](#createkeywords-1)
    - [getBiddableKeyword](#getbiddablekeyword)
    - [getBiddableKeywordExtended](#getbiddablekeywordextended)
    - [listBiddableKeywords](#listbiddablekeywords)
    - [listBiddableKeywordsExtended](#listbiddablekeywordsextended)
    - [updateKeywords](#updatekeywords-1)
  - [SponsoredProductsAdGroupNegativeKeywordsOperation](#sponsoredproductsadgroupnegativekeywordsoperation)
    - [archiveNegativeKeyword](#archivenegativekeyword-1)
    - [createNegativeKeywords](#createnegativekeywords-1)
    - [getNegativeKeyword](#getnegativekeyword-1)
    - [getNegativeKeywordExtended](#getnegativekeywordextended)
    - [listNegativeKeywords](#listnegativekeywords)
    - [listNegativeKeywordsExtended](#listnegativekeywordsextended)
    - [updateNegativeKeywords](#updatenegativekeywords-1)
  - [SponsoredProductsCampaignNegativeKeywordsOperation](#sponsoredproductscampaignnegativekeywordsoperation)
    - [archiveCampaignNegativeKeyword](#archivecampaignnegativekeyword)
    - [createCampaignNegativeKeywords](#createcampaignnegativekeywords)
    - [getCampaignNegativeKeyword](#getcampaignnegativekeyword)
    - [getCampaignNegativeKeywordExtended](#getcampaignnegativekeywordextended)
    - [listCampaignNegativeKeywords](#listcampaignnegativekeywords)
    - [listCampaignNegativeKeywordsExtended](#listcampaignnegativekeywordsextended)
    - [updateCampaignNegativeKeywords](#updatecampaignnegativekeywords)
  - [SponsoredProductsSuggestedKeywordsOperation](#sponsoredproductssuggestedkeywordsoperation)
    - [bulkGetAsinSuggestedKeywords](#bulkgetasinsuggestedkeywords)
    - [getAdGroupSuggestedKeywords](#getadgroupsuggestedkeywords)
    - [getAdGroupSuggestedKeywordsExtended](#getadgroupsuggestedkeywordsextended)
    - [getAsinSuggestedKeywords](#getasinsuggestedkeywords)
  - [SponsoredBrandsNegativeTargetingOperation](#sponsoredbrandsnegativetargetingoperation)
    - [archiveNegativeTarget](#archivenegativetarget)
    - [batchGetNegativeTargets](#batchgetnegativetargets)
    - [createNegativeTargets](#createnegativetargets)
    - [getNegativeTarget](#getnegativetarget)
    - [listNegativeTargets](#listnegativetargets)
    - [updateNegativeTargets](#updatenegativetargets)
  - [SponsoredDisplayNegativeTargetingOperation](#sponsoreddisplaynegativetargetingoperation)
    - [archiveNegativeTargetingClause](#archivenegativetargetingclause)
    - [createNegativeTargetingClauses](#createnegativetargetingclauses)
    - [getNegativeTargetingClause](#getnegativetargetingclause)
    - [getNegativeTargetingClauseExtended](#getnegativetargetingclauseextended)
    - [listNegativeTargetingClauses](#listnegativetargetingclauses)
    - [listNegativeTargetingClausesExtended](#listnegativetargetingclausesextended)
    - [updateNegativeTargetingClauses](#updatenegativetargetingclauses)
  - [SponsoredProductsNegativeTargetingOperation](#sponsoredproductsnegativetargetingoperation)
    - [archiveNegativeTargetingClause](#archivenegativetargetingclause-1)
    - [createNegativeTargetingClauses](#createnegativetargetingclauses-1)
    - [getNegativeTargetingClause](#getnegativetargetingclause-1)
    - [getNegativeTargetingClauseExtended](#getnegativetargetingclauseextended-1)
    - [listNegativeTargetingClauses](#listnegativetargetingclauses-1)
    - [listNegativeTargetingClausesExtended](#listnegativetargetingclausesextended-1)
    - [updateNegativeTargetingClauses](#updatenegativetargetingclauses-1)
  - [PortfolioOperation](#portfoliooperation)
    - [createPortfolios](#createportfolios)
    - [getPortfolio](#getportfolio)
    - [getPortfolioEx](#getportfolioex)
    - [listPortfolios](#listportfolios)
    - [listPortfoliosEx](#listportfoliosex)
    - [updatePortfolios](#updateportfolios)
  - [SponsoredDiplayProductAdsOperation](#sponsoreddiplayproductadsoperation)
    - [archiveProductAd](#archiveproductad)
    - [createProductAds](#createproductads)
    - [getProductAd](#getproductad)
    - [getProductAdExtended](#getproductadextended)
    - [listProductAds](#listproductads)
    - [listProductAdsExtended](#listproductadsextended)
    - [updateProductAds](#updateproductads)
  - [SponsoredProductsProductAdsOperation](#sponsoredproductsproductadsoperation)
    - [archiveProductAd](#archiveproductad-1)
    - [createProductAds](#createproductads-1)
    - [getProductAd](#getproductad-1)
    - [getProductAdExtended](#getproductadextended-1)
    - [listProductAds](#listproductads-1)
    - [listProductAdsExtended](#listproductadsextended-1)
    - [updateProductAds](#updateproductads-1)
  - [SponsoredBrandsProductTargetingOperation](#sponsoredbrandsproducttargetingoperation)
    - [archiveTarget](#archivetarget)
    - [batchGetTargets](#batchgettargets)
    - [createTargets](#createtargets)
    - [getTarget](#gettarget)
    - [listTargets](#listtargets)
    - [updateTargets](#updatetargets)
  - [SponsoredProductsProductTargetingOperation](#sponsoredproductsproducttargetingoperation)
    - [archiveTargetingClause](#archivetargetingclause)
    - [createTargetRecommendations](#createtargetrecommendations)
    - [createTargetingClauses](#createtargetingclauses)
    - [getBrandRecommendations](#getbrandrecommendations)
    - [getRefinementsForCategory](#getrefinementsforcategory)
    - [getTargetingCategories](#gettargetingcategories)
    - [getTargetingClause](#gettargetingclause)
    - [getTargetingClauseExtended](#gettargetingclauseextended)
    - [listTargetingClauses](#listtargetingclauses)
    - [listTargetingClausesExtended](#listtargetingclausesextended)
    - [updateTargetingClauses](#updatetargetingclauses)
  - [ProfileOperation](#profileoperation)
    - [getBrands](#getbrands)
    - [getProfile](#getprofile)
    - [listProfiles](#listprofiles)
    - [registerBrand](#registerbrand)
    - [registerProfile](#registerprofile)
    - [updateProfiles](#updateprofiles)
  - [SponsoredBrandsBidRecommendationsOperation](#sponsoredbrandsbidrecommendationsoperation)
    - [SponsoredBrandsBidRecommendationsOperation](#sponsoredbrandsbidrecommendationsoperation-1)
  - [SponsoredBrandsTargetingRecommendationsOperation](#sponsoredbrandstargetingrecommendationsoperation)
    - [getBrandRecommendations](#getbrandrecommendations-1)
    - [getCategoryRecommendations](#getcategoryrecommendations)
    - [getProductRecommendations](#getproductrecommendations)
  - [SponsoredBrandsReportOperation](#sponsoredbrandsreportoperation)
    - [downloadReport](#downloadreport)
    - [getReport](#getreport)
    - [requestReport](#requestreport)
  - [SponsoredDisplayReportOperation](#sponsoreddisplayreportoperation)
    - [downloadReport](#downloadreport-1)
    - [getReport](#getreport-1)
    - [requestReport](#requestreport-1)
  - [SponsoredProductsReportOperation](#sponsoredproductsreportoperation)
    - [downloadReport](#downloadreport-2)
    - [getReport](#getreport-2)
    - [requestReport](#requestreport-2)
  - [BaseReportOperation](#basereportoperation)
    - [downloadReport](#downloadreport-3)
    - [getReport](#getreport-3)
  - [SponsoredBrandsSnapshotOperation](#sponsoredbrandssnapshotoperation)
    - [downloadSnapshot](#downloadsnapshot)
    - [getSnapshot](#getsnapshot)
    - [requestSnapshot](#requestsnapshot)
  - [SponsoredProductsSnapshotOperation](#sponsoredproductssnapshotoperation)
    - [downloadSnapshot](#downloadsnapshot-1)
    - [getSnapshot](#getsnapshot-1)
    - [requestSnapshot](#requestsnapshot-1)
  - [SponsoredBrandsStoresInfoOperation](#sponsoredbrandsstoresinfooperation)
    - [getStore](#getstore)
    - [listStores](#liststores)

# Basic Configuration

## OAuth2

<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////////////////////////////START OAuth2/////////////////////////////////////////////// -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->

The Amazon Advertising API manages permissions using the Login with Amazon service.
The API uses authorization and refresh tokens in a standard OAuth 2.0 flow.

[Read more about manually creating API authorization and refresh tokens here](https://advertising.amazon.com/API/docs/en-us/setting-up/generate-api-tokens)

To manage OAuth2 tokens this library has its own OAuth2 module which inherits and implements a similar interface to [client-oauth2 package](https://www.npmjs.com/package/client-oauth2).

### Examples

**Creating the OAuthClient**
```typescript
import { OAuthClient } from '@scaleleap/amazon-advertising-api-sdk'
import { amazonMarketplaces, assertMarketplaceHasAdvertising } from '@scaleleap/amazon-marketplaces'

assertMarketplaceHasAdvertising(amazonMarketplaces.US)
const client = new OAuthClient({
  clientId: '...',
  clientSecret: '...',
  redirectUri: '...',
}, amazonMarketplaces.US)
```

**Using the OAuthClient to create the HttpClient**
```typescript
const auth = {
  accessToken: "ACCESS_TOKEN",
  clientId: "YOUR_CLIENT_ID",
  scope: 10000000000 // Use your Profile ID as the value for the management scope
}
const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
```

- `scope` in the `auth` object can also be set to any arbritrary number as it is ignored in some requests (e.g. `ProfileOperation.listProfiles`)

### Available Methods

**getUri**

```typescript
const uri = client.getUri()
```
**getToken**

```typescript
const token = client.getToken()
```
`const token` in this case will be of type `Token` from `client-oauth2`

**createToken**

To re-create an access token instance and make requests on behalf on the user, you can create an access token instance by using the createToken method on a client instance.

```typescript
// const oldToken: Token
const token = client.createToken(oldToken.accessToken, oldToken.refreshToken)
```
`const token` in this case will be of type `Token` from `client-oauth2`

## HttpClient

<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////////////////////////////START HttpClient/////////////////////////////////////////////// -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////// -->

To make requests, this library uses its own `HttpClient`

### Examples

**Using the OAuthClient to create the HttpClient**
```typescript
import { HttpClient } from '@scaleleap/amazon-advertising-api-sdk'

// `client` is of type `OAuthClient`
const auth = {
  accessToken: (client.getToken()).accessToken,
  clientId: "YOUR_CLIENT_ID",
  scope: 10000000000 // Use your Profile ID as the value for the management scope
}
const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
```
**Using the HttpClient with the AmazonAdvertising class**

```typescript
import { amazonMarketplaces, assertMarketplaceHasAdvertising } from '@scaleleap/amazon-marketplaces'
import { AmazonAdvertising} from '@scaleleap/amazon-advertising-api-sdk'

assertMarketplaceHasAdvertising(amazonMarketplaces.US)
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
```

**Using the HttpClient with the OperationProvider class**

```typescript
import { OperationProvider, HttpClient, ProfileOperation } from '@scaleleap/amazon-advertising-api-sdk'

const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)

// A provider instance, that knows how to instantiate operation classes
const operationProvider = new OperationProvider(httpClient)

// Instantiate an "operation" object
const profileOperation = operationProvider.create(ProfileOperation)
```

# Basic Usage

Sending requests using the `amazon-advertising-api-sdk` is done through `operations`. `operations` can be called using either the `OperationProvider` class or the `AmazonAdvertising` class

## OperationProvider

The `OperationProvider`, as the name suggests, provides the `operations`

**Creating the OperationProvider class and creating a ProfileOperation class to list profiles**

```typescript
import { HttpClient, OperationProvider, ProfileOperation } from '@scaleleap/amazon-advertising-api-sdk'

const operationProvider = new OperationProvider(httpClient)

const profileOperation = operationProvider.create(ProfileOperation)

// Using ProfileOperation to list profiles
const res = await profileOperation.listProfiles()
```

## AmazonAdvertising

The `AmazonAdvertising` class gives you access to all the `operations`

**Using the AmazonAdvertising class to list profiles**

```typescript
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { AmazonAdvertising } from '@scaleleap/amazon-advertising-api-sdk'

assertMarketplaceHasAdvertising(amazonMarketplaces.US)
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const profileOperation = amazonAdvertising.profile

// Using ProfileOperation to list profiles
const res = await profileOperation.listProfiles()
```

## Creating Operations from the class itself
```typescript
import { HttpClient } from '@scaleleap/amazon-advertising-api-sdk'

const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
const profileOperation = ProfileOperation.create(httpClient)

// Using ProfileOperation to list profiles
const res = await profileOperation.listProfiles()
```

# Operations

## [SponsoredBrandsAdGroupOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsadgroupoperation.html)

### [getAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsadgroupoperation.html#getadgroup)

### [listAdGroup](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups/listAdGroups)

## [SponsoredDisplayAdGroupOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html)

### [archiveAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#archiveadgroup)

### [createAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#createadgroups)

### [getAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#getadgroup)

### [getAddGroupExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#getadgroupextended)

### [listAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#listadgroups)

### [listAdGroupsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#listadgroupsextended)

### [updateAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayadgroupoperation.html#updateadgroups)

## [SponsoredProductsAdGroupOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html)

### [archiveAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#archiveadgroup)

### [createAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#createadgroups)

### [getAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#getadgroup)

### [getAddGroupExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#getadgroupextended)

### [listAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#listadgroups)

### [listAdGroupsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#listadgroupsextended)

## [SponsoredProductsBidRecommendationOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html)

### [getAdGroupBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#getadgroupbidrecommendations)

### [getKeywordBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#getkeywordbidrecommendations)

### [createKeywordBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#createkeywordbidrecommendations)

### [getBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#getbidrecommendations)

## [SponsoredBrandsCampaignOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html)

### [archiveCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#archivecampaign)

### [createCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#createcampaigns)

### [getCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#getcampaign)

### [listCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#listcampaigns)

### [updateCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#updatecampaigns)

## [SponsoredDisplayCampaignOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html)

### [archiveCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#archivecampaign)

### [createCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#createcampaigns)

### [getCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#getcampaign)

### [getCampaignExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#getcampaignextended)

### [listCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#listcampaigns)

### [listCampaignsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#listcampaignsextended)

### [updateCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaycampaignoperation.html#updatecampaigns)

## [SponsoredProductsCampaignOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html)

### [archiveCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#archivecampaign)

### [createCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#createcampaigns)

### [getCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#getcampaign)

### [getCampaignEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#getcampaignex)

### [listCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#listcampaigns)

### [listCampaignsEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#listcampaignsex)

### [updateCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#updatecampaigns)

## [SponseredBrandsDraftsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponseredbrandsdraftsoperation.html)

### [archiveDraftCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#archivedraftcampaign)

### [createDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#createdraftcampaigns)

### [getDraftCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#getdraftcampaign)

### [listDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#listdraftcampaigns)

### [submitDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#submitdraftcampaigns)

### [updateDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#updatedraftcampaigns)

## [SponsoredBrandsKeywordRecommendationsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordrecommendationsoperation.html)

### [getKeywordRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordrecommendationsoperation.html#getkeywordrecommendations)

## [SponsoredBrandsKeywordsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordsoperation.html)

### [archiveKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordsoperation.html#archiveKeyword)

### [createKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordsoperation.html#createKeywords)

### [getKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordsoperation.html#getKeyword)

### [listKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordsoperation.html#listKeywords)

### [updateKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandskeywordsoperation.html#updateKeywords)

## [SponsoredBrandsNegativeKeywordsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativekeywordsoperation.html)

### [archiveNegativeKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativekeywordsoperation.html#archivenegativekeyword)

### [createNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativekeywordsoperation.html#createnegativekeywords)

### [getNegativeKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativekeywordsoperation.html#getnegativekeyword)

### [updateNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativekeywordsoperation.html#updatenegativekeywords)

## [SponsoredProductsAdGroupKeywordsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html)

### [archiveBiddableKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#archivebiddablekeyword)

### [createKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#createkeywords)

### [getBiddableKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#getbiddablekeyword)

### [getBiddableKeywordExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#getbiddablekeywordextended)

### [listBiddableKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#listbiddablekeywords)

### [listBiddableKeywordsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#listbiddablekeywordsextended)

### [updateKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupkeywordsoperation.html#updatekeywords)

## [SponsoredProductsAdGroupNegativeKeywordsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html)

### [archiveNegativeKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#archivenegativekeyword)

### [createNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#createnegativekeywords)

### [getNegativeKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#getnegativekeyword)

### [getNegativeKeywordExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#getnegativekeywordextended)

### [listNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#listnegativekeywords)

### [listNegativeKeywordsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#listnegativekeywordsextended)

### [updateNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupnegativekeywordsoperation.html#updatenegativekeywords)

## [SponsoredProductsCampaignNegativeKeywordsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html)

### [archiveCampaignNegativeKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#archivecampaignnegativekeyword)

### [createCampaignNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#createcampaignnegativekeywords)

### [getCampaignNegativeKeyword](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#getcampaignnegativekeyword)

### [getCampaignNegativeKeywordExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#getcampaignnegativekeywordextended)

### [listCampaignNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#listcampaignnegativekeywords)

### [listCampaignNegativeKeywordsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#listcampaignnegativekeywordsextended)

### [updateCampaignNegativeKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignnegativekeywordsoperation.html#updatecampaignnegativekeywords)

## [SponsoredProductsSuggestedKeywordsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssuggestedkeywordsoperation.html)

### [bulkGetAsinSuggestedKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssuggestedkeywordsoperation.html#bulkgetasinsuggestedkeywords)

### [getAdGroupSuggestedKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssuggestedkeywordsoperation.html#getadgroupsuggestedkeywords)

### [getAdGroupSuggestedKeywordsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssuggestedkeywordsoperation.html#getadgroupsuggestedkeywordsextended)

### [getAsinSuggestedKeywords](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssuggestedkeywordsoperation.html#getasinsuggestedkeywords)

## [SponsoredBrandsNegativeTargetingOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html)

### [archiveNegativeTarget](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html#archivenegativetarget)

### [batchGetNegativeTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html#batchgetnegativetargets)

### [createNegativeTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html#createnegativetargets)

### [getNegativeTarget](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html#getnegativetarget)

### [listNegativeTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html#listnegativetargets)

### [updateNegativeTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsnegativetargetingoperation.html#updatenegativetargets)

## [SponsoredDisplayNegativeTargetingOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html)

### [archiveNegativeTargetingClause](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#archivenegativetargetingclause)

### [createNegativeTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#createnegativetargetingclauses)

### [getNegativeTargetingClause](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#getnegativetargetingclause)

### [getNegativeTargetingClauseExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#getnegativetargetingclauseextended)

### [listNegativeTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#listnegativetargetingclauses)

### [listNegativeTargetingClausesExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#listnegativetargetingclausesextended)

### [updateNegativeTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplaynegativetargetingoperation.html#updatenegativetargetingclauses)

## [SponsoredProductsNegativeTargetingOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html)

### [archiveNegativeTargetingClause](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#archivenegativetargetingclause)

### [createNegativeTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#createnegativetargetingclauses)

### [getNegativeTargetingClause](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#getnegativetargetingclause)

### [getNegativeTargetingClauseExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#getnegativetargetingclauseextended)

### [listNegativeTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#listnegativetargetingclauses)

### [listNegativeTargetingClausesExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#listnegativetargetingclausesextended)

### [updateNegativeTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsnegativetargetingoperation.html#updatenegativetargetingclauses)

## [PortfolioOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html)

### [createPortfolios](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html#createportfolios)

### [getPortfolio](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html#getportfolio)

### [getPortfolioEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html#getportfolioex)

### [listPortfolios](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html#listportfolios)

### [listPortfoliosEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html#listportfoliosex)

### [updatePortfolios](https://amazon-advertising-api-sdk.scaleleap.org/classes/portfoliooperation.html#updateportfolios)

## [SponsoredDiplayProductAdsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html)

### [archiveProductAd](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#archiveproductad)

### [createProductAds](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#createproductads)

### [getProductAd](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#getproductad)

### [getProductAdExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#getproductadextended)

### [listProductAds](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#listproductads)

### [listProductAdsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#listproductadsextended)

### [updateProductAds](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayproductadsoperation.html#updateproductads)

## [SponsoredProductsProductAdsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html)

### [archiveProductAd](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#archiveproductad)

### [createProductAds](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#createproductads)

### [getProductAd](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#getproductad)

### [getProductAdExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#getproductadextended)

### [listProductAds](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#listproductads)

### [listProductAdsExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#listproductadsextended)

### [updateProductAds](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproductadsoperation.html#updateproductads)

## [SponsoredBrandsProductTargetingOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html)

### [archiveTarget](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html#archivetarget)

### [batchGetTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html#batchgettargets)

### [createTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html#createtargets)

### [getTarget](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html#gettarget)

### [listTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html#listtargets)

### [updateTargets](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsproducttargetingoperation.html#updatetargets)

## [SponsoredProductsProductTargetingOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html)

### [archiveTargetingClause](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#archivetargetingclause)

### [createTargetRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#createtargetrecommendations)

### [createTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#createtargetingclauses)

### [getBrandRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#getbrandrecommendations)

### [getRefinementsForCategory](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#getrefinementsforcategory)

### [getTargetingCategories](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#gettargetingcategories)

### [getTargetingClause](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#gettargetingclause)

### [getTargetingClauseExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#gettargetingclauseextended)

### [listTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#listtargetingclauses)

### [listTargetingClausesExtended](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#listtargetingclausesextended)

### [updateTargetingClauses](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsproducttargetingoperation.html#updatetargetingclauses)

## [ProfileOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html)

### [getBrands](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html#getbrands)

### [getProfile](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html#getprofile)

### [listProfiles](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html#listprofiles)

### [registerBrand](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html#registerbrand)

### [registerProfile](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html#registerprofile)

### [updateProfiles](https://amazon-advertising-api-sdk.scaleleap.org/classes/profileoperation.html#updateprofiles)

## [SponsoredBrandsBidRecommendationsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsbidrecommendationsoperation.html)

### [SponsoredBrandsBidRecommendationsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsbidrecommendationsoperation.html#getbidrecommendations)

## [SponsoredBrandsTargetingRecommendationsOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandstargetingrecommendationsoperation.html)

### [getBrandRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandstargetingrecommendationsoperation.html#getbrandrecommendations)

### [getCategoryRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandstargetingrecommendationsoperation.html#getcategoryrecommendations)

### [getProductRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandstargetingrecommendationsoperation.html#getproductrecommendations)

## [SponsoredBrandsReportOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsreportoperation.html)

### [downloadReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsreportoperation.html#downloadreport)

### [getReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsreportoperation.html#getreport)

### [requestReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsreportoperation.html#requestreport)

## [SponsoredDisplayReportOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayreportoperation.html)

### [downloadReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayreportoperation.html#downloadreport)

### [getReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayreportoperation.html#getreport)

### [requestReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoreddisplayreportoperation.html#requestreport)

## [SponsoredProductsReportOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsreportoperation.html)

### [downloadReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsreportoperation.html#downloadreport)

### [getReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsreportoperation.html#getreport)

### [requestReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsreportoperation.html#requestreport)

## [BaseReportOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/basereportoperation.html)

### [downloadReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/basereportoperation.html#downloadreport)

### [getReport](https://amazon-advertising-api-sdk.scaleleap.org/classes/basereportoperation.html#getreport)

## [SponsoredBrandsSnapshotOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandssnapshotoperation.html)

### [downloadSnapshot](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandssnapshotoperation.html#downloadsnapshot)

### [getSnapshot](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandssnapshotoperation.html#getsnapshot)

### [requestSnapshot](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandssnapshotoperation.html#requestsnapshot)

## [SponsoredProductsSnapshotOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssnapshotoperation.html)

### [downloadSnapshot](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssnapshotoperation.html#downloadsnapshot)

### [getSnapshot](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssnapshotoperation.html#getsnapshot)

### [requestSnapshot](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductssnapshotoperation.html#requestsnapshot)

## [SponsoredBrandsStoresInfoOperation](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsstoresinfooperation.html)

### [getStore](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsstoresinfooperation.html#getstore)

### [listStores](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsstoresinfooperation.html#liststores)
