import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { figureSerializer } from '@Serializers/figure';
import BlockContent from '@sanity/block-content-to-react';

import AppLayout from '@Components/AppLayout';
import { ExperienceSection } from '@Components/ExperienceSection';

import { getPageData } from '@Api/pages/[page]';
import { IHomepageData } from '@Interfaces/homepage';
import { ICta } from '@Interfaces/cta';

import { time as timeConstants } from '@Constants';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        homepageData: await getPageData('homepage')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const Homepage: FC<{ homepageData: IHomepageData }> = ({ homepageData }) => {
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
        <AppLayout
            title="Homepage"
            mainClassName="bg-primary"
            footerClassName={`${homepageData.paragraphs.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
        >
            <div className="bg-primary pb-10 md:py-40">
                <div className="flex flex-col mx-auto md:flex-row md:w-9/12 lg:px-14 justify-between">
                    <div className="w-10/12 mx-auto lg:w-5/12">
                        <p className="font-bold text-5xl md:text-6xl">{homepageData.heading.header}</p>
                        <p className="text-2xl md:text-3xl mb-5 mt-5 md:mt-10 pb-5 md:pb-10 text-secondary">
                            {homepageData.heading.description}
                        </p>
                        {homepageData.heading.cta.map((cta: ICta) => (
                            <Link href={cta.url} key={cta._key}>
                                <a
                                    target={cta.target}
                                    className="bg-button rounded-full text-xl px-3 py-2 md:px-4 md:py-3 hover:bg-primary dark:text-black text-white dark:hover:text-primary hover:text-primary font-semibold border-button border"
                                    rel="noopener noreferrer"
                                >
                                    {cta.urlText}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div
                        className={`${determineImagePosition(
                            homepageData.heading.profilePic.alignment
                        )} text-center my-10 md:my-0 mx-auto w-8/12 sm:w-5/12 xl:w-3/12`}
                    >
                        <BlockContent blocks={homepageData.heading.profilePic} serializers={figureSerializer} />
                    </div>
                </div>
            </div>

            {homepageData.paragraphs.map((paragraphData, index) => (
                <ExperienceSection
                    data={paragraphData}
                    className={`${index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'}`}
                    key={paragraphData._key}
                />
            ))}
        </AppLayout>
    );
};

export default Homepage;
