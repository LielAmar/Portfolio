import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./Navbar.module.css";

/**
 * The Navbar component
 * 
 * This component contains the navbar displayed on the index (main) page of the website.
 * 
 * This component renders the #NavbarMenu component.
 */

interface props {}

const Navbar: React.FC<props> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbarWrapper}>

        <NavbarMenu />

      </div>
    </header>
  )
}

export default Navbar;