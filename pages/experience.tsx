import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import { Experience } from '@Components/Common/Experience';

import { getPageData } from '@Api/page/[page]';
import { IExperienceData } from '@Interfaces/pages/experience';

import { NextSeo } from 'next-seo';

import { time as timeConstants } from '@Constants';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        experienceData: await getPageData('experience')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const ExperiencePage: FC<{ experienceData: IExperienceData }> & { getLayout: ReactNode } = ({ experienceData }) => (
    <>
        <PageCover pageCoverData={experienceData.heading} />

        {experienceData.paragraphs.map((paragraphData, index) => (
            <Experience
                data={paragraphData}
                className={`${index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'}`}
                key={paragraphData._key}
            />
        ))}
    </>
);

ExperiencePage.getLayout = (page: ReactElement) => {
    const data = page.props.experienceData;

    return (
        <>
            <NextSeo title="Experience" description="All the places I worked at" />

            <AppLayout
                mainClassName="bg-primary"
                footerClassName={`${data.paragraphs.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
            >
                {page}
            </AppLayout>
        </>
    );
};

export default ExperiencePage;
