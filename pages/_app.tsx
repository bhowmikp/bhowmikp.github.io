// import 'tailwindcss/tailwind.css';
import React, { useEffect, FC } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '@Service/googleService';

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

    return <Component {...pageProps} />;
};

export default MyApp;
