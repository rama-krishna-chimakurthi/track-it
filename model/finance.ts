export interface Asset {
    currentBalance: number;
    name: string;
    startingBalance: number;
    type: AssetType;
    userId: string;
}

export enum AssetType {
    ACCOUNT,
    CARD
}

export interface Transaction {
    amount: number;
    fromAssetId: string;
    toAssetId: string;
    fromUserId: string;
    toUserId: string;
}