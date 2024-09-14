'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from './particles';

import GitHubIcon from '@/app/icons/github';
import LinkedInIcon from '@/app/icons/linkedin';
import SpigotIcon from '@/app/icons/spigot';
import AboutLink from './about_link';

const aboutHeight = 'h-[45rem] sm:h-[41rem] md:h-[30rem]';

const iAmA = [
    'M.Sc. in CS Student',
    3000,
    'ML Developer',
    2000,
    'Python Developer',
    2000,
    'Java Developer',
    2000,
    'Fullstack Developer',
    2000,
    'C/C++ Developer',
    2000,
    'Mobile Developer',
    2000,
    'AI Enthusiast',
    2000,
    'Video Editor',
    2000,
];

const About = ({ id }: { id: string }) => {
    return (
        <>
            <div className={`w-full ${aboutHeight} absolute z-0`}>
                <ParticlesComponent />
            </div>

            <div
                id={id}
                className={`w-full ${aboutHeight} flex flex-col items-center gap-10 z-10 pt-[8rem]`}
            >
                <div className="w-fit h-fit flex flex-col md:flex-row items-center align-center justify-center gap-10">
                    <Image
                        priority={true}
                        src="/images/me.jpg"
                        alt="Liel Amar"
                        width={250}
                        height={250}
                        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full aspect-square shadow-md animate-float"
                    />

                    <div className="w-fit h-fit flex flex-col items-left text-left gap-10">
                        <h1 className="w-max text-3xl md:text-4xl font-light">
                            Hey, I am{' '}
                            <span className="font-bold">Liel Amar</span>!
                        </h1>
                        <h2 className="w-max text-xl md:text-2xl font-light">
                            I am a{' '}
                            <span className="font-bold">
                                <TypeAnimation
                                    sequence={iAmA}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </span>
                            <br />
                            with over 6 years of experience.
                        </h2>
                    </div>
                </div>

                <div className="w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-5">
                    <AboutLink
                        name="GitHub"
                        url="https://github.com/LielAmar"
                        background="bg-githubBackground"
                        text="text-githubText"
                        icon={<GitHubIcon />}
                    />

                    <AboutLink
                        name="LinkedIn"
                        url="https://linkedin.com/in/liel-amar/"
                        background="bg-linkedinBackground"
                        text="text-linkedinText"
                        icon={<LinkedInIcon />}
                    />

                    <AboutLink
                        name="Spigot"
                        url="https://spigotmc.org/members/lielamar.446937/"
                        background="bg-spigotBackground"
                        text="text-spigotText"
                        icon={<SpigotIcon />}
                    />
                </div>
            </div>
        </>
    );
};

export default About;
