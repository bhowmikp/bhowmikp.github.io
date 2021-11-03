import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import AppLayout from '@Components/AppLayout';
import { ExperienceSection } from '@Components/ExperienceSection';

import { getPageData } from '@Api/pages/[page]';
import { IExperienceData } from '@Interfaces/experience';

import { time as timeConstants } from '@Constants';

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        experienceData: await getPageData('experience')
    },
    revalidate: timeConstants.oneDayInSeconds
});

const ExperiencePage: FC<{ experienceData: IExperienceData }> = ({ experienceData }) => (
    <AppLayout
        title="Experience"
        mainClassName="bg-primary"
        footerClassName={`${experienceData.paragraphs.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
    >
        <div className="bg-primary pb-10 md:py-40">
            <div className="text-center mx-auto px-3 py-2 md:px-0 md:py-0 md:w-8/12 lg:px-14">
                <p className="font-bold text-5xl md:text-6xl">{experienceData.heading.header}</p>
                <p className="text-2xl md:text-3xl mb-5 mt-5 md:mt-10 pb-5 md:pb-10 text-secondary">
                    {experienceData.heading.description}
                </p>
            </div>
        </div>

        {experienceData.paragraphs.map((paragraphData, index) => (
            <ExperienceSection
                data={paragraphData}
                className={`${index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'}`}
                key={paragraphData._key}
            />
        ))}
    </AppLayout>
);

export default ExperiencePage;
