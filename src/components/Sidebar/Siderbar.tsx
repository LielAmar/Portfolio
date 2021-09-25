import { useRef } from "react";

import useOutsideComponentClick from "@hooks/useOutsideComponentClick";

import styles from "./Sidebar.module.css";

interface props {
  active: boolean
  setActive: (value: boolean) => void
  title: string
  children: any
}

const Sidebar: React.FC<props> = ({ active, setActive, title, children }) => {
  const ref = useRef(null);
  useOutsideComponentClick(ref, () => setActive(false));

  return (
    <div className={ `${ styles.sidebar } ${ active && styles.active}` } ref={ ref }>
      <nav className={ styles.sidebarWrapper }>
        <div className={ styles.greeting }>
          <span>{ title }</span>
        </div>

        { children }
      </nav>
    </div>
  );
}

export default Sidebar
