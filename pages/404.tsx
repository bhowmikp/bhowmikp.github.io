import { AppLayout } from '@Components/AppLayout';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import type { ReactNode, ReactElement } from 'react';

const PageNotFound: FC & { getLayout: ReactNode } = () => {
    const { resolvedTheme } = useTheme();

    return (
        <div className="flex py-10">
            <div className="m-auto">
                <p className="text-center mb-10 text-3xl font-bold my-2 text-black dark:text-white">
                    Oops! Page not found
                </p>
                <Image
                    src={resolvedTheme === 'light' ? '/hangInThereLight.svg' : '/hangInThereDark.svg'}
                    alt="404 Image"
                    width={500}
                    height={500}
                    onClick={() => {
                        window.open('https://www.vecteezy.com/free-vector/cute', '_ blank');
                    }}
                />
                <p className="text-center mt-10 text-xl font-bold my-2 text-black dark:text-white">
                    Try{' '}
                    <Link href="/">
                        <a className="link-primary">homepage</a>
                    </Link>{' '}
                    or{' '}
                    <Link href="/blog">
                        <a className="link-primary">blog</a>
                    </Link>{' '}
                    instead
                </p>
            </div>
        </div>
    );
};

PageNotFound.getLayout = (page: ReactElement) => (
    <AppLayout title="404" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default PageNotFound;
