import AppLayout from '@Components/AppLayout';
import React, { FC, useContext } from 'react';
import { AppContext } from '../_app';
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';

const QuestradePortfolioOverview: FC = () => {
    const router = useRouter();
    const {questradeData} = useContext(AppContext);
    const [questradeServer, setQuestradeServer] = questradeData.questradeServer;
    const [questradeAccessToken, setQuestradeAccessToken] = questradeData.questradeAccessToken;
    const redirectUri = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/portfolio-tools/questrade-portfolio-overview`;


    const getPortfolioOverview = async(server: string, accessToken: string) => {
        const data = await (await fetch(`/api/questrade/questradePortfolioOverview?accessToken=${accessToken}&server=${server}`)).json();
        return data;
    }

    const getQuestradeAccessInfo = async(code: string) => {
        const data = await (await fetch(`/api/questrade/questradeAccessInfo?code=${code}&redirectUri=${redirectUri}`)).json();
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

        return (
            <AppLayout title="Questrade Portfolio Overview">
                <div className="mx-5">
                    {portfolioDataIsLoading && <p>Loading...</p>}
                    <p>No code</p>
                    {portfolioData.data.holdings.map((entry) => {
                        return <p>{entry.symbol}</p>
                    })}
                </div>
            </AppLayout>
        )
    } else if ('code' in router.query) {
        const { data: accountData, isLoading: accountDataIsLoading, error: accountDataError } = useQuery(
            ['questradeAccount'],
            () => {
                return getQuestradeAccessInfo(String(router.query.code));
            },
            { keepPreviousData: true, refetchOnWindowFocus: false }
        );

        if (accountData !== undefined) {
            setQuestradeAccessToken(accountData.access_token);
            setQuestradeServer(accountData.api_server);
        }

        if (accountDataError) {
            router.push('/portfolio-tools/questrade-portfolio-overview');
        }

        return (
            <AppLayout title="Questrade Portfolio Overview">
                <div className="mx-5">
                    {accountDataIsLoading && <p>Loading...</p>}
                    <p>Code</p>
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