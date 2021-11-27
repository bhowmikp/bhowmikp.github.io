import React, { FC } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import CustomLink from '@Components/CustomLink';

import { IPageCover } from '@Interfaces/pageCover';

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
        className={`archive-options font-medium ${className}`}
    />
);

const TeachingAssistant: FC & { getLayout: ReactNode } = () => {
    const pageCoverData: IPageCover = {
        header: 'My Teaching Assistant Experience',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        pageStepper: [
            {
                stepperLabel: 'Experience',
                stepperLink: '/experience',
                _key: 'experience'
            },
            {
                stepperLabel: 'Archive',
                stepperLink: '/archive',
                _key: 'archive'
            },
            {
                stepperLabel: 'Teaching Assistant',
                _key: 'teachingAssistant'
            }
        ]
    };

    return (
        <>
            <PageCover pageCoverData={pageCoverData} />

            <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 my-20">
                <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">COURSES TAUGHT</p>

                <div className="grid grid-cols-1">
                    <CustomLinkLocal
                        link="/archive/teachingAssistant/cscc69s19"
                        label="CSCC69 2019 Summer (Operating Systems)"
                        labelGtm="cscc69s19"
                    />

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/cscc69w19"
                        label="CSCC69 2019 Winter (Operating Systems)"
                        labelGtm="cscc69w19"
                    />

                    <p className="archive-options-non-link font-medium">
                        CSCA08 2019 Fall (Introduction to Computer Science I)
                    </p>

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/cscb07f18"
                        label="CSCB07 2018 Fall (Software Design)"
                        labelGtm="cscb07f18"
                    />

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/csca48w18"
                        label="CSCA48 2018 Winter (Introduction to Computer Programming II)"
                        labelGtm="csca48w18"
                    />

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/csca08f17"
                        label="CSCA08 2017 Fall (Introduction to Computer Science I)"
                        labelGtm="csca08f17"
                    />

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/csca48s17"
                        label="CSCA48 2017 Summer (Introduction to Computer Programming II)"
                        labelGtm="csca48s17"
                    />

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/csca48w17"
                        label="CSCA48 2017 Winter (Introduction to Computer Programming II)"
                        labelGtm="csca48w17"
                    />

                    <CustomLinkLocal
                        link="/archive/teachingAssistant/csca08f16"
                        label="CSCA08 2016 Fall (Introduction to Computer Science I)"
                        labelGtm="csca08f16"
                    />
                </div>
            </div>
        </>
    );
};

TeachingAssistant.getLayout = (page: ReactElement) => (
    <AppLayout title="Teaching Assistant Experience" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default TeachingAssistant;
