import React, { FC } from 'react';
import AppLayout from '@Components/AppLayout';
import CustomLink from '@Components/CustomLink';

export const config = { amp: 'hybrid' };

const CustomLinkLocal: FC<{
    link: string;
    label: string;
    labelGtm?: string;
    newTab?: boolean;
    className?: string;
}> = ({ link, label, labelGtm, newTab = false, className = '' }) => (
    <CustomLink
        link={link}
        label={label}
        labelGtm={labelGtm}
        newTab={newTab}
        name="archive"
        className={`link-primary ${className}`}
    />
);

const archive: FC = () => (
    <AppLayout title="Archive" mainClassName="bg-secondary">
        <div className="mx-5 py-10">
            <p className="text-2xl font-extrabold">Archive</p>

            <div className="archive-options mt-3">
                <CustomLinkLocal link="/archive/recognition" label="Recognition" />
            </div>

            <div className="archive-options">
                <CustomLinkLocal link="/archive/teachingAssistant" label="Teaching Assistant" />
            </div>
        </div>
    </AppLayout>
);

export default archive;
