import { useState } from "react";
import { useEffect } from "react";

/**
 * A custom hook to handle and save cookie consent
 * 
 * This hook checks if the user selected their prefered cookie policy status (accept/reject) and returns a value
 * telling whether the user selected either and which one they have selected
 */
const useCookieConsent = (): [boolean, boolean, (value: boolean) => void] => {
  const [cookieConsentSelected, setCookieConsentSelected] = useState(false);
  const [hasCookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    let storageCookieConsentValue = window.localStorage.getItem("cookie_consent");

    if(storageCookieConsentValue && storageCookieConsentValue !== null) {
      setCookieConsentSelected(true);

      if(storageCookieConsentValue === "true")
        setCookieConsent(true);
    }
  }, []);

  const updateCookieConsent = (value: boolean) => {
    setCookieConsent(value);
    setCookieConsentSelected(true);

    window.localStorage.setItem("cookie_consent", `${value}`);
  }

  return [cookieConsentSelected, hasCookieConsent, updateCookieConsent];
}

export default useCookieConsent;