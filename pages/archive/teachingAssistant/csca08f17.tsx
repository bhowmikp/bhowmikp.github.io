import React, { FC } from 'react';
import { AppLayout } from '@Components/AppLayout';
import CustomLink from '@Components/CustomLink';

import type { ReactNode, ReactElement } from 'react';

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
        name="csca08f17"
        className={`link-primary ${className}`}
    />
);

const Csca08f17: FC & { getLayout: ReactNode } = () => (
    <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 my-20">
        <p className="tutorial-header">Welcome to CSCA08</p>
        <p className="tutorial-default-spacing">
            <b>Tutorial 07</b>: Tuesday, 9:00 AM - 10:00 AM, at BV264.
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
            <b>Practical 004</b>: Tuesday, 12:00 Noon - 1:00 PM, at BV466.
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
            question on <CustomLinkLocal link="https://piazza.com/mail.utoronto.ca/fall2017/csca08" label="Piazza" /> as
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
                <u>Week 12: November 28, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Unit Testing</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 11: November 21, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>UML</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 10: November 14, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>UML</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 9: November 7, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f17/calendar_w9.txt" label="Object Oriented Programming" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 8: October 31, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f17/invert_dict_w8.txt" label="Invert Dictionary" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 7: October 24, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f17/mutability_tracing_w7.txt" label="Memory Model" />
            </li>
            <li>
                <CustomLinkLocal link="http://pythontutor.com" label="Python Tutor" />: change settings to Python 3.6,
                render all objects on the heap, use text labels for pointers
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 6: October 17, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Import:
                <CustomLinkLocal
                    link="/ta/csca08f17/import_a_w6.txt"
                    label="Example 1"
                    labelGtm="import example 1"
                    className="mx-2"
                />
                <CustomLinkLocal link="/ta/csca08f17/import_b_w6.txt" label="Example 2" labelGtm="import example 2" />
            </li>
            <li>Debugger</li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 5: October 3, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f17/selection_w5.txt" label="Good/Bad code" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 4: September 26, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca08f17/design_recipe_w4.txt" label="Design Recipe and Doctest" />
            </li>
            <li>
                <CustomLinkLocal link="http://pep8online.com/" label="PEP8" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 3: September 19, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Memory Model:
                <CustomLinkLocal
                    link="/ta/csca08f17/memory_model_w3_1.txt"
                    label="Example 1"
                    labelGtm="memory model example 1"
                    className="mx-2"
                />
                <CustomLinkLocal
                    link="/ta/csca08f17/memory_model_w3_2.txt"
                    label="Example 2"
                    labelGtm="memory model example 2"
                    className="mr-2"
                />
                <CustomLinkLocal
                    link="/ta/csca08f17/memory_model_w3_3.txt"
                    label="Example 3"
                    labelGtm="memory model example 3"
                />
            </li>
            <li>
                <CustomLinkLocal link="http://pythontutor.com/" label="Python Tutor" /> is a good resource to use to
                visualize the memory model. Choose "render all objects", "use text labels for references", and Python
                3.3 to look a version of the memory model we are accustomed with.
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 2: September 12, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>Difference between Python vs Wing</li>
            <li>Python version</li>
            <li className="mb-3">Difference between shell and writing file</li>
            <li>
                Code I wrote to determine if the version of python is acceptable:{' '}
                <CustomLinkLocal link="/ta/csca08f17/python_version_w2.txt" label="python-version" />
            </li>
        </ul>
    </div>
);

Csca08f17.getLayout = (page: ReactElement) => (
    <AppLayout title="CSCA08f17" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Csca08f17;
