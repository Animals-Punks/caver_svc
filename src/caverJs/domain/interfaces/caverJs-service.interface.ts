export interface GetUsedApByIdAndGetSpeciesReturn {
    usedAps: number[];
    species: string;
}

export interface ICaverJsService {
    healthCheck(): string;
    getOwnerTokens(address: string): Promise<number[]>;
    getUsedApByIdAndGetSpecies(
        tokenId: number
    ): Promise<GetUsedApByIdAndGetSpeciesReturn>;
}
