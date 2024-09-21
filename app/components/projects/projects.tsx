'use client';

import { projectsItems } from '@/app/content';
import Separator from '../common/separator';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUpWithDelayAnimation } from '@/app/animations/fade_up';
import Link from 'next/link';

export type ProjectItem = {
    title: string;
    role: string;
    description: string;
    image: string;
    link: string;
};

const Projects = () => {
    return (
        <>
            <Separator />

            <div className="w-full h-full flex flex-col items-center gap-10">
                <h1 className="text-4xl font-normal text-text-primary-light">
                    My Projects
                </h1>

                <ul className="w-3/4 2xl:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
                    {projectsItems.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <motion.li
                                className="h-full w-full px-12 py-5 flex flex-col items-center gap-1 bg-transparent border-element-primary border-[2px] border-opacity-semi rounded-2xl"
                                variants={fadeUpWithDelayAnimation}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ scale: 1.02 }}
                                custom={index}
                                viewport={{ once: true }}
                            >
                                <div className="flex flex-col gap-6 items-center text-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                        className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]"
                                    />

                                    <div className="flex flex-col gap-6 text-center">
                                        <div className="flex flex-col">
                                            <h1 className="text-text-primary-light text-lg font-semibold ">
                                                {item.title}
                                            </h1>

                                            <h2 className="text-text-secondary-light text-base font-normal ">
                                                {item.role}
                                            </h2>
                                        </div>

                                        <p className="text-text-secondary-light text-base font-regular">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Projects;
