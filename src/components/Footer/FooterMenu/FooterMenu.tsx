import Seperator from "./Seperator/Seperator";
import FooterContact from "./FooterContact/FooterContact";
import FooterEmbeds from "./FooterEmbeds/FooterEmbeds";
import FooterCredits from "./FooterCredits/FooterCredits";

import styles from "./FooterMenu.module.css";

interface props {
  includeEmbeds: boolean
}

const FooterMenu: React.FC<props> = ({ includeEmbeds = true }) => {
  return (
    <div className={ styles.footerContainer }>
      
      <FooterContact />

      <Seperator />

      { includeEmbeds && <FooterEmbeds /> }

      <Seperator />

      <FooterCredits />

    </div>
  );
}

export default FooterMenu;
