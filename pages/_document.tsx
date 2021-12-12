import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '@Service/googleService';
import React from 'react';

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', '${GA_TRACKING_ID}');
                                `
                        }}
                    />
                </body>
            </Html>
        );
    }
}
