import Head from 'next/head';
import React, { FC } from 'react';
import ThemeChanger from '@Components/ThemeChanger';
import { useRouter } from 'next/router';

const AppLayout: FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Prantar Bhowmik - {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <a
                href="/"
                onClick={(e) => {
                    e.preventDefault();
                    router.push('/');
                }}
            >
                Homepage
            </a>
            <a
                href="/archieve"
                onClick={(e) => {
                    e.preventDefault();
                    router.push('/archieve');
                }}
            >
                Archieve
            </a>
            <ThemeChanger />

            {children}
        </>
    );
};

export default AppLayout;
