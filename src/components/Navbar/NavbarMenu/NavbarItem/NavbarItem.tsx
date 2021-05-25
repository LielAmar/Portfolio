import Link from "next/link"

import styles from "./NavbarItem.module.css";

interface props {
  name: string
  href: string
}

const NavbarItem: React.FC<props> = ({ name, href }) => {
  return (
    <div className={styles.navbarItem}>
      
      <Link href={ href }>{ name }</Link>

    </div>
  )
}

export default NavbarItem;