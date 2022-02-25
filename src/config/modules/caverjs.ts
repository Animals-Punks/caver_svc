import { registerAs } from '@nestjs/config';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default registerAs('caverJs', () => ({
    v2TokenAddress: process.env.V2_TOKEN_ADDRESS,
    accessKey: process.env.ACCESS_KEY_ID,
    secreteKey: process.env.SECRETE_ACCESS_KEY,
    endPoint: process.env.KLAYTN_END_POINT,
    chainId: process.env.KLAYTN_CHAIN_ID,
    babyPunksContractAddress: process.env.BABY_PUNKS_CONTRACT_ADDRESS,
    babyPunksOwnerAddress: process.env.BABY_PUNKS_OWNER_ADDRESS,
    babyPunksContractAbi: JSON.parse(
        readFileSync(
            resolve(__dirname, '../../../babyAnimalsPunks.abi.json'),
            'utf-8'
        )
    ),
}));
