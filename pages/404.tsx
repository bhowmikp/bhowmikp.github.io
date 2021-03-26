import AppLayout from '@Components/AppLayout';
import React, { FC } from 'react';
import { useAmp } from 'next/amp';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export const config = { amp: 'hybrid' };

const Homepage: FC = () => {
    const isAmp = useAmp();

    const { resolvedTheme } = useTheme();

    return (
        <AppLayout title="404">
            <div className="flex h-screen">
                <div className="m-auto">
                    <p className="text-center mb-10 text-3xl font-bold my-2 text-black dark:text-white">
                        Oops! Page not found
                    </p>
                    {isAmp ? (
                        <a href="https://www.vecteezy.com/free-vector/cute" rel="noopener noreferrer">
                            <amp-img width="600" height="600" src="/hangInThereLight.svg" alt="404 Image" />
                        </a>
                    ) : (
                            <Image
                                src={resolvedTheme === 'light' ? '/hangInThereLight.svg' : '/hangInThereDark.svg'}
                                alt="404 Image"
                                width={500}
                                height={500}
                                onClick={() => {
                                    window.open('https://www.vecteezy.com/free-vector/cute', '_ blank');
                                }}
                            />
                        )}
                    <p className="text-center mt-10 text-xl font-bold my-2 text-black dark:text-white">
                        Try the{' '}
                        <Link href="/">
                            <a className="link-primary">homepage</a>
                        </Link>{' '}
                        or{' '}
                        <Link href="/blogs/programming">
                            <a className="link-primary">blog</a>
                        </Link>{' '}
                        instead
                    </p>
                </div>
            </div>
        </AppLayout>
    );
};

export default Homepage;
