import React, { FC } from 'react';
import { NavBar } from '@Components/AppLayout/NavBar';
import { Footer } from '@Components/AppLayout/Footer';

export const AppLayout: FC<{
    children: React.ReactNode;
    mainClassName?: string;
    footerClassName?: string;
}> = ({ children, mainClassName, footerClassName }) => (
    <div className="flex flex-col h-screen">
        <header className="bg-primary">
            <NavBar />
        </header>

        <main className={`flex-grow ${mainClassName === undefined ? 'bg-primary' : mainClassName}`}>{children}</main>

        <footer className={`${footerClassName === undefined ? 'bg-primary' : footerClassName}`}>
            <Footer />
        </footer>
    </div>
);

export default AppLayout;
