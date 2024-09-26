"use client";

import { NavbarItem } from "@content/navbar";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Menu } from "lucide-react";

const NavbarOption = ({
  index,
  navbarItem,
  activeNavbarItem,
  bg,
  navigate,
  setPosition,
}: {
  index: number;
  navbarItem: NavbarItem;
  activeNavbarItem: string;
  bg: boolean;
  navigate: (navbarItem: NavbarItem) => void;
  setPosition?: React.Dispatch<React.SetStateAction<{ left: number; width: number; height: number; opacity: number }>>;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeNavbarItem === navbarItem.name && ref.current && setPosition) {
      const { width, height } = ref.current.getBoundingClientRect();

      setPosition({
        left: ref.current.offsetLeft,
        width,
        height,
        opacity: 1,
      });
    }
  }, [activeNavbarItem, navbarItem.name, setPosition]);

  return (
    <Link
      className={`w-full py-2 px-4 text-base font-normal text-center ${bg && "bg-widget-bg"} ${
        activeNavbarItem == navbarItem.name ? "text-primary" : "text-secondary"
      } hover:text-primary transition-colors duration-200 relative z-10 cursor-pointer`}
      key={index}
      href={navbarItem.href}
      scroll={false}
      ref={ref}
      onClick={(event) => {
        event.preventDefault();
        navigate(navbarItem);
      }}
    >
      <motion.div data-active={activeNavbarItem === navbarItem.name}>{navbarItem.name}</motion.div>
    </Link>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; height: number; opacity: number } }) => {
  return (
    <motion.div
      className="left-0 w-0 h-0 absolute rounded-full border-primary border-2 z-0"
      animate={position}
      initial={false}
      transition={{ duration: 0.2, type: "spring", stiffness: 380, damping: 30 }}
    />
  );
};

const NavBar = ({ navbarItems }: { navbarItems: NavbarItem[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavbarItem, setActiveNavbarItem] = useState(navbarItems[0].name);

  const [position, setPosition] = useState({ left: 0, width: 77.3, height: 40, opacity: 1 });

  // TODO: fix the bug where the border of navbar items in >sm mode gets messed up when clicking on any navbar item in <sm mode

  const navigate = (navbarItem: NavbarItem) => {
    setActiveNavbarItem(navbarItem.name);

    document.querySelector(navbarItem.href)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  return (
    <header className="w-full sm:w-fit h-full pt-10 gap-x-3 m-auto relative" role="navigation">
      <div className="w-full h-full min-h-10 hidden sm:flex justify-center relative">
        {navbarItems.map((navbarItem, index) => (
          <NavbarOption
            key={index}
            index={index}
            navbarItem={navbarItem}
            activeNavbarItem={activeNavbarItem}
            bg={false}
            navigate={navigate}
            setPosition={setPosition}
          />
        ))}

        <Cursor position={position} />
      </div>

      <div className="w-full h-full min-h-10 px-10 sm:hidden flex flex-row justify-between items-center gap-3 relative">
        <h1 className="text-primary text-3xl font-medium">Liel Amar</h1>
        <Menu color="white" onClick={() => setIsMenuOpen(!isMenuOpen)} size={30} />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`w-[100vw] h-full sm:hidden left-0 flex flex-col items-center absolute z-10`}
              initial={{ top: 45, opacity: 0 }}
              animate={{ top: 63, opacity: 1 }}
              exit={{ top: 45, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {navbarItems.map((navbarItem, index) => (
                <NavbarOption key={index} index={index} navbarItem={navbarItem} activeNavbarItem={activeNavbarItem} bg={true} navigate={navigate} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
