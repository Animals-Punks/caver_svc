import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
const Caver = require('caver-js');

import { ICaverJs } from '@caverJs/domain/interfaces/caverJs.interface';
import { CaverJsModuleConfig } from '@config';

@Injectable()
export class CaverJs implements ICaverJs {
    constructor(
        @Inject(CaverJsModuleConfig.KEY)
        private readonly _caverJsConfig: ConfigType<typeof CaverJsModuleConfig>
    ) {}

    async getOwnerToknes(address: string): Promise<number[]> {
        const options = {
            headers: [
                {
                    name: 'Authorization',
                    value:
                        'Basic ' +
                        Buffer.from(
                            this._caverJsConfig.accessKey +
                                ':' +
                                this._caverJsConfig.secreteKey
                        ).toString('base64'),
                },
                { name: 'x-chain-id', value: this._caverJsConfig.chainId },
            ],
        };
        const httpProvider = new Caver.providers.HttpProvider(
            this._caverJsConfig.endPoint,
            options
        );
        const caverJs = new Caver(httpProvider);
        const kip17Instance = new caverJs.klay.KIP17(
            this._caverJsConfig.v2TokenAddress
        );

        const balance = await kip17Instance.balanceOf(address);
        const apIdList = [];
        for (let i = 0; i < balance; i += 1) {
            const apId = await kip17Instance.tokenOfOwnerByIndex(address, i);
            apIdList.push(apId);
        }
        return apIdList;
    }
}
