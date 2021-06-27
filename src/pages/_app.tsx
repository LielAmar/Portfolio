import React from "react";

import { ThemeContext } from "@context/ThemeContext";

import "../styles/global.css";
import useTheme from "@hooks/useTheme";

const App = ({ Component, pageProps }: any) => {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={ { theme, setTheme } }>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default App;