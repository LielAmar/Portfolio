'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeOption, setActiveOption] = useState(navItems[0].name);
    const lastScrollY = useRef(0);

    const isProgrammaticScroll = useRef([] as any);

    useEffect(() => {
        const handleScroll = () => {
            if (isProgrammaticScroll.current.length > 0) {
                return;
            }

            const currentScrollY = window.scrollY;

            setIsVisible(
                currentScrollY < lastScrollY.current || currentScrollY < 30
            );

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: false });

        return () => window.removeEventListener('scroll', handleScroll, false);
    }, []);

    const handleOptionClick = (option: string) => {
        setActiveOption(option);

        isProgrammaticScroll.current.push(true);

        setTimeout(() => isProgrammaticScroll.current.pop(), 1000);
    };

    return (
        <div
            className={`
                w-full
                ${!isVisible ? 'top-[-7rem]' : 'top-0 md:top-[30px]'} 
                fixed left-0 right-0 flex justify-center z-50 transition-all transform ease-in-out duration-300`}
        >
            <nav
                className={`
                    w-full md:w-fit grid grid-cols-3 grid-rows-2 sm:flex justify-center text-center 
                    items-center bg-navbarBackground bg-opacity-80 md:rounded-full px-5 md:px-4 py-3 md:py-2`}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`relative px-3 py-2 text-sm font-normal ${
                            item.name == activeOption
                                ? 'text-navbarTextActive'
                                : 'text-navbarTextInactive'
                        } rounded-full transition-colors duration-200`}
                        onClick={() => handleOptionClick(item.name)}
                    >
                        {item.name}

                        {item.name == activeOption && (
                            <motion.div
                                className="absolute inset-0 bg-navbarBackground rounded-full -z-10"
                                layoutId="activeBackground"
                                transition={{
                                    type: 'spring',
                                    stiffness: 380,
                                    damping: 30,
                                }}
                            />
                        )}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavBar;
