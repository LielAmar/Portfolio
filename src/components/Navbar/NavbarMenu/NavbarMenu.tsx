import NavbarItem from "./NavbarItem/NavbarItem";

import styles from "./NavbarMenu.module.css";

/**
 * The NavbarMenu component
 * 
 * This component contains the navbar items (options) displayed on the index (main) page of the website.
 * 
 * This component renders multiple #NavbarItem components, each has its own name & href.
 */

interface props {}

const NavbarMenu: React.FC<props> = () => {
  return (
    <div className={styles.navbarContainer}>
          
      <NavbarItem name="Who am I?" href="#me" />
      <NavbarItem name="Skills" href="#skills" />
      <NavbarItem name="Work" href="#work" />
      <NavbarItem name="Contact" href="#contact" />

    </div>
  )
}

export default NavbarMenu;