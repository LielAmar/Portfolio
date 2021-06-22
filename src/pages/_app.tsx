import { useEffect } from "react";
import { useCookies } from "react-cookie";

import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {
  const [cookies, _setCookie, _removeCookie] = useCookies(["portfolio"]);

  // Setting the theme to the prefered system theme
  // If we have a theme cookie we want to use it to load the theme, otherwise, we want to use the system default
  useEffect(() => {
    // If cookies.theme is set use it, otherwise check if the system prefered color scheme is dark and use it. Otherwise use light
    let themeToSet = (cookies.theme ? cookies.theme : (window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light" ));

    const html = document.querySelector("html");
    html?.setAttribute("data-theme", themeToSet);
  }, [])

  return <Component {...pageProps} />
}

export default App;