import AppLayout from '@Components/AppLayout';
import React, { FC, useContext } from 'react';
import { AppContext } from '../_app';
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';
import { getQuestradePortfolioOverview } from '@Api/questrade/questradePortfolioOverview';
import { getQuestradeAccessInfo as getQuestradeAccessInfoServer } from '@Api/questrade/questradeAccessInfo';

const QuestradePortfolioOverview: FC = () => {
    const router = useRouter();
    const {questradeData} = useContext(AppContext);
    const [questradeServer, setQuestradeServer] = questradeData.questradeServer;
    const [questradeAccessToken, setQuestradeAccessToken] = questradeData.questradeAccessToken;
    const redirectUri = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/portfolio-tools/questrade-portfolio-overview`;


    const getPortfolioOverview = async(server: string, accessToken: string) => {
        const data = await getQuestradePortfolioOverview(server, accessToken);
        return data;
    }

    const getQuestradeAccessInfo = async(code: string) => {
        const data = await getQuestradeAccessInfoServer(code, redirectUri);
        return data;
    }

    if (questradeAccessToken !== '') {
        const { data: portfolioData, isLoading: portfolioDataIsLoading, error: portfolioDataError } = useQuery(
            ['questradePortfolioOverview'],
            () => {
                return getPortfolioOverview(questradeServer, questradeAccessToken);
            },
            { keepPreviousData: true, refetchOnWindowFocus: false }
        );

        if (portfolioDataError) {
            setQuestradeAccessToken('');
            setQuestradeServer('');
        }

        console.log(portfolioData);

        return (
            <AppLayout title="Questrade Portfolio Overview">
                <div className="mx-5">
                    {portfolioDataIsLoading && <p>Loading...</p>}
                </div>
            </AppLayout>
        )
    } else if ('code' in router.query) {
        const { data: accountData, isLoading: accountDataIsLoading } = useQuery(
            ['questradePortfolioOverview'],
            () => {
                return getQuestradeAccessInfo(String(router.query.code));
            },
            { keepPreviousData: true, refetchOnWindowFocus: false }
        );

        console.log(accountData);

        if (accountData !== undefined) {
            setQuestradeAccessToken(accountData.access_token);
            setQuestradeServer(accountData.api_server);
        }

        return (
            <AppLayout title="Questrade Portfolio Overview">
                <div className="mx-5">
                    {accountDataIsLoading && <p>Loading...</p>}
                </div>
            </AppLayout>
        )
    } else {
        return (
            <AppLayout title="Questrade Portfolio Overview">
                <div className="mx-5">
                    <button onClick={() => {
                        router.push(`https://login.questrade.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_QUESTRADE_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}`);
                    }}>Log in Questrade</button>
                </div>
            </AppLayout>
        )
    }
}

export default QuestradePortfolioOverview;