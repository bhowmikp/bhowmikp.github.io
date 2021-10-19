import Head from 'next/head';
import React, { FC } from 'react';
import NavBar from '@Components/NavBar';
import Footer from '@Components/Footer';

const AppLayout: FC<{ children: React.ReactNode; title: string; className?: string }> = ({
    children,
    title,
    className
}) => (
    <>
        <Head>
            <title>Prantar Bhowmik - {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col h-screen">
            <header className="bg-primary">
                <NavBar />
            </header>

            <main className={`flex-grow ${className}`}>{children}</main>

            <footer className="bg-primary">
                <Footer />
            </footer>
        </div>
    </>
);

export default AppLayout;
