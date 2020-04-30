# Changelog

          All notable changes to this project will be documented in this file.
          See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.21.1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.21.0...v1.21.1) (2020-04-30)


### Bug Fixes

* **deps:** update dependency @scaleleap/amazon-marketplaces to v4.0.2 ([36f3370](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/36f3370955559c3ec34b5048df8c4be36ae6717e))

# [1.21.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.20.0...v1.21.0) (2020-04-30)


### Features

* Fix circular references in index.ts ([285f436](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/285f436b984b15f012e8def49da79cba1ac90f18))

# [1.20.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.19.0...v1.20.0) (2020-04-28)


### Features

* update sb campaign report metrics ([d6fc2e5](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/d6fc2e5814acf0c86772f420834da0e83d02e948))

# [1.19.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.18.0...v1.19.0) (2020-04-28)


### Features

* change bidding types to use union types ([3e9a656](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/3e9a656cecfb63af0e26ab20dfcefff234dcb328))

# [1.18.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.17.1...v1.18.0) (2020-04-28)


### Features

* export: sp bid recommendation and sb stores infor operation ([42d6a19](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/42d6a19cf6808c681b6b87ee901989fa7685d690))
* update operations into main entry point class ([f380da3](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/f380da3a874fc46cfb83aeb1bd1bfabae4ac1c4c))

## [1.17.1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.17.0...v1.17.1) (2020-04-27)


### Bug Fixes

* **deps:** update dependency fp-ts to v2.5.4 ([ac06b66](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/ac06b66673e1061627e3ee0fe0fa3047fe5d8d9d))

# [1.17.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.16.1...v1.17.0) (2020-04-25)


### Features

* create a main entrypoint class ([e0eb8e0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/e0eb8e0ea0b9da474b732455ae2f052ab88cfaf2))
* export BidRecommendationForTargetsResponse and implement getBidRecommendations method ([eb66d8f](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/eb66d8f98feb6fa25d948cd056399077cf32e2d1))
* export entrypoint class ([2577671](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/2577671582c861d45eca62a5883b696babb3a7e8))
* implement get ad group, get keyword, create keyword bid recommendation methods ([0a44d2a](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/0a44d2a8c2daa8bd610ca509dc81607243ee105e))
* remove AmazonAdvertising 'Operation' suffix and type ([c36cf5b](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/c36cf5bacf15f7a3cc98d792982864b0f73e4ea1))
* use LazyGetter decorator for main entrypoint class ([26f0e45](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/26f0e452ed34af9d609e3af6bbc42fcdeef772a6))

## [1.16.1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.16.0...v1.16.1) (2020-04-20)


### Bug Fixes

* **deps:** update dependency io-ts to v2.2.1 ([047dfe1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/047dfe14be45edd88e19ef310ef2c59d224579a8))

# [1.16.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.15.1...v1.16.0) (2020-04-20)


### Features

* add sb ad group and keyword report metrics ([f3f2755](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/f3f2755449164318854dba2f527d04df8480acee))
* add sb campaign report metrics ([a489a57](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/a489a57b6b50b99060a65baa9e006c6d3e19cda7))
* add sb search term report ([5ea0ba9](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/5ea0ba9f5565328abb6a20c5f8a603c3f879cf9a))
* add sb target report ([1acdb28](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/1acdb28ab3a2f3488aa5810356653fc96947e082))
* change AdGroupResponseStatus enum to using union string ([b40fc8c](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/b40fc8c96aa1e77a714520e2a29baedd74d9f617))
* change AdGroupServingStatus to using union string ([b50f8a6](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/b50f8a69e7ee7feb4cf994c27636a054ab5bc012))
* change AdGroupState to using union string ([2bbe4a8](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/2bbe4a8df92a5b68a3ffc0afa4d83de5ecdf8c02))
* change bidding predicate type to using union string ([aab33fb](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/aab33fb6636b28fec25f7171dfd11a7f15c78d9a))
* change BidRecommendationsResponseCode to using union string ([5dfb84f](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/5dfb84f7cfdc87085e259f135ee3f8037bc4f8fb))
* change campaign  bidding adjustments predicate and strategy to use union string ([89d0d0e](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/89d0d0ef9f3048e6e8d2dd33a337206f987d7334))
* change enums of campaign module to use union string ([d70c4bd](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/d70c4bda4d4b6d57311bff3c61914b3973c2a254))
* change enums of draft module to use union string ([8356e9c](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/8356e9c3f5fe90bd8e5150e901ed6f59e01acf33))
* change enums of portfolio module to use union string ([c918d20](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/c918d2092caadd605c7c85c8c17a31535c558798))
* change enums of product ads module to use union string ([f866520](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/f8665204fe29a87dae7037a21738941853de819f))
* change enums of product targeting module to use union string ([5f43bda](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/5f43bdaa777ec8a22ee433731cbce14eb41934d4))
* change enums of profile module to use union string ([9aebd41](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/9aebd41acb98ad5ebbf0dd0aaaa987019ca6fe21))
* change enums of recommendation module to use union string ([9a500c5](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/9a500c509731a30fdeaf649d582bf77cbb0e2d10))
* change KeywordBidRecommendationsMatchType to using union string ([87da574](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/87da5744519f88993d87260c9c47ec15122e3cdd))
* change KeywordState, KeywordMatchType, KeywordServingStatus and KeywordResponseStatus to use union string ([dbde3fe](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/dbde3feb9f39c1058ab0093e020ce51b893294f7))
* change remaining enum of keyword module to use union string ([3112c78](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/3112c787714dc435968e53de16b6f67a044ad8f6))
* change report type to use union string ([dafbec1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/dafbec147a4a82991876f7f4f530fc29afb07b19))
* change ReportResponseStatus to union string ([a752f6c](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/a752f6ceb1e81936bce5aeb3e85b813b4ffbbac6))
* change ReportSegments to use union string ([53fe361](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/53fe3612743aed305ace0ed17c08da19a53ceeca))
* change snapshot module to use union string ([fded09c](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/fded09c520888feeda9298d272360396490a00aa))
* change sp ad group, asin, campaign and sb headline report metrics to use union string ([7978029](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/7978029cde6db47356b36d255e99f82612fe49de))
* change sp keyword report metrics to use union string ([5967337](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/5967337ded8f17cae2d00bbb3f1affb4e82b48f4))
* change sp product ads and product targeting to use union string ([9d74937](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/9d749378fe9ddf8aec44256045bb171678255482))
* remove matchType field of sb target report metrics ([49c19ba](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/49c19ba509a71bb8a840d6db07bfa1d034e889af))
* remove un-available methods and attributes of sb campaign operation ([fb1fa27](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/fb1fa27d1b4268f22eb019c1e7120e6b22020cee))
* split concrete and optional fields for Campaign type ([be65b05](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/be65b05fc65fdf4b264c514e190f8d150ff6a7cd))
* update type for AdGroupResponse code ([8df34d0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/8df34d0770633e8f36fb8fb43be78e0876529ee5))

## [1.15.1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.15.0...v1.15.1) (2020-04-16)


### Bug Fixes

* **deps:** update dependency io-ts to v2.2.0 ([09837bc](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/09837bc4e87b61dad610fabb56446ee685ba7701))

# [1.15.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.14.0...v1.15.0) (2020-04-06)


### Bug Fixes

* snapshot type guarding ([c40b9d6](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/c40b9d67592942978c3b5e4412480bb14125ce43))


### Features

* update type guarding of SnapshotResponse ([3b05d7a](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/3b05d7af6ebe4271471198aa931f091c6113013f))

# [1.14.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.13.0...v1.14.0) (2020-04-04)


### Features

* add sponsored brands headline search report type ([1ae1c5f](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/1ae1c5fb1c07fd07af2ab566dc18b54834d28da0))

# [1.13.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.12.0...v1.13.0) (2020-04-04)


### Features

* cast download snapshot result to TypeScript objects ([8ca0586](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/8ca05867d69b3ccbbb5dd8bfb0d52f70983b27fc))
* change generic type of downloadSnapshot ([b7bcb52](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/b7bcb52119ce8e673ba71882c9c91b780879f57c))
* implement download sponsored products snapshot ([3bfa91a](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/3bfa91a4ca4333eab237b237ec096d96598ad3dd))
* implement sb downloadSnapshot method ([a38bbc2](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/a38bbc2cfa824d882545837d30a81aecef86b2ca))
* refactor generic type of downloadSnapshot method ([ef19362](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/ef19362e6cbe10f024e29f11e5ba28be71b4dc35))


### Reverts

* Revert "test: log body of download request" ([4518311](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/4518311fad007a0e2f69c73f9bfc0cdcb2186fee))

# [1.12.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.11.2...v1.12.0) (2020-04-04)


### Features

* rename http client auth authorizationToken to accessToken ([7a230da](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/7a230dadc9074fba721706cb07313d037a692dba))

## [1.11.2](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.11.1...v1.11.2) (2020-04-03)


### Bug Fixes

* **deps:** update dependency io-ts to v2.1.3 ([ff2cf07](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/ff2cf07b74ea2909ab04cdef627fd4037fa83637))

## [1.11.1](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.11.0...v1.11.1) (2020-04-03)


### Bug Fixes

* application/x-gzip content type handling ([183a719](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/183a7195290319dcae68be20c27db95cc6b88ac6))

# [1.11.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.10.0...v1.11.0) (2020-03-30)


### Features

* make discriminated union type for SnapshotResponse ([059d57c](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/059d57c9be995808f8c68dce901b94c0a7e4fbad))

# [1.10.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.9.0...v1.10.0) (2020-03-29)


### Features

* export all types ([bc38715](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/bc3871583b31cf37fc0faf9c69294f4c163df6bf))
* export bidding and campaign type ([d15db98](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/d15db98a8b7c3fb0f01db456ac5fe9b8814bb4e0))
* remove duplicate CampaignTypeEnum ([64d71a2](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/64d71a2ce6575dfeb6b3797a4aaab8ac8b827d29))
* rename duplicate types ([4d12028](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/4d12028db64644799120be6f6c748d1591bb6098))
* replace const enum with enum ([d48595f](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/d48595f50a9fe78cf4e3582c76868168d0e45165))
* standardize enum name ([9c88ed7](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/9c88ed784f6a1dfc2e8979e90859247ac911f3d2))

# [1.9.0](https://github.com/ScaleLeap/amazon-advertising-api-sdk/compare/v1.8.0...v1.9.0) (2020-03-29)


### Features

* adds typedoc and GitHub pages ([#305](https://github.com/ScaleLeap/amazon-advertising-api-sdk/issues/305)) ([a92fb61](https://github.com/ScaleLeap/amazon-advertising-api-sdk/commit/a92fb612be9221c86c15ea3612f7bc48aa03ea6e))

# [1.8.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.7.2...v1.8.0) (2020-03-28)


### Features

* create amazonOptions on OAuthClient's constructor ([5748d5d](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/5748d5d20d9e8e6b6ce5f3c15bce2e55939f591a))
* create client on OAuthClient's constructor ([c3cd82c](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/c3cd82c0e9786562fb749c28693e436052efcd8f))
* implement muliple regions authorization ([9c3fbe0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/9c3fbe0437dd67a12301519aea2976a69b8454c9))
* throw an error when marketplace doesn't have advertising ([6af0332](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/6af033214b7d02bbb63080f5fa47bb3248aefdd4))

## [1.7.2](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.7.1...v1.7.2) (2020-03-25)


### Bug Fixes

* renames package to scoped ([9142255](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/9142255fe58b1493ad8935ad7eaa2c57eb0f1bcb))

## [1.7.1](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.7.0...v1.7.1) (2020-03-25)


### Bug Fixes

* triggers a release ([7686add](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/7686addd13aa6413bc321aaeaab2adccf678e4b9))

# [1.7.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.6.0...v1.7.0) (2020-03-22)


### Features

* implement sb stores info operation ([b0eb848](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/b0eb848aa85575eb35075c49a7611f7a0a17e70b))

# [1.6.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.5.0...v1.6.0) (2020-03-21)


### Features

* implement getBrands method ([fe0b780](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/fe0b780034b110cc8f6ef49fa721e33017fdf803))

# [1.5.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.4.0...v1.5.0) (2020-03-19)


### Features

* implment sponsored brands snapshots operation ([ab44b88](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/ab44b88e42614e766fb2fd5454ed25bab8a24418))

# [1.4.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.3.0...v1.4.0) (2020-03-18)


### Features

* use full name and get rid of Polly tags ([62ad52d](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/62ad52d6152e37bc3eabe8c8e30d20826c20672b))

# [1.3.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.2.0...v1.3.0) (2020-03-10)


### Features

* upgrade @scaleleap/amazon-marketplaces lib ([71425d8](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/71425d888cf9e25287daa49efb8ba332b4638791))
* use @scaleleap/amazon-marketplaces for enums and data ([eae7e5e](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/eae7e5efb2f2156a76cb434498880026dc41d59b))

# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.1.5...v1.2.0) (2020-03-09)


### Features

* export all operations ([0da19d4](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/0da19d4f1babeb2543eb640d6c1eea5db9bcf6f7))
* use fullname instead of abbreviations ([65f6f7b](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/65f6f7bfad65a8d72cdf531b57d1e794d18b101b))

## [1.1.5](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.1.4...v1.1.5) (2020-03-06)


### Bug Fixes

* moves @scaleleap/jest-polly to devDeps ([126ca47](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/126ca471e7b1ad72d77f4786651b1ba740e3fec8))
* removes cross-env dependency as it is not used ([f9ca229](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/f9ca22938de68d27c5a67bcd0acbe5906647dd8f))

## [1.1.4](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.1.3...v1.1.4) (2020-03-06)


### Bug Fixes

* adds files whitelisting ([2c85f49](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/2c85f49de3aba2c6a1e5551cecebbac1c410ce9b))

## [1.1.3](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.1.2...v1.1.3) (2020-03-06)


### Bug Fixes

* ESLint config issue ([c9d3cfd](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/c9d3cfdcaeed7073a7ccf72055864328f4f6e2bd))
* references to package.json ([f8b30e8](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/f8b30e8e0a456c5c69d5017a359d3352f00782cc)), closes [#249](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/issues/249)

## [1.1.2](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.1.1...v1.1.2) (2020-03-05)


### Bug Fixes

* default deprecation from @scaleleap/config ([b73bd95](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/b73bd952fe8e8b7b1924042fb85d535710f45535))

## [1.1.1](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.1.0...v1.1.1) (2019-11-06)


### Bug Fixes

* npm ignore ([cabb124](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/cabb124cd3db99a6af2874bb101561226d99e317))

# [1.1.0](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/compare/v1.0.0...v1.1.0) (2019-11-06)


### Features

* trigger a release ([c508a66](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/c508a66d87413c01e3c836bc091000185b86f540))

# 1.0.0 (2019-11-06)


### Bug Fixes

* failing tests ([00f828d](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/00f828dd8ce3d6378671781efccec01fd843c90b))
* stops matching on headers ([affb06b](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/affb06b8cd5619e1694c446015d60a8b678683be))


### Features

* adds ability to output to STDOUT ([9168278](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/916827804dc17f86a32efbd3dd9dd51539676f08))
* adds HTTP client ([8a45622](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/8a456229f623aaf82dda50d8a35daadb84c22631))
* adds index ([f56242b](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/f56242bda6a343460c03d6833956623a0a2ab09e))
* adds OAuth2 client ([#24](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/issues/24)) ([f13694c](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/f13694cb8d1db277a13d1e7be1c098cb402d153d))
* finishes HTTP client ([#35](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/issues/35)) ([ee8121d](https://github.com/ScaleLeap/amazon-advertising-api-nodejs-sdk-2/commit/ee8121d61b7f12d56ecad89e868718f2f7dfed90))
