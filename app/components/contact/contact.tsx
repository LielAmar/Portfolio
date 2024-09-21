'use client';

import Link from 'next/link';
import Separator from '../common/separator';
import Image from 'next/image';
import LinkedInIcon from '@/app/icons/linkedin';
import GitHubIcon from '@/app/icons/github';
import NPMIcon from '@/app/icons/npm';
import XIcon from '@/app/icons/x';

const Contact = () => {
    return (
        <>
            <Separator />

            <div className="w-full h-full flex flex-col items-center gap-5 mb-20">
                <h1 className="text-4xl font-normal text-text-primary-light">
                    Contact Me
                </h1>

                <div className="flex flex-row items-center gap-1">
                    <p className="text-text-primary-light text-lg font-light">
                        The best way to contact me is directly via email at
                    </p>
                    <span className="text-text-primary-light text-lg font-semibold">
                        liel@lielamar.com
                    </span>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <p className="text-text-primary-light text-lg font-light">
                        You can also find me on
                    </p>

                    <div className="flex flex-row items-center gap-5">
                        <Link
                            href="https://www.linkedin.com/in/liel-amar/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className='w-8 h-8 text-white'>
                                <LinkedInIcon />
                            </div>
                        </Link>

                        <Link
                            href="https://www.github.com/lielamar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className='w-8 h-8 text-white'>
                                <GitHubIcon />
                            </div>
                        </Link>

                        <Link
                            href="https://www.npmjs.com/~lielamar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className='w-8 h-8 text-white'>
                                <NPMIcon />
                            </div>
                        </Link>

                        <Link
                            href="https://www.npmjs.com/~lielamar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className='w-6 h-6 text-white'>
                                <XIcon />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
