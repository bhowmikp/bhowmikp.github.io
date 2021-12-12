import React, { FC } from 'react';
import { IPageCover } from '@Interfaces/pageCover';

export const PageCover: FC<{ pageCoverData: IPageCover }> = ({ pageCoverData }) => (
    <div className="bg-primary pb-10 md:py-40">
        <div className="text-center mx-auto px-3 py-2 md:px-0 md:py-0 md:w-8/12 lg:px-14">
            <p className="font-bold text-5xl md:text-6xl">{pageCoverData.header}</p>
            <p className="text-2xl md:text-3xl mb-5 mt-5 md:mt-10 pb-5 md:pb-10 text-secondary">
                {pageCoverData.description}
            </p>
        </div>
    </div>
);

export default PageCover;
