import Link from "next/link"

import styles from "./NavbarItem.module.css";

/**
 * The NavbarItem component
 * 
 * This component contains a single navbar item (option) displayed on the index (main) page of the website.
 * This component receives 2 properties:
 * - name (string): Name of the option
 * - href (string): Link to redirect to when clicking on the item
 * 
 * This component renders a single #NavbarItem component with a link.
 */

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