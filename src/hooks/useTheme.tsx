import { Theme } from "@context/ThemeContext";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

/**
 * @deprecated This hook should not be used, but rather the context #ThemeContext or the new hook beneath
 * @used
 */
const _useTheme = (): [string, (newTheme: string) => void] => {
  const [cookies, setCookie, _removeCookie] = useCookies(["portfolio"]);
  const [theme, setTheme] = useState("dark");

  // Sets the initial theme to the prefered theme - either the theme saved previously in a cookie or the systems  prefered theme
  useEffect(() => {
    let preferedTheme = (cookies.theme ? cookies.theme : (window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light"));
    setWebsiteTheme(preferedTheme);
  }, []);

  /**
   * A util function to set the website theme (changes the initial theme, updates the html elemenet, updates the theme cookie & updates embeds)
   * 
   * @param newTheme   New theme to set
   */
  const setWebsiteTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.querySelector("html")?.setAttribute("data-theme", `${ newTheme }`);

    setCookie("theme", newTheme);
  }

  return [theme, setWebsiteTheme];
}

/**
 * A custom hook to handle the website themes
 * 
 * If we have a theme cookie we want to use it to load the theme, otherwise we want to use the system's prefered color scheme
 *  * Since the theme cookie is an essential/necessary cookie, we don't need to import the useCookieConsent hook and check if we do have consent
 */
const useTheme = (): [Theme, (newTheme: Theme) => void] => {
  const [cookies, setCookie, _removeCookie] = useCookies(["portfolio"]);

  const [theme, setTheme] = useState(Theme.dark);

  // Sets the initial theme to the prefered theme - either the theme saved previously in a cookie or the systems prefered theme
  useEffect(() => {
    let preferedTheme = (cookies.theme ? cookies.theme : (window.matchMedia("(prefers-color-scheme: dark").matches ? Theme.dark : Theme.light));
    setWebsiteTheme(preferedTheme);
  }, []);

  /**
   * A function to set the website theme (changes the initial theme, updates the html elemenet, updates the theme cookie & updates embeds)
   * 
   * @param newTheme   New theme to set
   */
  const setWebsiteTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setCookie("theme", newTheme);

    document.querySelector("html")?.setAttribute("data-theme", `${ newTheme }`);
  }

  return [theme, setWebsiteTheme];
};

export default useTheme;