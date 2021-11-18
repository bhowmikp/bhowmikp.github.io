import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import type { ReactNode, ReactElement } from 'react';

import { AppLayout } from '@Components/AppLayout';
import { PageCover } from '@Components/Common/PageCover';

import { getPageData } from '@Api/page/[page]';
import { IRecognitionData } from '@Interfaces/pages/recognition';

import { time as timeConstants } from '@Constants';

// export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        recognitionData: await getPageData('recognition')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const Recognition: FC<{ recognitionData: IRecognitionData }> & { getLayout: ReactNode } = ({ recognitionData }) => (
    <>
        <PageCover pageCoverData={recognitionData.heading} />

        <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 my-20">
            <p className="text-nav border-b-2 border-experienceSection font-medium mb-4">
                {recognitionData.recognitionListTitle}
            </p>

            <table className="table w-full">
                <thead>
                    <tr className="bg-primary border-b-2 border-experienceSection rounded-lg">
                        {recognitionData.awards[0].split('|').map((column: string) => (
                            <th key={column.trim()} className="text-primary font-medium py-3 w-1/3">
                                {column.trim()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {recognitionData.awards.slice(1).map((row: string) => (
                        <tr key={row} className="border-b-2 border-experienceSection">
                            {row.split('|').map((column: string, index: number) => (
                                <td
                                    key={column.trim()}
                                    className={`text-primary font-medium py-3 w-1/3 ${index !== 1 && 'text-center'}`}
                                >
                                    {column.trim()}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

Recognition.getLayout = (page: ReactElement) => (
    <AppLayout title="Awards &amp; Recognition" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Recognition;
