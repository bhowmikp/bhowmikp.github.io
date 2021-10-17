import React, { FC } from 'react';
import Link from 'next/link';
import { event } from '@Service/googleService';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const GITHUB_URL = 'https://github.com/bhowmikp';
const LINKEDIN_URL = 'https://www.linkedin.com/in/prantar/';
const EMAIL = 'mailto:prantar.bhowmik@mail.utoronto.ca';

const Footer: FC = () => (
    <div className="w-3/4 h-80 bg-primary mx-auto">
        <p className="footer-contact-me-text pt-10 pb-8 md:pt-20 md:pb-16">Contact Me</p>

        <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
                <div className="flex flex-row footer-icon-spacing" style={{ marginLeft: '0px' }}>
                    <Link href={EMAIL}>
                        <>
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
                                <MdEmail size={40} className="footer-icons" title="Email" />
                            </a>
                            <p className="footer-icon-text">me@prantar.com</p>
                        </>
                    </Link>
                </div>
            </div>

            <div className="flex-grow">
                <div className="flex flex-row footer-icon-spacing">
                    <Link href={GITHUB_URL}>
                        <>
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
                                <AiFillGithub size={40} className="footer-icons" title="Github" />
                            </a>
                            <p className="footer-icon-text">Github</p>
                        </>
                    </Link>
                </div>
            </div>

            <div className="flex-grow">
                <div className="flex flex-row footer-icon-spacing" style={{ marginRight: '0px' }}>
                    <Link href={LINKEDIN_URL}>
                        <>
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
                                <AiFillLinkedin size={40} className="footer-icons" title="Linkedin" />
                            </a>
                            <p className="footer-icon-text">Linkedin</p>
                        </>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
