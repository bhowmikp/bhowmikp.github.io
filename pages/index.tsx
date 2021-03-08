import AppLayout from '@Components/AppLayout';
import AdBanner from '@Components/test';
import { GetStaticProps } from 'next';
import homepageSerializer from '@Serializers/homepageSerializer';
import BlockContent from '@sanity/block-content-to-react';
import { getHomepageData } from '@Api/homepage';
import { IHomepageData } from '@Interfaces/homepage';
import React, { FC } from 'react';
import { event } from '@Service/googleService';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        homepageData: await getHomepageData()
    },
    revalidate: 86400
});

const Homepage: FC<{ homepageData: IHomepageData[] }> = ({ homepageData }) => (
    <>
        <AppLayout title="Homepage">
            {homepageData.map((entry) => (
                <>
                    <BlockContent blocks={entry.body} serializers={homepageSerializer} />
                </>
            ))}
            <button
                onClick={() => {
                    event({ name: 'customEvent', category: 'categoryTest', label: 'labelTest', value: 'valueTest' });
                }}
                type="button"
            >
                Test GTM
            </button>
            <AdBanner />
        </AppLayout>
    </>
);

export default Homepage;
