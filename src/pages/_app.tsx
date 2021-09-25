import React from "react";

import { ThemeContextProvider } from "@context/ThemeContext";
import { AuthContextProvider } from "@context/AuthContext";

import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;