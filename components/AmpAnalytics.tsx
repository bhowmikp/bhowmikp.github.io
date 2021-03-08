import Head from 'next/head';
import React, { FC } from 'react';

export const AmpIncludeCustomElement: FC<{ name: string; version: string }> = ({ name, version }) => (
    <Head>
        <script async custom-element={name} src={`https://cdn.ampproject.org/v0/${name}-${version}.js`} key={name} />
    </Head>
);

const AmpAnalytics: FC<{ type: string; script: { vars: any; triggers: any } }> = ({ type, script }) => (
    <>
        <AmpIncludeCustomElement name="amp-analytics" version="0.1" />
        <amp-analytics type={type}>
            {script && (
                <script
                    type="application/json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(script)
                    }}
                />
            )}
        </amp-analytics>
    </>
);

export default AmpAnalytics;
