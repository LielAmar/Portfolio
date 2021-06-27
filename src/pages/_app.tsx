import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { Theme, ThemeContext } from "@context/ThemeContext";

import "../styles/global.css";


const App = ({ Component, pageProps }: any) => {
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

  return (
    <ThemeContext.Provider value={ { theme, setTheme: setWebsiteTheme } }>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default App;