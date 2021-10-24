import React, { FC, useState, useEffect } from 'react';
import { useAmp } from 'next/amp';
import Link from 'next/link';
import { event } from '@Service/googleService';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { isBrowser } from '@Utils/isBrowser';

import { useWindowSize } from '@Hooks/useWindowSize';

import { screenWidthBreakpoint as screenWidthBreakpointConstants } from '@Constants';

const NavBar: FC = () => {
    const isAmp = useAmp();

    const [menuStatus, setMenuStatus] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const mobileScreenWidth = screenWidthBreakpointConstants.md;

    if (isBrowser()) {
        if (menuStatus) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
    }

    const { screenWidth } = useWindowSize();

    useEffect(() => {
        if (screenWidth >= mobileScreenWidth) {
            setMenuStatus(false);
        }
    }, [screenWidth, mobileScreenWidth]);

    return (
        <nav className={`w-full z-10 bg-primary ${menuStatus ? 'absolute h-full my-0 py-4' : 'my-4'}`}>
            <div className="flex flex-wrap items-center justify-between w-full px-5 md:w-10/12 lg:w-3/4 md:mx-auto">
                <div>
                    <Link href="/">
                        <a
                            className="text-black dark:text-white"
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
                            {isAmp ? (
                                <amp-img
                                    width="60"
                                    height="60"
                                    src="/profilePic.png"
                                    alt="Profile Pic"
                                    className="bg-white rounded-full"
                                />
                            ) : (
                                <Image
                                    src="/profilePic.png"
                                    alt="Profile Pic"
                                    width="60"
                                    height="60"
                                    className="bg-white rounded-full"
                                    onClick={() => {
                                        event({ name: 'menuItem', category: 'link', label: 'homepage' });
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            event({ name: 'menuItem', category: 'link', label: 'homepage' });
                                        }
                                    }}
                                />
                            )}
                        </a>
                    </Link>
                </div>

                {menuStatus ? (
                    <MdClose
                        size={30}
                        className="cursor-pointer md:hidden block text-nav"
                        title="Close"
                        onClick={() => {
                            setMenuStatus(false);
                        }}
                    />
                ) : (
                    <GiHamburgerMenu
                        size={30}
                        className="cursor-pointer md:hidden block text-nav"
                        title="HamburgerMenu"
                        onClick={() => {
                            setMenuStatus(true);
                        }}
                    />
                )}

                <div
                    className={`w-full md:flex md:items-center md:justify-between md:w-auto ${
                        menuStatus ? 'mt-7' : 'hidden'
                    }`}
                >
                    <ul className="md:flex md:justify-center">
                        {['Projects', 'Experience', 'About', 'Blog'].map((entry: string) => (
                            <li className="navbar-element" key={entry}>
                                <Link href={`/${entry.toLowerCase()}`}>
                                    <a
                                        className="navbar-text"
                                        onClick={() => {
                                            event({ name: 'menuItem', category: 'link', label: entry.toLowerCase() });
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                event({
                                                    name: 'menuItem',
                                                    category: 'link',
                                                    label: entry.toLowerCase()
                                                });
                                            }
                                        }}
                                        role="link"
                                        tabIndex={0}
                                    >
                                        {entry}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li
                            onClick={() => {
                                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                                event({
                                    name: 'menuItem',
                                    category: 'button',
                                    label: resolvedTheme === 'light' ? 'Change to dark mode' : 'Change to light mode',
                                    value: ''
                                });
                            }}
                            onKeyDown={() => {
                                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                                event({
                                    name: 'menuItem',
                                    category: 'button',
                                    label: resolvedTheme === 'light' ? 'Change to dark mode' : 'Change to light mode',
                                    value: ''
                                });
                            }}
                            className="navbar-element-last"
                            role="presentation"
                        >
                            {screenWidth >= mobileScreenWidth ? (
                                <>
                                    {resolvedTheme === 'light' ? (
                                        <BsFillMoonFill
                                            size={35}
                                            className="cursor-pointer text-nav"
                                            title="Night Mode"
                                        />
                                    ) : (
                                        <BsFillSunFill
                                            size={35}
                                            className="cursor-pointer text-nav"
                                            title="Light Mode"
                                        />
                                    )}
                                </>
                            ) : (
                                <p className="navbar-text">{resolvedTheme === 'light' ? 'Night Mode' : 'Light Mode'}</p>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
