
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
  - [SponsoredProductsAdGroupOperation](#sponsoredproductsadgroupoperation)
    - [getAdGroup](#getadgroup-1)
    - [getAddGroupEx](#getaddgroupex)
    - [createAdGroups](#createadgroups)
    - [updateAdGroups](#updateadgroups)
    - [archiveAdGroup](#archiveadgroup)
    - [listAdGroups](#listadgroups)
    - [listAdGroupsEx](#listadgroupsex)
    - [updateAdGroups](#updateadgroups-1)
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
  - [SponsoredProductsCampaignOperation](#sponsoredproductscampaignoperation)
    - [archiveCampaign](#archivecampaign-1)
    - [createCampaigns](#createcampaigns-1)
    - [getCampaign](#getcampaign-1)
    - [getCampaignEx](#getcampaignex)
    - [listCampaigns](#listcampaigns-1)
    - [listCampaignsEx](#listcampaignsex)
    - [updateCampaigns](#updatecampaigns-1)
  - [SponseredBrandsDraftsOperation](#sponseredbrandsdraftsoperation)
    - [archiveDraftCampaign](#archivedraftcampaign)
    - [createDraftCampaigns](#createdraftcampaigns)
    - [getDraftCampaign](#getdraftcampaign)
    - [listDraftCampaigns](#listdraftcampaigns)
    - [submitDraftCampaigns](#submitdraftcampaigns)
    - [updateDraftCampaigns](#updatedraftcampaigns)

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
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'

const client = new OAuthClient({
  clientId: '...',
  clientSecret: '...',
  redirectUri: '...',
}, amazonMarketplaces.US)
```

**Using the OAuthClient to create the HttpClient**
```typescript
// `client` is of type `OAuthClient`
const auth = {
  accessToken: (client.getToken()).accessToken,
  clientId: "YOUR_CLIENT_ID",
  scope: 10000000000 // Use your Profile ID as the value for the management scope
}
const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
```
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
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { AmazonAdvertising, HttpClient } from '@scaleleap/amazon-advertising-api-sdk'

const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, httpClient)
```

**Using the HttpClient with the OperationProvider class**

```typescript
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
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
import { AmazonAdvertising, HttpClient } from '@scaleleap/amazon-advertising-api-sdk'

const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, httpClient)
const profileOperation = amazonAdvertising.profile

// Using ProfileOperation to list profiles
const res = await profileOperation.listProfiles()
```

## Creating Operations from the class itself
```typescript
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { ProfileOperation, HttpClient } from '@scaleleap/amazon-advertising-api-sdk'

const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)
const profileOperation = ProfileOperation.create(ProfileOperation, httpClient)

// Using ProfileOperation to list profiles
const res = await profileOperation.listProfiles()
```

# Operations

## SponsoredBrandsAdGroupOperation

### [getAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsadgroupoperation.html#getadgroup)

### [listAdGroup](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups/listAdGroups)

## SponsoredProductsAdGroupOperation

### [getAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#getadgroup)

### [getAddGroupEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#getadgroupex)

### [createAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#createadgroups)

### [updateAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#updateadgroups)

### [archiveAdGroup](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#archiveadgroup)

### [listAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#listadgroups)

### [listAdGroupsEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#listadgroupsex)

### [updateAdGroups](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsadgroupoperation.html#updateadgroups)

## SponsoredProductsBidRecommendationOperation

### [getAdGroupBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#getadgroupbidrecommendations)

### [getKeywordBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#getkeywordbidrecommendations)

### [createKeywordBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#createkeywordbidrecommendations)

### [getBidRecommendations](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductsbidrecommendationoperation.html#getbidrecommendations)

## SponsoredBrandsCampaignOperation

### [archiveCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#archivecampaign)

### [createCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#createcampaigns)

### [getCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#getcampaign)

### [listCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#listcampaigns)

### [updateCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandscampaignoperation.html#updatecampaigns)

## SponsoredProductsCampaignOperation

### [archiveCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#archivecampaign)

### [createCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#createcampaigns)

### [getCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#getcampaign)

### [getCampaignEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#getcampaignex)

### [listCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#listcampaigns)

### [listCampaignsEx](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#listcampaignsex)

### [updateCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredproductscampaignoperation.html#updatecampaigns)

## SponseredBrandsDraftsOperation

### [archiveDraftCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#archivedraftcampaign)

### [createDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#createdraftcampaigns)

### [getDraftCampaign](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#getdraftcampaign)

### [listDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#listdraftcampaigns)

### [submitDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#submitdraftcampaigns)

### [updateDraftCampaigns](https://amazon-advertising-api-sdk.scaleleap.org/classes/sponsoredbrandsdraftsoperation.html#updatedraftcampaigns)