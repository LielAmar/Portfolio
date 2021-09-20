import Link from "next/link";
import { ReactSVG } from "react-svg";

import styles from "./SidebarItem.module.css";

interface props {
  title: string
  iconSrc: string
  onClick: () => any
  active: boolean
  children?: any
}

const SidebarItem: React.FC<props> = ({ title, iconSrc, onClick, active, children }) => {

  return (
    <div className={ styles.sidebarItem} onClick={ active ? onClick : () => {} }>
      <>
        <ReactSVG src={ iconSrc } wrapper="span" className={ `${ !active && styles.inactive }` } />
        <h4 className={ `${ styles.sidebarItemName } ${ !active && styles.inactive }` }>{ title }</h4>
      </>

      { children }
    </div>
  );
}

export default SidebarItem
