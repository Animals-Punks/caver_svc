export interface ICaverJs {
    getOwnerToknes(address: string): Promise<number[]>;
}
