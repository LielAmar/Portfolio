import styles from "./SidebarItems.module.css";

interface props {
  title: string
  children: any
}

const SidebarItems: React.FC<props> = ({ title, children }) => {

  return (
    <div className={ styles.sidebarItems }>
      <h3>{ title }</h3>
      { children }
    </div>
  );
}

export default SidebarItems
