import React, { FC } from 'react';
import { IPageCover } from '@Interfaces/pageCover';
import { useWindowSize } from '@Hooks/useWindowSize';

import Link from 'next/link';

import { screenWidthBreakpoint as screenWidthBreakpointConstants } from '@Constants';

export const PageCover: FC<{ pageCoverData: IPageCover }> = ({ pageCoverData }) => {
    const { screenWidth } = useWindowSize();

    const mobileScreenWidth = screenWidthBreakpointConstants.md;

    return (
        <div className="bg-primary">
            {pageCoverData.pageStepper !== undefined && screenWidth >= mobileScreenWidth && (
                <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 pt-16">
                    {pageCoverData.pageStepper.map((entry, index) => (
                        <div key={entry._key} className="inline-block float-left">
                            <span className="text-secondary">
                                <Link href={entry.stepperLink}>
                                    <a>{entry.stepperLabel}</a>
                                </Link>
                                {index !== pageCoverData.pageStepper.length - 1 && (
                                    <p className="inline-block">&nbsp;{'>'}&nbsp;</p>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            <div className={`pb-10 ${pageCoverData.pageStepper === undefined ? 'md:py-40' : 'md:pb-40 md:pt-24'}`}>
                <div className="text-center mx-auto px-3 py-2 md:px-0 md:py-0 md:w-8/12 lg:px-14">
                    <p className="font-bold text-5xl md:text-6xl">{pageCoverData.header}</p>
                    <p className="text-2xl md:text-3xl mb-5 mt-5 md:mt-10 pb-5 md:pb-10 text-secondary">
                        {pageCoverData.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageCover;
