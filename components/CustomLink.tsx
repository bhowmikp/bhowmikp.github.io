import React, { FC } from 'react';
import Link from 'next/link';
import { event } from '@Service/googleService';
import isEmpty from 'lodash/isEmpty';

interface ICustomLink {
    link: string;
    label: string;
    labelGtm?: string;
    newTab?: boolean;
    name: string;
    className?: string;
}

const CustomLink: FC<ICustomLink> = ({ link, label, labelGtm, newTab = false, name, className = '' }) => (
    <Link href={link}>
        <a
            target={newTab ? '_blank' : '_self'}
            rel={newTab ? 'noopener noreferrer' : ''}
            onClick={() => {
                event({
                    name,
                    category: 'link',
                    label: isEmpty(labelGtm) ? label : labelGtm,
                    value: link
                });
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    event({
                        name,
                        category: 'link',
                        label: isEmpty(labelGtm) ? label : labelGtm,
                        value: link
                    });
                }
            }}
            role="link"
            tabIndex={0}
            className={isEmpty(className) ? 'link-primary' : className}
        >
            {label}
        </a>
    </Link>
);

export default CustomLink;
