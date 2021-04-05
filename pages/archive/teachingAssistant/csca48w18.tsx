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
}> = ({ link, label, labelGtm, newTab = true, className = '' }) => (
    <CustomLink
        link={link}
        label={label}
        labelGtm={labelGtm}
        newTab={newTab}
        name="csca48w18"
        className={`link-primary ${className}`}
    />
);

const Csca48w18: FC = () => (
    <AppLayout title="CSCA48w18">
        <div className="mx-5 mb-10">
            <p className="tutorial-header">Welcome to CSCA48</p>
            <p className="tutorial-default-spacing">
                <b>Tutorial 0011</b>: Thursday, 10:00 AM - 11:00 AM, at IC 120.
            </p>
            <p className="tutorial-default-spacing">
                <b>TA name</b>: Prantar Bhowmik
            </p>
            <p className="tutorial-default-spacing">
                I will update this website on a weekly basis. All code written in class will be made available here.
            </p>
            <p className="mb-10">There may or may not be quiz held in the tutorial so please be on time.</p>

            <p className="tutorial-default-spacing">You can attend any practical held by any CSCA48 TA. I'll be at: </p>
            <p className="tutorial-default-spacing">
                <b>Practical 005</b>: Wednesday, 5:00 PM - 6:00 PM, at BV 471.
            </p>
            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Email Policy</u>
                </b>
            </p>
            <p className="tutorial-default-spacing">
                My email address is{' '}
                <CustomLinkLocal
                    link="mailto:prantar.bhowmik@mail.utoronto.ca"
                    label="prantar.bhowmik@mail.utoronto.ca"
                />
                . I will be checking my email every night. But before you email me, consider attending a practical or
                post the question on{' '}
                <CustomLinkLocal link="https://piazza.com/mail.utoronto.ca/winter2018/csca48" label="Piazza" /> as you
                will get a much faster response there.
            </p>
            <p className="tutorial-default-spacing">
                If you email me, use your utoronto email, any other email address will go directly to spam.
            </p>
            <p className="tutorial-default-spacing">
                Also, in the subject write "CSCA48" to increase my chances of responding.
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
                    <u>Week 12: April 5, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Sorting Algorithms and Time Complexity</li>
                <ul className="tutorial-default-spacing tutorial-list-style">
                    <li>Bubble Sort</li>
                    <li>Selection Sort</li>
                    <li>Insertion Sort</li>
                    <li>Quick Sort</li>
                    <li>Merge Sort</li>
                    <li>Heap Sort</li>
                </ul>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 11: March 29, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Recursion and Time Complexity</li>
                <ul className="tutorial-default-spacing tutorial-list-style">
                    <li>
                        <CustomLinkLocal link="/ta/csca48w18/same_string_w11.txt" label="Same string" />
                    </li>
                </ul>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 10: March 22, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Big O</li>
                <ul className="tutorial-default-spacing tutorial-list-style">
                    <li>
                        <CustomLinkLocal link="http://bigocheatsheet.com/" label="Big O cheatsheet" />
                    </li>
                </ul>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 9: March 15, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>More recursion</li>
                <ul className="tutorial-default-spacing tutorial-list-style">
                    <li>
                        <CustomLinkLocal link="/ta/csca48w18/htree_w9.txt" label="HTree" />
                    </li>
                    <li>
                        <CustomLinkLocal link="/ta/csca48w18/graphics_w9.txt" label="Graphics.py" />
                    </li>
                </ul>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 8: March 8, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Recursion</li>
                <ul className="tutorial-default-spacing tutorial-list-style">
                    <li>
                        <CustomLinkLocal link="/ta/csca48w18/vowel_count_w8.txt" label="Vowel Count" />
                    </li>
                </ul>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 7: March 1, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    Heap:
                    <CustomLinkLocal
                        link="/ta/csca48w18/heap_w7.txt"
                        label="Example 1"
                        labelGtm="heap example 1"
                        className="mx-2"
                    />
                    <CustomLinkLocal
                        link="/ta/csca48w18/more_heap_w7.txt"
                        label="Example 2"
                        labelGtm="heap example 2"
                    />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 6: February 15, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Binary Trees</li>
                <ul className="tutorial-default-spacing tutorial-list-style">
                    <li>
                        Difference between TNode(points to child only) and BTNode(points to child and child points back
                        to parent)
                    </li>
                    <li>Traversals: Pre-order(VLR), In-order(LVR), Post-order(LVR)</li>
                    <li>How to delete node from BST</li>
                </ul>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 5: February 8, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/csca48w18/DLL_Node_List_w5.txt" label="DLL Node and List" />
                </li>
                <li>
                    <CustomLinkLocal link="/ta/csca48w18/index_dll_w5.txt" label="DLL insert and remove methods" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 4: February 1, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/csca48w18/dequeue_w4.txt" label="Dequeue ADT" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 3: January 25, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    How to make{' '}
                    <CustomLinkLocal
                        link="/ta/csca48w18/representation_invariant_maker_w3.txt"
                        label="representation invariant"
                    />
                </li>

                <li>
                    <CustomLinkLocal link="/ta/csca48w18/stack_w3.txt" label="Stack ADT" />
                </li>
                <li>
                    <CustomLinkLocal link="/ta/csca48w18/decimal_to_binary_w3.txt" label="Decimal to Binary" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 2: January 18, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/csca48w18/vector_w2.txt" label="Vector ADT" />
                </li>
            </ul>
        </div>
    </AppLayout>
);

export default Csca48w18;
