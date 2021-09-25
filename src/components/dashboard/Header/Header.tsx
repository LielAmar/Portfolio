import Image from "next/image";
import { ReactSVG } from "react-svg";

import styles from "./Header.module.css";

/**
 * The Header componenet
 * 
 * This component contains the header displayed on the dashboard page of the website.
 * This component receives 5 property:
 * - menuClick (function): how should it handle the click on the menu
 * - pfpSource (string): the source of the user's profile picture
 * - pfpClick (function): how should it handle the click on the profile picutre
 * - withSearchBar (boolean): should it include the search bar
 * - searchOperation (function): how should it handle searches
 */

interface props {
  menuClick: () => any
  pfpSource: string | null
  pfpClick: () => any
  withSearchBar: boolean
  searchOperation?: () => any
}

const Header: React.FC<props> = ({ menuClick, pfpSource, pfpClick, withSearchBar, searchOperation }) => {
  return (
    <header className={ styles.header }>
      <div className={ styles.headerWrapper }>
        <div className={ styles.headerToggler } onClick={ menuClick }>
          <ReactSVG src="/svgs/feather/menu.svg" wrapper="span"/>
        </div>

        { withSearchBar && 
          <div className={ styles.headerSearch }>
            <input type="text" placeholder="Search" className={ styles.headerSearchInput } onChange={ searchOperation }/>
            <ReactSVG src="/svgs/feather/search.svg" wrapper="div" />
          </div>
        }

        <Image src={ "/images/logo.webp" } loader={ () => pfpSource ? pfpSource : "/images/logo.webp" } width={ 40 } height={ 40 } onClick={ pfpClick }/>
      </div>
    </header>
  );
}

export default Header;
