import React, { FC } from 'react';
import { IParagraphs } from '@Interfaces/homepage';
import { ICta } from '@Interfaces/cta';
import { figureSerializer } from '@Serializers/figure';
import Link from 'next/link';

import BlockContent from '@sanity/block-content-to-react';

import { useWindowSize } from '@Hooks/useWindowSize';

import { screenWidthBreakpoint as screenWidthBreakpointConstants } from '@Constants';

export const ExperienceSection: FC<{ data: IParagraphs; className: string }> = ({ data, className }) => {
    const mobileScreenWidth = screenWidthBreakpointConstants.md;

    const { screenWidth } = useWindowSize();

    const determineImagePosition = (alignment: string): string => {
        if (screenWidth < mobileScreenWidth) {
            return 'order-first';
        }

        if (alignment === 'left') {
            return 'order-first';
        }

        return 'order-last';
    };

    return (
        <div className={`${className} py-10 md:py-40`}>
            <div className="mx-auto w-10/12 md:w-9/12 lg:px-14">
                <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">{data.paragraphHeading}</p>

                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="w-full md:w-6/12 lg:w-6/12 xl:w-5/12 mt-5 md:mt-0 flex flex-col justify-between xl:mr-28">
                        <div>
                            <p className="text-4xl md:text-5xl font-medium mb-4">{data.paragraphTitle}</p>
                            <p className="text-xl md:text-2xl text-secondary">{data.paragraphDescription}</p>
                        </div>
                        <div className="md:mb-3 flex flex-row flex-wrap">
                            {data.cta.map((cta: ICta) => (
                                <Link href={cta.url} key={cta._key}>
                                    <a target={cta.target} className={`${cta.style} mr-10 md:mr-6 lg:mr-10 mt-3`}>
                                        {cta.urlText}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={`grid w-full md:w-5/12 ${determineImagePosition(data.image.alignment)}`}>
                        <div
                            className={`mx-auto md:mx-0 w-full ${
                                data.image.alignment === 'right' && 'md:justify-self-end'
                            }`}
                        >
                            <BlockContent blocks={data.image} serializers={figureSerializer} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
