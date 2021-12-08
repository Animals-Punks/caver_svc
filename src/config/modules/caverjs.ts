import { registerAs } from '@nestjs/config';

export default registerAs('caverJs', () => ({
    v2TokenAddress: process.env.V2_TOKEN_ADDRESS,
    accessKey: process.env.ACCESS_KEY_ID,
    secreteKey: process.env.SECRETE_ACCESS_KEY,
    endPoint: process.env.KLAYTN_END_POINT,
    chainId: process.env.KLAYTN_CHAIN_ID,
}));
