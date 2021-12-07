import { Inject, Injectable } from '@nestjs/common';

import { ICaverJsService } from '@caverJs/domain/interfaces/caverJs-service.interface';
import { ICaverJs } from '@caverJs/domain/interfaces/caverJs.interface';

@Injectable()
export class CaverJsService implements ICaverJsService {
    constructor(
        @Inject('CaverJs')
        private readonly _caverJs: ICaverJs
    ) {}

    healthCheck(): string {
        return 'Server is Running 🚀';
    }

    async getOwnerTokens(address: string): Promise<number[]> {
        const ownTokens = await this._caverJs.getOwnerToknes(address);
        return ownTokens;
    }
}
