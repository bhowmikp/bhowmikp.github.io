import React, { FC } from 'react';
import { IParagraphs } from '@Interfaces/homepage';
import { ICta } from '@Interfaces/cta';
import figureSerializer from '@Serializers/figure';
import Link from 'next/link';

import BlockContent from '@sanity/block-content-to-react';

export const ExperienceSection: FC<{ data: IParagraphs; className: string }> = ({ data, className }) => (
    <div className={`${className}`}>
        <p className="text-nav border-b-2 border-experienceSection font-medium">{data.paragraphHeading}</p>
        <p>{data.paragraphTitle}</p>
        <p>{data.paragraphDescription}</p>
        <BlockContent blocks={data.image} serializers={figureSerializer} />
        {data.cta.map((cta: ICta) => (
            <Link href={cta.url} key={cta._key}>
                <a target={cta.target} className="regular-button">
                    {cta.urlText}
                </a>
            </Link>
        ))}
    </div>
);

export default ExperienceSection;
