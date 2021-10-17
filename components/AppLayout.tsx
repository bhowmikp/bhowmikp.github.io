import Head from 'next/head';
import React, { FC } from 'react';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

const AppLayout: FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
    <>
        <Head>
            <title>Prantar Bhowmik - {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col h-screen">
            <header>
                <Header />
            </header>

            <main className="flex-grow">{children}</main>

            <footer>
                <Footer />
            </footer>
        </div>
    </>
);

export default AppLayout;
