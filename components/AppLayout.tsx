import Head from 'next/head';
import React, { FC } from 'react';
import ThemeChanger from '@Components/ThemeChanger';
import Link from 'next/link';
import { event } from '@Service/googleService';
import Footer from '@Components/Footer';

const AppLayout: FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
    <>
        <Head>
            <title>Prantar Bhowmik - {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col h-screen">
            <header>
                <Link href="/">
                    <a
                        className="text-black dark:text-white mx-5"
                        onClick={() => {
                            event({ name: 'menuItem', category: 'link', label: 'homepage' });
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                event({ name: 'menuItem', category: 'link', label: 'homepage' });
                            }
                        }}
                        role="link"
                        tabIndex={0}
                    >
                        Homepage
                    </a>
                </Link>

                <Link href="/archive">
                    <a
                        className="text-black dark:text-white mr-5"
                        onClick={() => {
                            event({ name: 'menuItem', category: 'link', label: 'archive' });
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                event({ name: 'menuItem', category: 'link', label: 'archive' });
                            }
                        }}
                        role="link"
                        tabIndex={0}
                    >
                        Archive
                    </a>
                </Link>

                <Link href="/blogs">
                    <a
                        className="text-black dark:text-white"
                        onClick={() => {
                            event({ name: 'menuItem', category: 'link', label: 'blogsProgramming' });
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                event({ name: 'menuItem', category: 'link', label: 'blogsProgramming' });
                            }
                        }}
                        role="link"
                        tabIndex={0}
                    >
                        Blogs
                    </a>
                </Link>

                <ThemeChanger />
            </header>

            <main className="flex-grow">{children}</main>

            <footer>
                <Footer />
            </footer>
        </div>
    </>
);

export default AppLayout;
