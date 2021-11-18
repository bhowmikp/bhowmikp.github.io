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
        name="csca08f16"
        className={`link-primary ${className}`}
    />
);

const Csca08f16: FC & { getLayout: ReactNode } = () => (
    <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 my-20">
        <p className="tutorial-header">Welcome to CSCA08</p>
        <p className="tutorial-default-spacing">
            <b>Tutorial 30</b>: Wednesday, 10:00 AM - 11:00 AM, at IC326.
        </p>
        <p className="tutorial-default-spacing">
            <b>TA name</b>: Prantar Bhowmik
        </p>
        <p className="tutorial-default-spacing">
            I will update this website on a weekly basis. All code written in class will be made available here.
        </p>
        <p className="mb-10">There may or may not be quiz held in the tutorial so please be on time.</p>
        <p className="tutorial-default-spacing">You can attend any practical held by any CSCA08 TA. I'll be at: </p>
        <p className="tutorial-default-spacing">
            <b>Practical 002</b>: Monday, 4:00 PM - 5:00 PM, at BV471.
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
            I will be checking my email every night. But before you email me, consider attending a practical or post the
            question on <CustomLinkLocal link="https://piazza.com/mail.utoronto.ca/fall2016/csca08" label="Piazza" /> as
            you will get a much faster response there.
        </p>
        <p className="tutorial-default-spacing">
            If you email me, use your utoronto email, any other email address will go directly to spam.
        </p>
        <p className="tutorial-default-spacing">
            Also, in the subject write "CSCA08" to increase my chances of responding.
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
                <u>Week 12: November 30, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Discussed importance of unit testing</li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 11: November 23, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Discussed UML diagrams</li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 10: November 16, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f16/inheritance_w10.txt" label="Inheritance" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 9: November 9, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li className="mb-3">
                <CustomLinkLocal link="/ta/csca08f16/class_w9.txt" label="Class" />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/csca08f16/description_w9.txt"
                    label="Template on how to write descriptions in docstring"
                />
            </li>
            <li>
                <b>
                    Remember to write rest of the docstring. You don't have to follow the template exactly, treat it
                    more like a guideline
                </b>
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 8: November 2, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f16/dict_w8.txt" label="Dictionary" />
            </li>
            <li>
                My code to explain what dictionaries are. This is bad code. Only wrote{' '}
                <CustomLinkLocal link="/ta/csca08f16/my_code_dict_w8.txt" label="this" labelGtm="dictionary demo" /> for
                demo purposes
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 7: October 26, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f16/memory_model_w7.txt" label="Memory Model" />
            </li>
            <li>
                <CustomLinkLocal link="https://pythontutor.com/" label="Python Tutor" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 6: October 19, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li className="mb-3">
                <CustomLinkLocal link="/ta/csca08f16/good_code_w6.txt" label="Good/Bad Code" />
            </li>
            <li>Return Midterm</li>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>IF there are any issues, write it in the front page of the exam and return back to TA</li>
                <li>IF test leaves room with you, mark is set</li>
            </ul>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 5: October 5, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>IMPORTANT CONCEPTS FOR MIDTERM</li>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    Memory Model -- <CustomLinkLocal link="https://pythontutor.com/" label="Python Tutor" />
                </li>
                <li>Functions</li>
                <li>Design Recipe</li>
                <li>Boolean Logic</li>
            </ul>
            <li>
                Import:
                <CustomLinkLocal
                    link="/ta/csca08f16/import_a_w5.txt"
                    label="Example 1"
                    labelGtm="import example 1"
                    className="mx-2"
                />
                <CustomLinkLocal link="/ta/csca08f16/import_b_w5.txt" label="Example 2" labelGtm="import example 2" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca08f16/debug_w5.txt" label="Debugger" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 4: September 28, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f16/documenting_w4.txt" label="Documenting" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca08f16/doctest_w4.txt" label="Doctest" />
            </li>
            <li>
                <CustomLinkLocal link="http://pep8online.com/" label="PEP8" />
            </li>
            <li>
                Code written in class for documenting{' '}
                <CustomLinkLocal link="/ta/csca08f16/documenting_w4_1.txt" label="demo" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 3: September 21, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Memory Model:
                <CustomLinkLocal
                    link="/ta/csca08f16/memory_model_w3_1.txt"
                    label="Example 1"
                    labelGtm="memory model example 1"
                    className="mx-2"
                />
                <CustomLinkLocal
                    link="/ta/csca08f16/memory_model_w3_2.txt"
                    label="Example 2"
                    labelGtm="memory model example 2"
                    className="mr-2"
                />
                <CustomLinkLocal
                    link="/ta/csca08f16/memory_model_w3_3.txt"
                    label="Example 3"
                    labelGtm="memory model example 3"
                />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 2: September 14, 2016</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Difference between Python vs Wing</li>
            <li>Python version</li>
            <li>Difference between shell and writing file</li>
            <li>
                Code I wrote to determine if the version of python is acceptable:{' '}
                <CustomLinkLocal link="/ta/csca08f16/python_version_w2.txt" label="python-version" />
            </li>
        </ul>
    </div>
);

Csca08f16.getLayout = (page: ReactElement) => (
    <AppLayout title="CSCA08f16" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Csca08f16;
