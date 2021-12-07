export interface ICaverJsService {
    healthCheck(): string;
    getOwnerTokens(address: string): Promise<number[]>;
}
