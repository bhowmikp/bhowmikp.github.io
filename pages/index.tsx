import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import { figureSerializer } from '@Serializers/figure';
import BlockContent from '@sanity/block-content-to-react';
import React, { FC } from 'react';
import Link from 'next/link';

import { getHomepageData } from '@Api/pages/homepage';
import { IHomepageData } from '@Interfaces/homepage';
import { ICta } from '@Interfaces/cta';

import { time as timeConstants } from '@Constants';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        homepageData: await getHomepageData()
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
        <>
            <AppLayout title="Homepage" className="bg-primary">
                <div className="bg-primary md:py-20">
                    <div className="flex flex-col mx-auto md:flex-row md:w-9/12 lg:px-14">
                        <div className="mx-5 sm:w-9/12 sm:mx-auto md:pr-2 lg:pr-0 lg:w-5/12">
                            <p className="font-bold text-4xl md:text-6xl">{homepageData.heading.header}</p>
                            <p className="text-3xl my-5 pb-5 md:pb-10">{homepageData.heading.description}</p>
                            {homepageData.heading.cta.map((cta: ICta) => (
                                <Link href={cta.url} key={cta._key}>
                                    <a target={cta.target} className="regular-button">
                                        {cta.urlText}
                                    </a>
                                </Link>
                            ))}
                        </div>
                        <div
                            className={`${determineImagePosition(
                                homepageData.heading.profilePic.alignment
                            )} text-center my-10 md:my-0 mx-auto`}
                        >
                            <BlockContent blocks={homepageData.heading.profilePic} serializers={figureSerializer} />
                        </div>
                    </div>
                </div>

                {homepageData.paragraphs.map((paragraphData, index) => (
                    <div key={paragraphData._key} className={`${index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'}`}>
                        <p>{paragraphData.paragraphTitle}</p>
                        <p>{paragraphData.paragraphHeading}</p>
                        <p>{paragraphData.paragraphDescription}</p>
                        <BlockContent blocks={paragraphData.image} serializers={figureSerializer} />
                        {paragraphData.cta.map((cta: ICta) => (
                            <Link href={cta.url} key={cta._key}>
                                <a target={cta.target} className="regular-button">
                                    {cta.urlText}
                                </a>
                            </Link>
                        ))}
                    </div>
                ))}
            </AppLayout>
        </>
    );
};

export default Homepage;
