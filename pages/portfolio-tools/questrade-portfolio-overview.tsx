import AppLayout from '@Components/AppLayout';
import React, { FC } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';


const QuestradePortfolioOverview: FC = () => {
    const isAmp = useAmp();
    const router = useRouter();
    const redirect_uri = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/portfolio-tools/questrade-portfolio-overview`;

    const fetchQuestradeAccessToken = async(code: string) => {
        const data = await fetch(`https://login.questrade.com/oauth2/token?client_id=${process.env.NEXT_PUBLIC_QUESTRADE_CLIENT_ID}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`);
        return data.json();
    }
    const { data: test } = useQuery(
        ['questradeAccessToken', router.query],
        () => {
            if ('code' in router.query) {
                return fetchQuestradeAccessToken(router.query.code as string);
            }

            return '';
        },
        { keepPreviousData: true, refetchOnWindowFocus: false }
    );

    console.log(test)

    return (
        <AppLayout title="Questrade Portfolio Overview">
            <div className="mx-5">
                {'code' in router.query ? 
                    <p>{test}</p>
                : <button onClick={() => {
                    router.push(`https://login.questrade.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_QUESTRADE_CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}`);
                }}>Log in Questrade</button>}
            </div>
        </AppLayout>
    );
}

export default QuestradePortfolioOverview;