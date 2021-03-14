import React, { FC } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { event } from '@Service/googleService';

const GITHUB_URL = 'https://github.com/bhowmikp';
const LINKEDIN_URL = 'https://www.linkedin.com/in/prantar/';
const EMAIL = 'mailto:prantar.bhowmik@mail.utoronto.ca';

const Footer: FC = () => (
    <div className="my-5">
        <hr />
        <div className="flex flex-row justify-center mt-10 mb-5">
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
                    <AiFillGithub size={40} className="react-icons-color-primary" title="Github" />
                </a>
            </Link>

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
                    <AiFillLinkedin
                        size={40}
                        className="react-icons-color-primary mx-12 sm:mx-32 lg:mx-72"
                        title="Linkedin"
                    />
                </a>
            </Link>

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
                    <AiOutlineMail size={40} className="react-icons-color-primary" title="Email" />
                </a>
            </Link>
        </div>
        <p className="text-center">Made with {'< />'} by Prantar</p>
    </div>
);

export default Footer;
