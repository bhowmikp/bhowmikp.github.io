import Document, { Html, Head, Main, NextScript } from 'next/document';
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

                    <script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_AD_CLIENT}`}
                        crossOrigin="anonymous"
                    />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    />
                    <script
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                                `
                        }}
                    />
                </body>
            </Html>
        );
    }
}
