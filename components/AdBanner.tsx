import React, { useEffect, FC } from 'react';
import { IWindow } from '@Interfaces/window';

declare const window: IWindow;

const AdBanner: FC = () => {
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
                className="adsbygoogle adbanner-customize"
                style={{
                    display: 'block'
                }}
                data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
                data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT}
            />
        </>
    );
};

export default AdBanner;
