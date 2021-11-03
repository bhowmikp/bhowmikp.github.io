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
}> = ({ link, label, labelGtm, newTab = true, className = '' }) => (
    <CustomLink
        link={link}
        label={label}
        labelGtm={labelGtm}
        newTab={newTab}
        name="cscc69s19"
        className={`link-primary ${className}`}
    />
);

const Cscc69s19: FC & { getLayout: ReactNode } = () => (
    <div className="mx-5 mb-10">
        <p className="tutorial-header">Welcome to CSCC69</p>
        <p className="tutorial-default-spacing">
            <b>Tutorial 0002</b>: Thursday, 07:00 PM - 08:00 PM, at HW 408.
        </p>
        <p className="tutorial-default-spacing">
            <b>Office hours</b>: Wednesday, 12:00 PM - 01:00 PM, at IC 400A.
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
        <p className="mb-10">Also, in the subject write "CSCC69" to increase my chances of responding.</p>

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
                <u>Week 11: August 1, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Take up Assignment 3 questions</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 10: July 25, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Take up Assignment 3 questions</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 9: July 18, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Take up Assignment 3 questions</li>
            <li>Continue with last weeks tasks</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 8: July 11, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/ext2_filesystem_structure_w8.pdf"
                    label="Notes PDF"
                    labelGtm="w8_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/ext2_filesystem_structure_w8.md"
                    label="Notes Markdown"
                    labelGtm="w8_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 7: July 4, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Go over Assignment 1</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 6: June 27, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/cscc69s19/memory_w6.pdf" label="Notes PDF" labelGtm="w6_notes_pdf" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/cscc69s19/memory_w6.md" label="Notes Markdown" labelGtm="w6_notes_md" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 5: June 13, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/page_table_replacement_w5.pdf"
                    label="Notes PDF"
                    labelGtm="w5_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/page_table_replacement_w5.md"
                    label="Notes Markdown"
                    labelGtm="w5_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 4: June 6, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/cscc69s19/scheduling_w4.pdf" label="Notes PDF" labelGtm="w4_notes_pdf" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/cscc69s19/scheduling_w4.md" label="Notes Markdown" labelGtm="w4_notes_md" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 3: May 30, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/synchronization_primitives_w3.pdf"
                    label="Notes PDF"
                    labelGtm="w3_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/synchronization_primitives_w3.md"
                    label="Notes Markdown"
                    labelGtm="w3_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 2: May 23, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/kernel_programming_w2.pdf"
                    label="Notes PDF"
                    labelGtm="w2_notes_pdf"
                />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/cscc69s19/kernel_programming_w2.md"
                    label="Notes Markdown"
                    labelGtm="w2_notes_md"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 1: May 16, 2019</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/cscc69s19/review_w1.pdf" label="Notes PDF" labelGtm="w1_notes_pdf" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/cscc69s19/review_w1.md" label="Notes Markdown" labelGtm="w1_notes_md" />
            </li>
        </ul>
    </div>
);

Cscc69s19.getLayout = (page: ReactElement) => (
    <AppLayout title="CSCC69s19" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Cscc69s19;
