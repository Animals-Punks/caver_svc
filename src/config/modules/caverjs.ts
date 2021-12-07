import { registerAs } from '@nestjs/config';
import Caver from 'caver-js';

export default registerAs('caverJs', () => ({
    v2TokenAddress: process.env.V2_TOKEN_ADDRESS,
    caver: Caver,
}));
