import React, { FC } from 'react';
import { AppLayout } from '@Components/AppLayout';
import CustomLink from '@Components/CustomLink';

import { NextSeo } from 'next-seo';

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
        name="csca48s17"
        className={`link-primary ${className}`}
    />
);

const Csca48s17: FC & { getLayout: ReactNode } = () => (
    <div className="mx-auto w-10/12 md:w-9/12 lg:px-14 my-20">
        <p className="tutorial-header">Welcome to CSCA48</p>
        <p className="tutorial-default-spacing">
            <b>Tutorial 0006</b>: Monday, 2:00 PM - 3:00 PM, at MW 120.
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
            <b>Practical 002</b>: Monday, 6:00 PM - 7:00 PM, at BV 471.
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
            question on <CustomLinkLocal link="https://piazza.com/mail.utoronto.ca/summer2017/csca48" label="Piazza" />{' '}
            as you will get a much faster response there.
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
                <u>Week 12: July 31, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48s17/insertion_sort_w12.txt" label="Insertion Sort" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 11: July 24, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Recursion: <CustomLinkLocal link="/ta/csca48s17/binary_search_w11.txt" label="Binary Search example" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 10: July 17, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Recursion: <CustomLinkLocal link="/ta/csca48s17/same_string_w10.txt" label="Same string example" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 9: July 10, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Recursion: <CustomLinkLocal link="/ta/csca48s17/fib_w9.txt" label="Fibonacci example" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 8: June 26, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Heap: Traced through the{' '}
                <CustomLinkLocal link="/ta/csca48s17/heap_w8.txt" label="remove_max function" />
            </li>
            <li>
                A visualization of min heap can be found{' '}
                <CustomLinkLocal link="https://www.cs.usfca.edu/~galles/visualization/Heap.html" label="here" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 7: June 19, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48s17/deletion_bst_w7.txt" label="Deletion in Binary Search Tree" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 6: June 12, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                Linked List: Traced through{' '}
                <CustomLinkLocal
                    link="https://www.utsc.utoronto.ca/~bharrington/csca48/code/week5_linked_list.py"
                    label="'get_last' and 'retrieve' methods"
                />{' '}
                from the List class
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 5: June 5, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48s17/dll_w5.txt" label="Doubly Linked List" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 4: May 29, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48s17/deque_w4.txt" label="Deque ADT" />
            </li>
            <li className="mb-3">
                <CustomLinkLocal link="/ta/csca48s17/deque_dict_w4.txt" label="Deque Dict ADT" />
            </li>

            <li>
                <CustomLinkLocal link="/ta/csca48s17/is_palindrome_w4.txt" label="Use of Deque" />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/csca48s17/representation_invariant_maker_w4.txt"
                    label="How to make representation invariant"
                />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 3: May 15, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48s17/queue_w3.txt" label="Queue ADT" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca48s17/stack_w3.txt" label="Stack ADT" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca48s17/binary_w3.txt" label="Decimal to Binary" />
            </li>
        </ul>

        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 2: May 8, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48s17/memory_model_w2.txt" label="Memory Model" />
            </li>
            <li>
                <CustomLinkLocal link="http://pythontutor.com/" label="Python Tutor" /> is a good resource to use to
                visualize the memory model. Choose "render all objects", "use text labels for references", and Python
                3.3 to look a version of the memory model we are accustomed with.
            </li>
        </ul>
    </div>
);

Csca48s17.getLayout = (page: ReactElement) => (
    <>
        <NextSeo
            title="CSCA48s17"
            description="Material I taught in my tutorial for Introduction to Computer Science II (CSCA48) during Summer semester of 2017"
        />

        <AppLayout mainClassName="bg-secondary">{page}</AppLayout>
    </>
);

export default Csca48s17;
