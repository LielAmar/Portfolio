import styles from "./SidebarMenu.module.css";

interface props {
  children: any
}

const SidebarMenu: React.FC<props> = ({ children }) => {

  return (
    <div className={ styles.sidebarMenu }>
      { children }
    </div>
  );
}

export default SidebarMenu
