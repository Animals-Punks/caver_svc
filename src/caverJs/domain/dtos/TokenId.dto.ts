'use strict';

import { IsNumber, IsString } from 'class-validator';

export class TokenIdDto {
    @IsString()
    tokenId: string;
}
