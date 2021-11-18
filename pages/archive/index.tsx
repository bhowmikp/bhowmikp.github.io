import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';
import CustomLink from '@Components/CustomLink';

import { getPageData } from '@Api/page/[page]';
import { IArchiveData } from '@Interfaces/pages/archive';

import { time as timeConstants } from '@Constants';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        archiveData: await getPageData('archive')
    },
    revalidate: timeConstants.oneDayInSeconds
});

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
        className={`${className}`}
    />
);

const Archive: FC<{ archiveData: IArchiveData }> & { getLayout: ReactNode } = ({ archiveData }) => (
    <>
        <PageCover pageCoverData={archiveData.heading} />

        <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 my-20">
            <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">
                {archiveData.archiveListTitle}
            </p>

            <div className="grid grid-rows-1">
                {archiveData.archives.map((archive) => (
                    <CustomLinkLocal
                        className="archive-options font-medium"
                        link={archive.archiveLink}
                        label={archive.archiveLabel}
                        key={archive._key}
                    />
                ))}
            </div>
        </div>
    </>
);

Archive.getLayout = (page: ReactElement) => (
    <AppLayout title="Archive" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Archive;
