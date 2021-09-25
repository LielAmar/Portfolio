import useTheme from "@hooks/useTheme";
import React from "react";

export enum Theme {
  light = "light",
  dark = "dark"
}

export const ThemeContext = React.createContext({
  theme: Theme.light,
  setTheme: (theme: Theme) => { theme = theme },
});

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={ { theme, setTheme } }>
      {children}
    </ThemeContext.Provider>
  );
};