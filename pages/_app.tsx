import 'tailwindcss/tailwind.css';
import '@Styles/globals.css';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@Service/googleService';
import { ThemeProvider } from 'next-themes';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import Seo from '../next-seo.config';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp: ReactNode = ({ Component, pageProps }: AppPropsWithLayout) => {
    const router = useRouter();
    const queryClient = new QueryClient();

    const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

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
                <DefaultSeo {...Seo} />
                <SocialProfileJsonLd
                    type="Person"
                    name="Prantar Bhowmik"
                    url="https://www.prantar.com"
                    sameAs={['https://github.com/bhowmikp', 'https://www.linkedin.com/in/prantar/']}
                />
                {getLayout(<Component {...pageProps} />)}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default MyApp;
