import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import homepageSerializer from '@Serializers/homepageSerializer';
import BlockContent from '@sanity/block-content-to-react';
import { getHomepageData } from '@Api/homepage';
import { IHomepageData } from '@Interfaces/homepage';
import React, { FC } from 'react';

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
        </AppLayout>
    </>
);

export default Homepage;
