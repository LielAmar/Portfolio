import { useEffect } from "react";

import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {
  // Setting the theme to the prefered system theme
  useEffect(() => {
    // Whether the system theme matches to dark
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches;

    const html = document.querySelector("html");
    html?.setAttribute("data-theme", systemTheme ? "dark" : "light");
  }, [])

  return <Component {...pageProps} />
}

export default App;