import Head from 'next/head';
import React, { FC } from 'react';

const AppLayout: FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
    <>
        <Head>
            <title>Prantar Bhowmik - {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {children}
    </>
);

export default AppLayout;
