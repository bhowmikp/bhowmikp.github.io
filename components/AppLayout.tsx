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
                onClick={() => {
                    event({ name: 'menuItem', category: 'link', label: 'homepage' });
                }}
                aria-hidden="true"
            >
                Homepage
            </a>
        </Link>

        <Link href="/archieve">
            <a
                className="text-black dark:text-white"
                onClick={() => {
                    event({ name: 'menuItem', category: 'link', label: 'archieve' });
                }}
                aria-hidden="true"
            >
                Archieve
            </a>
        </Link>

        <ThemeChanger />

        {children}
    </>
);

export default AppLayout;
