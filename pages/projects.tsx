import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import { Experience } from '@Components/Common/Experience';

import { getPageData } from '@Api/page/[page]';
import { IProjectsData } from '@Interfaces/pages/projects';

import { NextSeo } from 'next-seo';

import { time as timeConstants } from '@Constants';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        projectsData: await getPageData('projects')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const ProjectsPage: FC<{ projectsData: IProjectsData }> & { getLayout: ReactNode } = ({ projectsData }) => (
    <>
        <PageCover pageCoverData={projectsData.heading} />

        {projectsData.paragraphs.map((paragraphData, index) => (
            <Experience
                data={paragraphData}
                className={`${index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'}`}
                key={paragraphData._key}
            />
        ))}
    </>
);

ProjectsPage.getLayout = (page: ReactElement) => {
    const data = page.props.projectsData;

    return (
        <>
            <NextSeo title="Projects" description="All the interesting personal projects I have worked on" />

            <AppLayout
                mainClassName="bg-primary"
                footerClassName={`${data.paragraphs.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
            >
                {page}
            </AppLayout>
        </>
    );
};

export default ProjectsPage;
