import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const THEMES = {
    LIGHT: "light",
    DARK: "dark",
  };

  const [theme, setTheme] = useState(THEMES.LIGHT);

  const themeToggler = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
