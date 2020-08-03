
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