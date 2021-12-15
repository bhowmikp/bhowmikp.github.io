import React, { useEffect, FC } from 'react';
import { IWindow } from '@Interfaces/window';

declare const window: IWindow;

export const AdBanner: FC = () => {
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
            <ins
                className="adsbygoogle block"
                data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
                data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT}
                data-ad-format="auto"
                data-full-width-responsive="true"
                data-adtest="on"
            />
        </>
    );
};

export default AdBanner;
