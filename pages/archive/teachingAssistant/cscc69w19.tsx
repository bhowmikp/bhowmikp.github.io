import React, { FC } from 'react';
import { AppLayout } from '@Components/AppLayout';
import CustomLink from '@Components/CustomLink';

import type { ReactNode, ReactElement } from 'react';

export const config = { amp: 'hybrid' };

const CustomLinkLocal: FC<{
    link: string;
    label: string;
    labelGtm?: string;
    newTab?: boolean;
    className?: string;
}> = ({ link, label, labelGtm, newTab = true, className = '' }) => (
    <CustomLink
        link={link}
        label={label}
        labelGtm={labelGtm}
        newTab={newTab}
        name="cscc69w19"
        className={`link-primary ${className}`}
    />
);

const Cscc69w19: FC & { getLayout: ReactNode } = () => (
    <div className="mx-5 mb-10">
        <p className="tutorial-header">Welcome to CSCC69</p>
        <p className="tutorial-default-spacing">
            <b>Tutorial 0003</b>: Friday, 02:00 PM - 03:00 PM, at HW 308.
        </p>
        <p className="tutorial-default-spacing">
            <b>Office hours</b>: Thursday, 02:00 PM - 03:00 PM, at IC 400A.
        </p>
        <p className="tutorial-default-spacing">
            <b>TA name</b>: Prantar Bhowmik
        </p>
        <p className="tutorial-default-spacing">
            I will update this website on a weekly basis. All code written in class will be made available here.
        </p>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Email Policy</u>
            </b>
        </p>
        <p className="tutorial-default-spacing">
            My email address is{' '}
            <CustomLinkLocal link="mailto:prantar.bhowmik@mail.utoronto.ca" label="prantar.bhowmik@mail.utoronto.ca" />.
            I will be checking my email every night. But before you email me, consider posting the question on quercus
            discussion board as you will get a much faster response there.
        </p>
        <p className="tutorial-default-spacing">
            If you email me, use your utoronto email, any other email address will go directly to spam.
        </p>
        <p className="tutorial-default-spacing">
            Also, in the subject write "CSCC69" to increase my chances of responding.
        </p>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Feedback</u>
            </b>
        </p>
        <p className="mb-10">
            I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback{' '}
            <CustomLinkLocal link="/feedback" label="here" labelGtm="feedback" newTab={false} />
        </p>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Personal Notes</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/cscc69_notes.pdf"
                    label="Notes I made when I took the course PDF"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/cscc69_notes.docx"
                    label="Notes I made when I took the course docx"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 11: April 5, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Take up Assignment 3 questions</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 10: March 29, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Take up Assignment 3 questions</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 9: March 22, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Take up Assignment 3 questions</li>
            <li>Continue with last weeks tasks</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 8: March 15, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/ext2_filesystem_structure_w8.pdf"
                    label="Notes PDF"
                    labelGtm="w8_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/ext2_filesystem_structure_w8.md"
                    label="Notes Markdown"
                    labelGtm="w8_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 7: March 8, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Go over Assignment 1</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 6: March 1, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/cscc69w19/memory_w6.pdf" label="Notes PDF" labelGtm="w6_notes_pdf" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/cscc69w19/memory_w6.md" label="Notes Markdown" labelGtm="w6_notes_md" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 5: February 15, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/page_table_replacement_w5.pdf"
                    label="Notes PDF"
                    labelGtm="w5_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/page_table_replacement_w5.md"
                    label="Notes Markdown"
                    labelGtm="w5_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 4: February 8, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/cscc69w19/scheduling_w4.pdf" label="Notes PDF" labelGtm="w4_notes_pdf" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/cscc69w19/scheduling_w4.md" label="Notes Markdown" labelGtm="w4_notes_md" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 3: February 1, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/synchronization_primitives_w3.pdf"
                    label="Notes PDF"
                    labelGtm="w3_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/synchronization_primitives_w3.md"
                    label="Notes Markdown"
                    labelGtm="w3_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 2: January 25, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/kernel_programming_w2.pdf"
                    label="Notes PDF"
                    labelGtm="w2_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69w19/kernel_programming_w2.md"
                    label="Notes Markdown"
                    labelGtm="w2_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 1: January 18, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/cscc69w19/review_w1.pdf" label="Notes PDF" labelGtm="w1_notes_pdf" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/cscc69w19/review_w1.md" label="Notes Markdown" labelGtm="w1_notes_md" />
            </li>
        </ul>
    </div>
);

Cscc69w19.getLayout = (page: ReactElement) => (
    <AppLayout title="CSCC69w19" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Cscc69w19;
