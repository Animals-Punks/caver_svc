import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import Caver from 'caver-js';
import { KIP17 } from 'caver-js/types/packages/caver-kct/src/kip17';

import { ICaverJs } from '@caverJs/domain/interfaces/caverJs.interface';
import { CaverJsModuleConfig } from '@config';

@Injectable()
export class CaverJs implements ICaverJs {
    caverJs: Caver;
    kp17Instance: KIP17;

    constructor(
        @Inject(CaverJsModuleConfig.KEY)
        private readonly _caverJsConfig: ConfigType<typeof CaverJsModuleConfig>
    ) {
        this.caverJs = new _caverJsConfig.caver();
        this.kp17Instance = new this.caverJs.klay.KIP17(
            this._caverJsConfig.v2TokenAddress
        );
    }

    async getOwnerToknes(address: string): Promise<number[]> {
        const contract = new this.caverJs.contract(
            [
                {
                    constant: true,
                    inputs: [{ name: 'owner', type: 'address' }],
                    name: 'balanceOf',
                    outputs: [{ name: '', type: 'uint256' }],
                    payable: false,
                    stateMutability: 'view',
                    type: 'function',
                },
                {
                    constant: true,
                    inputs: [
                        { name: 'owner', type: 'address' },
                        { name: 'index', type: 'uint256' },
                    ],
                    name: 'tokenOfOwnerByIndex',
                    outputs: [{ name: '', type: 'uint256' }],
                    payable: false,
                    stateMutability: 'view',
                    type: 'function',
                },
            ],
            this._caverJsConfig.v2TokenAddress
        );

        const balance = await contract.methods.balanceOf(address);
        const parseBalance = balance.toNumber();
        const apIdList = [];
        for (let i = 0; i < parseBalance; i += 1) {
            const apId = await await contract.methods.tokenOfOwnerByIndex(
                address,
                i
            );
            apIdList.push(apId);
        }
        return apIdList;
    }
}
