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
    <AppLayout title="archive">
        <div className="mx-5 mb-10">
            <p className="archive-options mt-3">CSCD01 2020 Winter (Engineering Large Software Systems)</p>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/cscc69s19"
                    label="CSCC69 2019 Summer (Operating Systems)"
                    labelGtm="cscc69s19"
                />
            </div>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/cscc69w19"
                    label="CSCC69 2019 Winter (Operating Systems)"
                    labelGtm="cscc69w19"
                />
            </div>

            <p className="archive-options">CSCA08 2019 Fall (Introduction to Computer Science I)</p>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/cscb07f18"
                    label="CSCB07 2018 Fall (Software Design)"
                    labelGtm="cscb07f18"
                />
            </div>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/csca48w18"
                    label="CSCA48 2018 Winter (Introduction to Computer Programming II)"
                    labelGtm="csca48w18"
                />
            </div>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/csca08f17"
                    label="CSCA08 2017 Fall (Introduction to Computer Science I)"
                    labelGtm="csca08f17"
                />
            </div>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/csca48s17"
                    label="CSCA48 2017 Summer (Introduction to Computer Programming II)"
                    labelGtm="csca48s17"
                />
            </div>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/csca48w17"
                    label="CSCA48 2017 Winter (Introduction to Computer Programming II)"
                    labelGtm="csca48w17"
                />
            </div>

            <div className="archive-options">
                <CustomLinkLocal
                    link="/archive/csca08f16"
                    label="CSCA08 2016 Fall (Introduction to Computer Science I)"
                    labelGtm="csca08f16"
                />
            </div>
        </div>
    </AppLayout>
);

export default archive;
