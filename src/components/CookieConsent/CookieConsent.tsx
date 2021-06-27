import useCookieConsent from "hooks/useCookieConsent";

import styles from "./CookieConsent.module.css";

/**
 * The CookieConsent component
 * 
 * This component is being rendered at the bottom of the screen only if the user had never selected a cookie consent option (either Accept or Deny).
 * This component receives 1 property:
 * - children (any)
 * 
 * This component renders the children and 2 buttons - one to handle Acceptance of cookies and one to handle Rejection of cookies.
 */

interface props {
  children?: any
}

const CookieConsent: React.FC<props> = ({ children }) => {
  const [cookieConsentSelected, _hasCookieConsent, updateCookieConsent] = useCookieConsent();

  return (
    <>
      { !cookieConsentSelected &&
        <div className={ styles.cookieConsent }>
          
          { children }

          <div className={ styles.buttons }>
            <button className={ styles.acceptButton } onClick={ () => updateCookieConsent(true) }>Accept</button>
            <button className={ styles.rejectButton } onClick={ () => updateCookieConsent(false) }>Reject</button>
          </div>
        </div>
      }
    </>
  );
}

export default CookieConsent;
