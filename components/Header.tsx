import React, { FC } from 'react';
import Link from 'next/link';
import { event } from '@Service/googleService';
import ThemeChanger from '@Components/ThemeChanger';

const Header: FC = () => (
    <>
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
    </>
);

export default Header;
