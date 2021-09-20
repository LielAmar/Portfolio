import Image from "next/image";
import { ReactSVG } from "react-svg";

import styles from "./DashboardHeader.module.css";

interface props {
  menuClick: () => any
  pfpClick: () => any
  withSearchBar: boolean
  searchOperation?: () => any
}

const DashboardHeader: React.FC<props> = ({ menuClick, pfpClick, withSearchBar, searchOperation }) => {
  return (
    <header className={ styles.dashboardHeader }>
      <div className={ styles.dashboardHeaderWrapper }>
        <div className={ styles.dashboardHeaderToggler } onClick={ menuClick }>
          <ReactSVG src="/svgs/feather/menu.svg" wrapper="span"/>
        </div>

        { withSearchBar && 
          <div className={ styles.dashboardHeaderSearch }>
            <input type="text" placeholder="Search" className={ styles.dashboardHeaderSearchInput } />
            <ReactSVG src="/svgs/feather/search.svg" wrapper="div" />
            {/* TODO: add the search operation */}
          </div>
        }

        <Image src="/images/logo.webp" width="35px" height="35px" onClick={ pfpClick }/>
      </div>
    </header>
  );
}

export default DashboardHeader;
