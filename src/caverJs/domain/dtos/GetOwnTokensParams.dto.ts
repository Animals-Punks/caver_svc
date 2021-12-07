'use strict';

import { IsNotEmpty, IsString } from 'class-validator';

export class GetOwnTokenParams {
    @IsNotEmpty()
    @IsString()
    readonly address: string;
}
