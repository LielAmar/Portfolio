import Seperator from "./Seperator/Seperator";
import FooterContact from "./FooterContact/FooterContact";
import FooterEmbeds from "./FooterEmbeds/FooterEmbeds";
import FooterCredits from "./FooterCredits/FooterCredits";

import styles from "./FooterMenu.module.css";

interface props {}

const FooterMenu: React.FC<props> = () => {
  return (
    <div className={ styles.footerContainer }>
      
      <FooterContact />

      <Seperator />

      <FooterEmbeds />

      <Seperator />

      <FooterCredits />

    </div>
  );
}

export default FooterMenu;
