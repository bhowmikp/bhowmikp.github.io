import React, { FC } from 'react';
import { IParagraphs } from '@Interfaces/paragraph';
import { ICta } from '@Interfaces/cta';
import { figureSerializerFill } from '@Sanity/serializers/figureSerializerFill';
import Link from 'next/link';

import BlockContent from '@sanity/block-content-to-react';

import { useWindowSize } from '@Hooks/useWindowSize';

import { screenWidthBreakpoint as screenWidthBreakpointConstants } from '@Constants';

const serializers = {
    types: {
        block: (props) => <p className="text-xl md:text-2xl text-secondary">{props.children}</p>
    }
};

export const Experience: FC<{ data: IParagraphs; className: string }> = ({ data, className }) => {
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
        <div
            className={`${className} py-10 md:py-40`}
            id={data.paragraphHeading.toLocaleLowerCase().replace(/ /g, '-')}
        >
            <div className="mx-auto w-10/12 md:w-9/12 lg:px-14">
                <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">{data.paragraphHeading}</p>

                <div className="flex flex-col md:flex-row md:justify-between">
                    <div
                        className={`w-full ${
                            data.image !== undefined && 'md:w-6/12 lg:w-6/12 xl:w-5/12'
                        } mt-5 md:mt-0 flex flex-col justify-between xl:mr-28`}
                    >
                        <div className="mb-4">
                            <p className="text-4xl md:text-5xl font-medium mb-4">{data.paragraphTitle}</p>
                            <BlockContent blocks={data.paragraphDescription} serializers={serializers} />
                        </div>
                        {data.cta !== undefined && (
                            <div className="md:mb-3 flex flex-row flex-wrap">
                                {data.cta.map((cta: ICta) => (
                                    <Link href={cta.url} key={cta._key}>
                                        <a target={cta.target} className={`${cta.style} mr-10 md:mr-6 lg:mr-10 mt-3`}>
                                            {cta.urlText}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {data.image !== undefined && (
                        <div className={`grid w-full md:w-5/12 ${determineImagePosition(data.image.alignment)}`}>
                            <div
                                className={`mx-auto md:mx-0 w-full relative min-h-[200px] ${
                                    data.image.alignment === 'right' && 'md:justify-self-end'
                                }`}
                            >
                                <BlockContent blocks={data.image} serializers={figureSerializerFill} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
