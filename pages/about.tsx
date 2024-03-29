import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import type { ReactNode, ReactElement } from 'react';

import BlockContent from '@sanity/block-content-to-react';
import { figureSerializerResponsive } from '@Sanity/serializers/figureSerializerResponsive';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import { CtaBlogs } from '@Components/Common/CtaBlogs';

import { getPageData } from '@Api/page/[page]';
import { IAboutMeData } from '@Interfaces/pages/aboutMePage';

import { NextSeo } from 'next-seo';

import { time as timeConstants } from '@Constants';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        aboutMeData: await getPageData('aboutMe')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const serializers = {
    types: {
        block: (props) =>
            props.children[0] === '' ? <p>&nbsp;</p> : <p className="text-secondary text-xl">{props.children}</p>
    }
};

const AboutMePage: FC<{ aboutMeData: IAboutMeData }> & { getLayout: ReactNode } = ({ aboutMeData }) => (
    <>
        <PageCover pageCoverData={aboutMeData.heading} />

        <div className="bg-secondary py-10">
            <div className="mx-auto px-3 py-2 md:px-0 md:py-0 md:w-8/12 lg:px-14">
                <div className="w-11/12 xl:w-10/12 mx-auto">
                    <p className="font-medium text-4xl mb-5">{aboutMeData.paragraphTitle}</p>

                    <div className={`mb-5 sm:mb-0 w-full sm:w-4/12 float-${aboutMeData.profilePic.alignment} sm:mx-5`}>
                        <BlockContent blocks={aboutMeData.profilePic} serializers={figureSerializerResponsive} />
                    </div>

                    <BlockContent blocks={aboutMeData.paragraphDescription} serializers={serializers} />
                </div>
            </div>
            <CtaBlogs ctaBlogsData={aboutMeData.ctaBlogs} className="py-10 md:py-28" />
        </div>
    </>
);

AboutMePage.getLayout = (page: ReactElement) => (
    <>
        <NextSeo title="About Me" description="Information about who I am, where I am from, and what I am all about" />

        <AppLayout mainClassName="bg-primary">{page}</AppLayout>
    </>
);

export default AboutMePage;
