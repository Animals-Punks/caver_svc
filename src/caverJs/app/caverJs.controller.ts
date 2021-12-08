import { Controller, Get, Inject, Query } from '@nestjs/common';

import { ICaverJsService } from '@caverJs/domain/interfaces/caverJs-service.interface';
import { GetOwnTokenParams } from '@caverJs/domain/dtos/GetOwnTokensParams.dto';

@Controller()
export class CaverJsController {
    constructor(
        @Inject('CaverJsService')
        private readonly caverJsService: ICaverJsService
    ) {}

    @Get()
    healthCheck(): string {
        return this.caverJsService.healthCheck();
    }

    @Get('caver/getOwnTokens')
    async getOwnTokens(
        @Query()
        getOwnTokenParams: GetOwnTokenParams
    ): Promise<number[]> {
        const ownTokenIds = await this.caverJsService.getOwnerTokens(
            getOwnTokenParams.address
        );
        return ownTokenIds;
    }
}
