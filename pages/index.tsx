import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import homepageSerializer from '@Serializers/homepageSerializer';
import BlockContent from '@sanity/block-content-to-react';
import { getHomepageData } from '@Api/homepage';
import { IHomepageData } from '@Interfaces/homepage';
import React, { FC } from 'react';

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
            <div className="bg-secondary h-full">
                <BlockContent blocks={homepageData[0].body} serializers={homepageSerializer} />
            </div>
        </AppLayout>
    </>
);

export default Homepage;
