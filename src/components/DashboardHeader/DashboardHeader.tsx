import Image from "next/image";
import { ReactSVG } from "react-svg";

import styles from "./DashboardHeader.module.css";

interface props {
  menuClick: () => any
  pfpSource: string | null
  pfpClick: () => any
  withSearchBar: boolean
  searchOperation?: () => any
}

const DashboardHeader: React.FC<props> = ({ menuClick, pfpSource, pfpClick, withSearchBar, searchOperation }) => {
  return (
    <header className={ styles.dashboardHeader }>
      <div className={ styles.dashboardHeaderWrapper }>
        <div className={ styles.dashboardHeaderToggler } onClick={ menuClick }>
          <ReactSVG src="/svgs/feather/menu.svg" wrapper="span"/>
        </div>

        { withSearchBar && 
          <div className={ styles.dashboardHeaderSearch }>
            <input type="text" placeholder="Search" className={ styles.dashboardHeaderSearchInput } onChange={ searchOperation }/>
            <ReactSVG src="/svgs/feather/search.svg" wrapper="div" />
          </div>
        }

        <Image src={ "/images/logo.webp" } loader={ () => pfpSource ? pfpSource : "" } width="50px" height="50px" onClick={ pfpClick }/>
      </div>
    </header>
  );
}

export default DashboardHeader;
