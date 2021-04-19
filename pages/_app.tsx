import 'tailwindcss/tailwind.css';
import '@Styles/globals.css';

import React, { useEffect, useState, createContext, FC } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '@Service/googleService';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from 'react-query';

export const AppContext = createContext(null);

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const queryClient = new QueryClient();

    const [questradeServer, setQuestradeServer] = useState('');
    const [questradeAccessToken, setQuestradeAccessToken] = useState('')
    const questradeData = {questradeServer: [questradeServer, setQuestradeServer], questradeAccessToken: [questradeAccessToken, setQuestradeAccessToken]}

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <QueryClientProvider client={queryClient}>
                <AppContext.Provider value={{questradeData}}>
                    <Component {...pageProps} />
                </AppContext.Provider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default MyApp;
