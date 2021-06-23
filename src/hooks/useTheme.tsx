import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";


/**
 * A custom hook to handle website themes.
 * 
 * If we have a theme cookie we want to use it, otherwise we want to use the system's prefered color scheme
 */
const useTheme = (): [string, (newTheme: string) => void] => {
  const [cookies, setCookie, _removeCookie] = useCookies(["portfolio"]);
  
  const [theme, setTheme] = useState("dark");

  // Setting the initial theme to the prefered theme - either the theme saved previously in a cookie or the systems  prefered theme
  useEffect(() => {
    let preferedTheme = (cookies.theme ? cookies.theme : (window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light" ));
    setWebsiteTheme(preferedTheme);
  }, []);

  /**
   * A util function to set the website theme (changes the initial theme, updates the html elemenet, updates the theme cookie & updates embeds)
   * 
   * @param newTheme   New theme to set
   */
  const setWebsiteTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);

    setCookie("theme", newTheme);

    // Changing the embeds theme as well
    document.getElementById("discordEmbed")?.setAttribute("src", `https://discordapp.com/widget?id=416652224505184276&theme=${ newTheme }`);

    let twitterDark = document.getElementById("twitterEmbedDark");
    let twitterLight = document.getElementById("twitterEmbedLight");

    if(twitterDark && twitterLight) {
      if(newTheme === "dark") {
        twitterDark.style.display = "block";
        twitterLight.style.display = "none";
      } else {
        twitterDark.style.display = "none";
        twitterLight.style.display = "block";
      }
    }
  }

  return [theme, setWebsiteTheme];
}

export default useTheme;