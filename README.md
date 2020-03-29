# @scaleleap/amazon-advertising-api-sdk

> Amazon Advertising API TypeScript and Node.js Unofficial SDK

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

