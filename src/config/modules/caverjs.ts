import { registerAs } from '@nestjs/config';
import Caver from 'caver-js';

export default registerAs('caverJs', () => ({
    tokenAddress: process.env.V1_TOKEN_ADDRESS,
    caver: Caver,
}));
