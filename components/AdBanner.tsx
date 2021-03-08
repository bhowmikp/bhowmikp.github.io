import React, { useEffect, FC } from 'react';
import { IWindow } from '@Interfaces/window';
import { useAmp } from 'next/amp';

declare const window: IWindow;

const AdBanner: FC = () => {
    const isAmp = useAmp();

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            {isAmp ? (
                <amp-ad
                    width="100vw"
                    height="320"
                    type="adsense"
                    data-ad-client="ca-pub-1306989929207512"
                    data-ad-slot="4055728069"
                    data-auto-format="rspv"
                    data-full-width=""
                >
                    {/* <div overflow='auto' /> */}
                </amp-ad>
            ) : (
                <ins
                    className="adsbygoogle adbanner-customize"
                    style={{
                        display: 'block'
                    }}
                    data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
                    data-ad-slot={process.env.NEXT_PUBLIC_AD_SLOT}
                />
            )}
        </>
    );
};

export default AdBanner;
