# 📦 `@scaleleap/amazon-advertising-api-sdk`

![](https://user-images.githubusercontent.com/491247/82228986-0b0e2380-9954-11ea-899e-6f11cb4f6257.png)

> [Amazon Advertising API](https://advertising.amazon.com/about-api) TypeScript and Node.js Unofficial SDK

[![NPM](https://img.shields.io/npm/v/@scaleleap/amazon-advertising-api-sdk)](https://npm.im/@scaleleap/amazon-advertising-api-sdk)
[![License](https://img.shields.io/npm/l/@scaleleap/amazon-advertising-api-sdk)](./LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ScaleLeap/amazon-advertising-api-sdk/Release)](https://github.com/ScaleLeap/amazon-advertising-api-sdk/actions)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/scaleleap/amazon-advertising-api-sdk)](https://snyk.io/test/github/scaleleap/amazon-advertising-api-sdk)
[![Codecov](https://img.shields.io/codecov/c/github/scaleleap/amazon-advertising-api-sdk)](https://codecov.io/gh/ScaleLeap/amazon-advertising-api-sdk)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

---

## Install

```
npm i -s @scaleleap/amazon-advertising-api-sdk
```

## Usage

Mandatory reading: [Amazon Advertising API docs](https://advertising.amazon.com/API/docs/en-us)

[Full docs](https://amazon-advertising-api-sdk.scaleleap.org).

### OAuth Client

Inherits from, and implements similar interface to `client-oauth2` package.

```ts
import { OAuthClient } from '@scaleleap/amazon-advertising-api-sdk'

const client = new OAuthClient({
  clientId: '...',
  clientSecret: '...',
  redirectUri: '...',
})

// get redirect URL to send the user to start OAuth flow
const uri = client.getUri()

// get token
const token = client.getToken()

// refresh existing token
const token = client.createToken('... access token ...', '... refresh token ...')
const res = await token.refresh()
```

### API Operations

The library is split into "operations", which are closely mapped to the operations (sections) of the
API.

```ts
import { HttpClient, OperationProvider, ProfileOperation } from '@scaleleap/amazon-advertising-api-sdk'

// HTTP Client, tailored for the Amazon Advertising API
// See other endpoints: https://advertising.amazon.com/API/docs/en-us/get-started/how-to-use-api
const httpClient = new HttpClient('https://advertising-api.amazon.com', auth)

// A provider instance, that knows how to instantiate operation classes
const operationProvider = new OperationProvider(httpClient)

// Instantiate an "operation" object
const profileOperation = operationProvider.create(ProfileOperation)

// Using the operation object to make API calls
const res = await profileOperation.listProfiles()
```

