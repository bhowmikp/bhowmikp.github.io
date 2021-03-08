import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import React, { useEffect, FC } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '@Service/googleService';
import { ThemeProvider } from 'next-themes';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
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
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
