import Head from 'next/head';
import React, { FC } from 'react';
import Script from 'next/script';

export const AmpIncludeCustomElement: FC<{ name: string; version: string }> = ({ name, version }) => (
    <Head>
        <Script async custom-element={name} src={`https://cdn.ampproject.org/v0/${name}-${version}.js`} key={name} />
    </Head>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AmpAnalytics: FC<{ type: string; script: { vars: any; triggers: any } }> = ({ type, script }) => (
    <>
        <AmpIncludeCustomElement name="amp-analytics" version="0.1" />
        <amp-analytics type={type}>
            {script && (
                <Script
                    type="application/json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(script)
                    }}
                    id="amp-analytics"
                />
            )}
        </amp-analytics>
    </>
);

export default AmpAnalytics;
