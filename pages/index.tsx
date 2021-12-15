import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { figureSerializerFill } from '@Sanity/serializers/figureSerializerFill';
import BlockContent from '@sanity/block-content-to-react';

import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { Experience } from '@Components/Common/Experience';
import { CtaBlogs } from '@Components/Common/CtaBlogs';

import { getPageData } from '@Api/page/[page]';
import { IHomepageData } from '@Interfaces/pages/homepage';

import { time as timeConstants } from '@Constants';

import { AdBanner } from '@Components/AdBanner';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        homepageData: await getPageData('homepage')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const Homepage: FC<{ homepageData: IHomepageData }> & { getLayout: ReactNode } = ({ homepageData }) => {
    const determineImagePosition = (alignment: string): string => {
        if (alignment === 'left') {
            return 'order-first';
        }
        if (alignment === 'right') {
            return 'order-last';
        }

        return '';
    };

    return (
        <>
            <div className="bg-primary pb-10 md:py-40">
                <AdBanner />
                <div className="flex flex-col mx-auto md:flex-row md:w-9/12 lg:px-14 justify-between">
                    <div className="w-10/12 mx-auto lg:w-5/12">
                        <p className="font-bold text-5xl md:text-6xl">{homepageData.heading.header}</p>
                        <p className="text-2xl md:text-3xl mb-5 mt-5 md:mt-10 pb-5 md:pb-10 text-secondary">
                            {homepageData.heading.description}
                        </p>
                        <Link href="/api/page/siteSettings/resume">
                            <a
                                target="_blank"
                                className="bg-button rounded-full text-xl px-3 py-2 md:px-4 md:py-3 hover:bg-primary dark:text-black text-white hover:shadow-xl dark:hover:text-primary hover:text-primary font-semibold border-button border"
                                rel="noopener noreferrer"
                            >
                                {homepageData.heading.resumeButtonText}
                            </a>
                        </Link>
                    </div>
                    <div
                        className={`${determineImagePosition(
                            homepageData.heading.profilePic.alignment
                        )} text-center my-10 md:my-0 mx-auto w-8/12 sm:w-5/12 xl:w-3/12 relative min-h-[300px]`}
                    >
                        <BlockContent blocks={homepageData.heading.profilePic} serializers={figureSerializerFill} />
                    </div>
                </div>
            </div>

            {homepageData.paragraphs.map((paragraphData, index) => (
                <Experience
                    data={paragraphData}
                    className={`${index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'}`}
                    key={paragraphData._key}
                />
            ))}

            <CtaBlogs
                ctaBlogsData={homepageData.ctaBlogs}
                className={`${
                    homepageData.paragraphs.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'
                }  py-10 md:py-28`}
            />
        </>
    );
};

Homepage.getLayout = (page: ReactElement) => {
    const data = page.props.homepageData;

    return (
        <AppLayout
            title="Homepage"
            mainClassName="bg-primary"
            footerClassName={`${(data.paragraphs.length + 1) % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
        >
            {page}
        </AppLayout>
    );
};

export default Homepage;
