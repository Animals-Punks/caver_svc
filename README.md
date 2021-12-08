# caver_svc
typescript에서 caver-js가 사용이 되지 않는 문제로 인한 caver-js 사용 API 서버.

## environment
|name|null able|example|
|---|---|---|
|NODE_ENV|false|development|
|API_VERSION|false|1.0|
|PORT|false|3000|
|RATE_LIMIT_MAX|false|10000|
|V2_TOKEN_ADDRESS|false|0x590744cb8cf1a698d7db509b52bf209e3cccb8e0|
|ACCESS_KEY_ID|false|KAS...|
|SECRETE_ACCESS_KEY|false|""|
|KLAYTN_END_POINT|false|https://node-api.klaytnapi.com/v1/klaytn|
|KLAYTN_CHAIN_ID|false|1001|

## install & start
```shell
# install package
yarn install
or
npm install
```
```shell
# start development
yarn start:dev
or
npm run start:dev
```
```shell
# start production
yarn build & yarn start
or
npm run build & npm run start
```

## path
### 1. health check
```
path: /
type: string
response: 200 OK

Server is Running 🚀
```

### 2. getOwnTokens
```
path: /caver/getOwnTokens
type: list
response: 200 OK

[1,2,3,4,5,6,7,8,9,10]
```