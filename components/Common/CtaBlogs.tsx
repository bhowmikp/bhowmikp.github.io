import React, { FC } from 'react';
import Link from 'next/link';
import { BlogCardsContainer } from '@Components/Common/BlogCardsContainer';

import { ICtaBlogs } from '@Interfaces/ctaBlogs';

export const CtaBlogs: FC<{ ctaBlogsData: ICtaBlogs; className: string; widthFull?: boolean }> = ({
    ctaBlogsData,
    className,
    widthFull
}) => (
    <div className={`${className}`}>
        <div className={`mx-auto ${widthFull || 'w-10/12 md:w-9/12 lg:px-14'}`}>
            <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">{ctaBlogsData.title}</p>

            <BlogCardsContainer blogsData={ctaBlogsData.blog} />

            {ctaBlogsData.cta !== undefined && (
                <div className="text-center mt-10 md:mt-20">
                    <Link href={ctaBlogsData.cta.url} key={ctaBlogsData.cta._key}>
                        <a target={ctaBlogsData.cta.target} className={`${ctaBlogsData.cta.style}`}>
                            {ctaBlogsData.cta.urlText}
                        </a>
                    </Link>
                </div>
            )}
        </div>
    </div>
);

export default CtaBlogs;
