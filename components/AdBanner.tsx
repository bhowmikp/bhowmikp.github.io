import React, { useEffect, FC } from 'react';
import { IWindow } from '@Interfaces/window';

import { useTheme } from 'next-themes';

declare const window: IWindow;

export const AdBanner: FC = () => {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }, []);

    return (
        <>
            <p className="text-center relative top-10">Please disable adblock</p>

            <ins
                className="adsbygoogle block text-center bg-secondary"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-1306989929207512"
                data-ad-slot={
                    resolvedTheme === 'light'
                        ? process.env.NEXT_PUBLIC_AD_SLOT_LIGHT
                        : process.env.NEXT_PUBLIC_AD_SLOT_DARK
                }
                data-adtest={process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'off' : 'on'}
            />
        </>
    );
};

export default AdBanner;
