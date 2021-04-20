import React, { FC, useState } from 'react';
import {IQuestradePortfolioDataAll} from '@Interfaces/questradePortfolioData';

const QuestradePortfolioOverviewMain: FC<{portfolioData: IQuestradePortfolioDataAll}> = ({portfolioData}) => {
    const allHoldings = (allPortfolioData) => {
        return [].concat(...allPortfolioData.data.map((portfolio) => {
            return portfolio.holdings;
        }));
    }

    const [currentPorfolioHoldings, setCurrentPortfolioHoldings] = useState(allHoldings(portfolioData));

    return (
        <>
            <p className="inline mr-3">Account Name:</p>

            {portfolioData.data.length > 1 && <p onClick={() => {setCurrentPortfolioHoldings(allHoldings(portfolioData))}} className="inline mr-3">All</p>}
            {portfolioData.data.map((portfolio) => {
                return (
                    <p key={portfolio.accountNumber} onClick={() => {setCurrentPortfolioHoldings(portfolio.holdings)}} className="inline mr-3">{portfolio.accountNumber}</p>
                );
            })}

            {currentPorfolioHoldings.map((holdings) => {
                return <p key={holdings.symbol}>{holdings.symbol}</p>
            })}
        </>
    );
};

export default QuestradePortfolioOverviewMain;
