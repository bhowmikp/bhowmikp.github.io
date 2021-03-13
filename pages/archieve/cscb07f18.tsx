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
        name="cscb07f18"
        className={`link-primary ${className}`}
    />
);

const Cscb07f18: FC = () => (
    <AppLayout title="CSCB07f18">
        <div className="mx-5 mb-10">
            <p className="tutorial-header">Welcome to CSCB07</p>
            <p className="tutorial-default-spacing">
                <b>Tutorial 3003</b>: Wednesday, 01:00 PM - 02:00 PM, at BV 473.
            </p>
            <p className="tutorial-default-spacing">
                <b>Tutorial 3004</b>: Wednesday, 02:00 PM - 03:00 PM, at BV 473.
            </p>
            <p className="tutorial-default-spacing">
                <b>Tutorial 3007</b>: Friday, 12:00 PM - 01:00 PM, at BV 473.
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
                <CustomLinkLocal
                    link="mailto:prantar.bhowmik@mail.utoronto.ca"
                    label="prantar.bhowmik@mail.utoronto.ca"
                />
                . I will be checking my email every night. But before you email me, consider posting the question on{' '}
                <CustomLinkLocal link="https://piazza.com/class/jm6lrtgpx2510" label="Piazza" /> as you will get a much
                faster response there.
            </p>
            <p className="tutorial-default-spacing">
                If you email me, use your utoronto email, any other email address will go directly to spam.
            </p>
            <p className="tutorial-default-spacing">
                Also, in the subject write "CSCB07" to increase my chances of responding.
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
                    <u>Week 12: November 26, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w12.txt" label="Notes" labelGtm="w12_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 11: November 19, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w11.txt" label="Notes" labelGtm="w11_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 10: November 12, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w10.txt" label="Notes" labelGtm="w10_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 9: November 5, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w9.txt" label="Notes" labelGtm="w9_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 8: October 29, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w8.txt" label="Notes" labelGtm="w8_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 7: October 22, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w7.txt" label="Notes" labelGtm="w7_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 6: October 15, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w6.txt" label="Notes" labelGtm="w6_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 5: October 1, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w5.txt" label="Notes" labelGtm="w5_notes" />
                </li>

                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/laptop_uml_w5.png" label="UML" labelGtm="w5_uml" />
                </li>
                <li>
                    <CustomLinkLocal
                        link="/ta/cscb07f18/laptop_crc_cards_w5.txt"
                        label="CRC Cards"
                        labelGtm="w5_crc_cards"
                    />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 4: September 24, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w4.txt" label="Notes" labelGtm="w4_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 3: September 17, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w3.txt" label="Notes" labelGtm="w3_notes" />
                </li>
            </ul>

            <hr className="tutorial-default-spacing tutorial-hr-style" />
            <p className="tutorial-default-spacing">
                <b>
                    <u>Week 2: September 10, 2018</u>
                </b>
            </p>
            <ul className="tutorial-default-spacing tutorial-list-style">
                <li>
                    <CustomLinkLocal link="/ta/cscb07f18/notes_w2.txt" label="Notes" labelGtm="w2_notes" />
                </li>
                <li>
                    <CustomLinkLocal
                        link="/ta/cscb07f18/unix_commands_w2.txt"
                        label="Unix Commands"
                        labelGtm="w2_unix_commands"
                    />
                </li>
                <li>
                    <CustomLinkLocal
                        link="/ta/cscb07f18/subversion_commands_w2.txt"
                        label="Subversion Commands"
                        labelGtm="w2_svn"
                    />
                </li>
            </ul>
        </div>
    </AppLayout>
);

export default Cscb07f18;
