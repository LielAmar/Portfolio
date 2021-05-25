import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./Navbar.module.css";

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