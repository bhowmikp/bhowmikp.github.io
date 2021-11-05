import React, { FC } from 'react';
import Link from 'next/link';
import { event } from '@Service/googleService';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const GITHUB_URL = 'https://github.com/bhowmikp';
const LINKEDIN_URL = 'https://www.linkedin.com/in/prantar/';
const EMAIL = 'mailto:prantar.bhowmik@mail.utoronto.ca';

export const Footer: FC = () => (
    <div className="my-8 mx-9 w-100 md:mx-auto md:w-9/12 lg:w-7/12">
        <p className="footer-contact-me-text pb-8 md:pb-14">Contact Me</p>

        <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
                <Link href={EMAIL}>
                    <a
                        href={EMAIL}
                        onClick={() => {
                            event({
                                name: 'footer',
                                category: 'link',
                                label: 'email',
                                value: EMAIL
                            });
                        }}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="flex flex-row footer-element-spacing">
                            <MdEmail size={40} className="footer-icons" title="Email" />
                            <p className="footer-icon-text flex-grow">me@prantar.com</p>
                        </div>
                    </a>
                </Link>
            </div>

            <div className="flex-grow">
                <Link href={GITHUB_URL}>
                    <a
                        href={GITHUB_URL}
                        onClick={() => {
                            event({
                                name: 'footer',
                                category: 'link',
                                label: 'github',
                                value: GITHUB_URL
                            });
                        }}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="flex flex-row footer-element-spacing md:justify-center">
                            <AiFillGithub size={40} className="footer-icons" title="Github" />
                            <p className="footer-icon-text">Github</p>
                        </div>
                    </a>
                </Link>
            </div>

            <div className="flex-grow">
                <Link href={LINKEDIN_URL}>
                    <a
                        href={LINKEDIN_URL}
                        onClick={() => {
                            event({
                                name: 'footer',
                                category: 'link',
                                label: 'linkedin',
                                value: LINKEDIN_URL
                            });
                        }}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="flex flex-row footer-element-spacing md:justify-end">
                            <AiFillLinkedin size={40} className="footer-icons" title="Linkedin" />
                            <p className="footer-icon-text">Linkedin</p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

export default Footer;
