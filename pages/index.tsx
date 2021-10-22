import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import homepageSerializer from '@Serializers/homepageSerializer';
import BlockContent from '@sanity/block-content-to-react';
import React, { FC } from 'react';

import { getHomepageData } from '@Api/pages/homepage';
import { IHomepageData } from '@Interfaces/homepage';

import { time as timeConstants } from '@Constants';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        homepageData: await getHomepageData()
    },
    revalidate: timeConstants.oneDayInSeconds
});

const Homepage: FC<{ homepageData: IHomepageData[] }> = ({ homepageData }) => (
    <>
        <AppLayout title="Homepage">
            <div className="bg-secondary h-full">
                <BlockContent blocks={homepageData[0].body} serializers={homepageSerializer} />
            </div>
        </AppLayout>
    </>
);

export default Homepage;
