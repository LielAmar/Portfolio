import React from "react";

import useTheme from "@hooks/useTheme";
import { ThemeContext } from "@context/ThemeContext";
import { AuthProvider } from "@context/AuthContext";

import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {
  const [theme, setTheme] = useTheme();

  return (
    <AuthProvider>
      <ThemeContext.Provider value={ { theme, setTheme } }>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;