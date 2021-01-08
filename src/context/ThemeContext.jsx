import React from "react";
import { lightTheme, darkTheme } from "../theme/DarkTheme";

const ThemeContext = React.createContext();

function Context(props) {
  const [themeObj, setThemeObj] = React.useState(lightTheme);

  function toggleTheme() {
    themeObj.theme === "light"
      ? setThemeObj(darkTheme)
      : setThemeObj(lightTheme);
  }

  return (
    <ThemeContext.Provider value={{ themeObj, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { Context, ThemeContext };
