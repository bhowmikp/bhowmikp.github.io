import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useAmp } from 'next/amp';

import { GA_TRACKING_ID } from '@Service/googleService';
import AmpAnalytics from '@Components/AmpAnalytics';
import React, { ReactElement } from 'react';

const AmpWrap = ({ ampOnly, nonAmp }: { ampOnly?: ReactElement; nonAmp?: ReactElement }) => {
    const isAmp = useAmp();
    if (ampOnly) return isAmp && ampOnly;
    return !isAmp && nonAmp;
};

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* AMP - Google Analytics */}
                    <AmpWrap
                        ampOnly={
                            <>
                                <AmpAnalytics
                                    type="googleanalytics"
                                    script={{
                                        vars: {
                                            account: GA_TRACKING_ID,
                                            gtag_id: GA_TRACKING_ID,
                                            config: {
                                                [GA_TRACKING_ID]: { groups: 'default' }
                                            }
                                        },
                                        triggers: {
                                            trackPageview: {
                                                on: 'visible',
                                                request: 'pageview'
                                            }
                                        }
                                    }}
                                />
                            </>
                        }
                    />

                    {/* Non-AMP - Google Analytics */}
                    <AmpWrap
                        nonAmp={
                            <>
                                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
                                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                                <script
                                    dangerouslySetInnerHTML={{
                                        __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${GA_TRACKING_ID}');
                    `
                                    }}
                                />
                            </>
                        }
                    />
                </body>
            </Html>
        );
    }
}
