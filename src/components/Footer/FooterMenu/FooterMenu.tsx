import useCookieConsent from "hooks/useCookieConsent";

import FooterSeperator from "./Seperator/FooterSeperator";
import FooterContact from "./FooterContact/FooterContact";
import FooterEmbeds from "./FooterEmbeds/FooterEmbeds";
import FooterCredits from "./FooterCredits/FooterCredits";

import styles from "./FooterMenu.module.css";

/**
 * The FooterMenu component
 * 
 * This component assembles the footer.
 * This component receives 1 property:
 * - includeEmbeds (boolean): Whether to include embeds in the footer or not
 * 
 * This component renders contact options, ? embeds and credits
 */

interface props {
  includeEmbeds: boolean
}

const FooterMenu: React.FC<props> = ({ includeEmbeds = true }) => {
  const [_cookieConsentSelected, hasCookieConsent, _updateCookieConsent] = useCookieConsent();

  return (
    <div className={ styles.footerContainer }>
      
      <FooterContact />

      <FooterSeperator />

      {/* We only want to display our embeds if the user accepted the cookie policy */}
      { hasCookieConsent && includeEmbeds && <FooterEmbeds /> }

      <FooterSeperator />

      <FooterCredits />

    </div>
  );
}

export default FooterMenu;
