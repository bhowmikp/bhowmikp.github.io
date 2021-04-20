
export interface IQuestradeHoldingsData {
    symbol: string,
        symbolId: number,
        openQuantity: number,
        closedQuantity: number,
        currentMarketValue: number,
        currentPrice: number,
        averageEntryPrice: number,
        dayPnl: boolean|null,
        closedPnl: number,
        openPnl: number,
        totalCost: number,
        isRealTime: boolean|null,
        isUnderReorg: boolean|null
}

export interface IQuestradePortfolioData {
    accountNumber: string,
    holdings: IQuestradeHoldingsData[]
}

export interface IQuestradePortfolioDataAll {
    data: IQuestradePortfolioData[]
}