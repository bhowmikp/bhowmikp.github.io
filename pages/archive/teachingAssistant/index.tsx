import React, { FC } from 'react';
import AppLayout from '@Components/AppLayout';
import CustomLink from '@Components/CustomLink';

import type { ReactNode, ReactElement } from 'react';

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
        name="teachingAssistant"
        className={`link-primary ${className}`}
    />
);

const TeachingAssistant: FC & { getLayout: ReactNode } = () => (
    <div className="mx-5 mb-10">
        <p className="text-2xl font-extrabold">Teaching Assistant Experience</p>

        <p className="archive-options">CSCD01 2020 Winter (Engineering Large Software Systems)</p>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/cscc69s19"
                label="CSCC69 2019 Summer (Operating Systems)"
                labelGtm="cscc69s19"
            />
        </div>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/cscc69w19"
                label="CSCC69 2019 Winter (Operating Systems)"
                labelGtm="cscc69w19"
            />
        </div>

        <p className="archive-options">CSCA08 2019 Fall (Introduction to Computer Science I)</p>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/cscb07f18"
                label="CSCB07 2018 Fall (Software Design)"
                labelGtm="cscb07f18"
            />
        </div>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/csca48w18"
                label="CSCA48 2018 Winter (Introduction to Computer Programming II)"
                labelGtm="csca48w18"
            />
        </div>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/csca08f17"
                label="CSCA08 2017 Fall (Introduction to Computer Science I)"
                labelGtm="csca08f17"
            />
        </div>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/csca48s17"
                label="CSCA48 2017 Summer (Introduction to Computer Programming II)"
                labelGtm="csca48s17"
            />
        </div>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/csca48w17"
                label="CSCA48 2017 Winter (Introduction to Computer Programming II)"
                labelGtm="csca48w17"
            />
        </div>

        <div className="archive-options">
            <CustomLinkLocal
                link="/archive/teachingAssistant/csca08f16"
                label="CSCA08 2016 Fall (Introduction to Computer Science I)"
                labelGtm="csca08f16"
            />
        </div>
    </div>
);

TeachingAssistant.getLayout = (page: ReactElement) => (
    <AppLayout title="Teaching Assistant Experience" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default TeachingAssistant;
