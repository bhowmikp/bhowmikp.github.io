import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import type { ReactNode, ReactElement } from 'react';

import BlockContent from '@sanity/block-content-to-react';
import { figureSerializer } from '@Sanity/serializers/figure';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import { CtaBlogs } from '@Components/Common/CtaBlogs';

import { getPageData } from '@Api/page/[page]';
import { IAboutMeData } from '@Interfaces/pages/aboutMePage';

import { time as timeConstants } from '@Constants';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        aboutMeData: await getPageData('aboutMe')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const serializers = {
    types: {
        block: (props) => <p className="text-secondary text-xl">{props.children}</p>
    }
};

const AboutMePage: FC<{ aboutMeData: IAboutMeData }> & { getLayout: ReactNode } = ({ aboutMeData }) => (
    <>
        <PageCover pageCoverData={aboutMeData.heading} />

        <div className="bg-secondary py-10">
            <div className="mx-auto px-3 py-2 md:px-0 md:py-0 md:w-8/12 lg:px-14">
                <div className="w-11/12 xl:w-10/12 mx-auto">
                    <p className="font-medium text-4xl mb-5">{aboutMeData.paragraphTitle}</p>

                    <div className={`w-4/12 float-${aboutMeData.profilePic.alignment} mx-5`}>
                        <BlockContent blocks={aboutMeData.profilePic} serializers={figureSerializer} />
                    </div>

                    <BlockContent blocks={aboutMeData.paragraphDescription} serializers={serializers} />
                </div>
            </div>
            <CtaBlogs ctaBlogsData={aboutMeData.ctaBlogs} className="py-10 md:py-28" />
        </div>
    </>
);

AboutMePage.getLayout = (page: ReactElement) => (
    <AppLayout title="About Me" mainClassName="bg-primary">
        {page}
    </AppLayout>
);

export default AboutMePage;
