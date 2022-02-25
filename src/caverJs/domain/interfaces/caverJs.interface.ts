export interface GetUsedApByIdAndGetSpeciesResult {
    usedAps: number[];
    species: string;
}

export interface ICaverJs {
    getOwnerToknes(address: string): Promise<number[]>;
    getUsedApByIdAndGetSpecies(
        tokenId: number
    ): Promise<GetUsedApByIdAndGetSpeciesResult>;
}
