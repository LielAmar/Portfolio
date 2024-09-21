'use client';

import { skillsItems } from '@/app/content';
import Separator from '../common/separator';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUpWithDelayAnimation } from '@/app/animations/fade_up';
import Link from 'next/link';

export type SkillItem = {
    alt: string;
    icon: string;
    link: string;
};

const Skills = () => {
    return (
        <>
            <Separator />

            <div className="w-full h-full flex flex-col items-center gap-10">
                <h1 className="text-4xl font-normal text-text-primary-light">
                    My Skills
                </h1>

                <ul className="w-3/4 lg:w-1/2 flex flex-wrap items-center justify-center">
                    {skillsItems.map((item, index) => (
                        <motion.li
                            className="px-5 py-3 flex flex-col items-center gap-1"
                            key={index}
                            variants={fadeUpWithDelayAnimation}
                            initial="initial"
                            whileInView="animate"
                            whileHover={{ scale: 1.1 }}
                            custom={index}
                            viewport={{ once: true }}
                        >
                            <>
                                <Link href={item.link}>
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                        width={50}
                                        height={50}
                                    />
                                </Link>
                                <h1 className="text-sm font-normal text-text-primary-light">
                                    {item.alt}
                                </h1>
                            </>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Skills;
