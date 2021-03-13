import Head from 'next/head';
import React, { FC } from 'react';
import ThemeChanger from '@Components/ThemeChanger';
import Link from 'next/link';
import { event } from '@Service/googleService';

const AppLayout: FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
    <>
        <Head>
            <title>Prantar Bhowmik - {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href="/">
            <a
                className="text-black dark:text-white mx-5"
                onMouseDown={() => {
                    event({ name: 'menuItem', category: 'link', label: 'homepage' });
                }}
                role="link"
                tabIndex={0}
            >
                Homepage
            </a>
        </Link>

        <Link href="/archive">
            <a
                className="text-black dark:text-white"
                onMouseDown={() => {
                    event({ name: 'menuItem', category: 'link', label: 'archive' });
                }}
                role="link"
                tabIndex={0}
            >
                Archive
            </a>
        </Link>

        <ThemeChanger />

        {children}
    </>
);

export default AppLayout;
