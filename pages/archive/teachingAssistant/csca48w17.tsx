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
        name="csca48w17"
        className={`link-primary ${className}`}
    />
);

const Csca48w17: FC & { getLayout: ReactNode } = () => (
    <div className="mx-5 mb-10">
        <p className="tutorial-header">Welcome to CSCA48</p>
        <p className="tutorial-default-spacing">
            <b>Tutorial 0002</b>: Monday, 10:00 AM - 11:00 AM, at IC 208.
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
            <b>Practical 004</b>: Wednesday, 4:00 PM - 5:00 PM, at BV 471.
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
            question on <CustomLinkLocal link="https://piazza.com/mail.utoronto.ca/winter2017/csca48" label="Piazza" />{' '}
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
                <u>Week 11: March 20, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/insertion_sort_w11.txt" label="Insertion Sort" />
            </li>
            <li>Worst case runtime for Insertion Sort: O(n)^2</li>
            <li className="mb-3">Best case runtime for Insertion Sort: O(n)</li>
            <li>
                <CustomLinkLocal
                    link="https://www.utsc.utoronto.ca/~csec/slides/W6_Complexity.pdf"
                    label="More detail on complexity"
                />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 10: March 13, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/tree_algo_w10.txt" label="Tree Algo" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 9: March 5, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/binary_search_w9.txt" label="Binary Search" />
            </li>
            <li>Worst case runtime for Binary search: O(logn)</li>
            <li className="mb-3">Best case runtime for Binary search: O(1)</li>
            <li>Worst case runtime for Binary search: O(n)</li>
            <li>Best case runtime for Binary search: O(1)</li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 8: February 27, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/same_string_w8.txt" label="Same String" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 7: February 13, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li className="mb-3">
                <CustomLinkLocal link="/ta/csca48w17/fib_w7.txt" label="Fibonacci Sequence" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca48w17/visualize_fib_w7.txt" label="Visualize Fib" />
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
                <u>Week 6: February 6, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/assets/csca48w17/bst_w6.txt" label="Binary Search Trees" />
            </li>
            <li className="mb-3">
                A visualization of BST can be found{' '}
                <CustomLinkLocal
                    link="https://www.cs.usfca.edu/~galles/visualization/BST.html"
                    label="here"
                    labelGtm="BST visualization"
                />
                . The only problem with this is that if two nodes are equal it picks the left child instead of the
                right. But otherwise I think it does a pretty good job.
            </li>
            <li>
                <CustomLinkLocal link="/assets/csca48w17/heap_w6.txt" label="Heaps" />
            </li>
            <li>
                A visualization of min heap can be found{' '}
                <CustomLinkLocal
                    link="https://www.cs.usfca.edu/~galles/visualization/Heap.html"
                    label="here"
                    labelGtm="Heap visualization"
                />
                .
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 5: January 30, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/trees_w5.txt" label="Binary Search Trees" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 4: January 23, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/dll_w4.txt" label="Doubly Linked List" />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 3: January 16, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/ta/csca48w17/deque_w3.txt" label="Deque ADT" />
            </li>
            <li className="mb-3">
                <CustomLinkLocal link="/ta/csca48w17/deque_dict_w3.txt" label="Deque Dict ADT" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca48w17/is_palindrome_w3.txt" label="Use of Deque" />
            </li>
            <li>
                <CustomLinkLocal
                    link="/ta/csca48w17/representation_invariant_maker_w3.txt"
                    label="How to make representation invariant"
                />
            </li>
        </ul>
        <hr className="tutorial-default-spacing tutorial-hr-style" />
        <p className="tutorial-default-spacing">
            <b>
                <u>Week 2: January 9, 2017</u>
            </b>
        </p>
        <ul className="tutorial-default-spacing tutorial-list-style">
            <li>
                <CustomLinkLocal link="/assets/csca48w17/queue_w2.txt" label="Queue ADT" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca48w17/stack_w2.txt" label="Stack ADT" />
            </li>
            <li>
                <CustomLinkLocal link="/ta/csca48w17/binary_w2.txt" label="Decimal to Binary" />
            </li>
        </ul>
    </div>
);

Csca48w17.getLayout = (page: ReactElement) => (
    <AppLayout title="CSCA48w17" mainClassName="bg-secondary">
        {page}
    </AppLayout>
);

export default Csca48w17;
