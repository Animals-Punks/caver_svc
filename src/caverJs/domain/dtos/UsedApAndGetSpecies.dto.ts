'use strict';

import { IsArray, IsString } from 'class-validator';

export class UsedApAndGetSpeciesDto {
    @IsArray()
    usedAps: number[];

    @IsString()
    species: string;
}
