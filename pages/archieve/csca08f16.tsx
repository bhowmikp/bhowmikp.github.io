import React, { FC } from 'react';
import AppLayout from '@Components/AppLayout';
import Link from 'next/link';
import { event } from '@Service/googleService';

export const config = { amp: 'hybrid' };

const Csca08f16: FC = () => (
    <AppLayout title="Archieve">
        <div className="mx-5">
            <h1 className="tutorial-header">Welcome to CSCA08</h1>
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
            <hr className="tutorial-default-spacing" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Email Policy</u>
                </b>
            </p>
            <p className="tutorial-default-spacing">
                My email address is <u>prantar.bhowmik@mail.utoronto.ca</u>. I will be checking my email every night.
                But before you email me, consider attending a practical or post the question on{' '}
                <a href="https://piazza.com/mail.utoronto.ca/fall2016/csca08">Piazza</a> as you will get a much faster
                response there.
            </p>
            <p className="tutorial-default-spacing">
                If you email me, use your utoronto email, any other email address will go directly to spam.
            </p>
            <p className="tutorial-default-spacing">
                Also, in the subject write "CSCA08" to increase my chances of responding.
            </p>
            <hr className="tutorial-default-spacing" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Feedback</u>
                </b>
            </p>
            <p className="tutorial-default-spacing">
                I always like to know how you feel about my teaching style. Feel free to leave anonymous feedback{' '}
                <a href="https://prantar.me/feedback">here</a>
            </p>

            <hr className="tutorial-default-spacing" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 12: November 30, 2016</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Discussed importance of unit testing</li>
            </ul>

            <hr className="tutorial-default-spacing" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 11: November 23, 2016</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>Discussed UML diagrams</li>
            </ul>

            <hr className="tutorial-default-spacing" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 10: November 16, 2016</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <Link href="/csca08f16/inheritance_w10.txt">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                event({
                                    name: 'csca08f16',
                                    category: 'link',
                                    label: 'inheritance',
                                    value: 'csca08f16/inheritance_w10.txt'
                                });
                            }}
                            aria-hidden="true"
                            className="tutorial-link"
                        >
                            Inheritance
                        </a>
                    </Link>
                </li>
            </ul>

            <hr className="tutorial-default-spacing" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 9: November 9, 2016</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing">
                <li className="mb-3 tutorial-list-style">
                    <Link href="/csca08f16/class_w9.txt">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                event({
                                    name: 'csca08f16',
                                    category: 'link',
                                    label: 'class',
                                    value: 'csca08f16/class_w9.txt'
                                });
                            }}
                            aria-hidden="true"
                            className="tutorial-link"
                        >
                            Class
                        </a>
                    </Link>
                </li>
                <li className="tutorial-list-style">
                    <Link href="/csca08f16/description_w9.txt">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                event({
                                    name: 'csca08f16',
                                    category: 'link',
                                    label: 'docstring',
                                    value: 'csca08f16/description_w9.txt'
                                });
                            }}
                            aria-hidden="true"
                            className="tutorial-link"
                        >
                            Template on how to write descriptions in docstring
                        </a>
                    </Link>
                </li>
                <li className="tutorial-default-spacing tutorial-list-style">
                    <b>
                        Remember to write rest of the docstring. You don't have to follow the template exactly, treat it
                        more like a guideline
                    </b>
                </li>
            </ul>

            <hr className="tutorial-default-spacing" />
            <p>
                <b>
                    <u>Week 8: November 2, 2016</u>
                </b>
            </p>
            <ul>
                <li>
                    Dictionary:{' '}
                    <a href="/assets/csca08f16/dict_w8.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
                <li>
                    My code to explain what dictionaries are. This is bad code. Only wrote this for demo purposes:{' '}
                    <a href="/assets/csca08f16/my_code_dict_w8.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
            </ul>

            <hr />
            <p>
                <b>
                    <u>Week 7: October 26, 2016</u>
                </b>
            </p>
            <ul>
                <li>
                    Memory Model:{' '}
                    <a href="/assets/csca08f16/memory_model_w7.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
                <li>
                    <a href="http://pythontutor.com/">Python Tutor</a>
                </li>
            </ul>

            <hr />
            <p>
                <b>
                    <u>Week 6: October 19, 2016</u>
                </b>
            </p>
            <ul>
                <li>
                    Good/Bad Code{' '}
                    <a href="/assets/csca08f16/good_code_w6.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
                <li>Return Midterm</li>
                <ul>
                    <li>IF there are any issues, write it in the front page of the exam and return back to TA</li>
                    <li>IF test leaves room with you, mark is set</li>
                </ul>
            </ul>

            <hr />
            <p>
                <b>
                    <u>Week 5: October 5, 2016</u>
                </b>
            </p>
            <ul>
                <li>IMPORTANT CONCEPTS FOR MIDTERM</li>
                <ul>
                    <li>
                        Memory Model -- <a href="http://pythontutor.com/">Python Tutor</a>
                    </li>
                    <li>Functions</li>
                    <li>Design Recipe</li>
                    <li>Boolean Logic</li>
                </ul>
                <li>
                    Import:{' '}
                    <a href="/assets/csca08f16/import_a_w5.txt" target="_blank" rel="noopener">
                        1
                    </a>{' '}
                    <a href="/assets/csca08f16/import_b_w5.txt" target="_blank" rel="noopener">
                        2
                    </a>
                </li>
                <li>
                    Debugger:{' '}
                    <a href="/assets/csca08f16/debug_w5.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
            </ul>

            <hr />
            <p>
                <b>
                    <u>Week 4: September 28, 2016</u>
                </b>
            </p>
            <ul>
                <li>
                    Documenting:{' '}
                    <a href="/assets/csca08f16/documenting_w4.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
                <li>
                    Doctest:{' '}
                    <a href="/assets/csca08f16/doctest_w4.txt" target="_blank" rel="noopener">
                        1
                    </a>
                </li>
                <li>
                    <a href="http://pep8online.com/" target="_blank" rel="noopener">
                        PEP8
                    </a>
                </li>
                <li>
                    Code written in class for documenting demo:{' '}
                    <a href="/assets/csca08f16/documenting_w4_1.txt" target="_blank" rel="noopener">
                        Code
                    </a>
                </li>
            </ul>

            <hr />
            <p>
                <b>
                    <u>Week 3: September 21, 2016</u>
                </b>
            </p>
            <ul>
                <li>
                    Memory Model:{' '}
                    <a href="/assets/csca08f16/memory_model_w3_1.txt" target="_blank" rel="noopener">
                        1
                    </a>
                    ,{' '}
                    <a href="/assets/csca08f16/memory_model_w3_2.txt" target="_blank" rel="noopener">
                        2
                    </a>
                    ,{' '}
                    <a href="/assets/csca08f16/memory_model_w3_3.txt" target="_blank" rel="noopener">
                        3
                    </a>
                </li>
            </ul>

            <hr />
            <p>
                <b>
                    <u>Week 2: September 14, 2016</u>
                </b>
            </p>
            <ul>
                <li>Difference between Python vs Wing</li>
                <li>Python version</li>
                <li>Difference between shell and writing file</li>
            </ul>
            <p>
                Code I worte to determine if the version of python is acceptable:{' '}
                <a href="/csca08f16/python_version_w2.txt" target="_blank" rel="noopener">
                    python-version
                </a>
            </p>
        </div>
    </AppLayout>
);

export default Csca08f16;
