import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext;

//custom hook to use the ThemeContext with its Provider
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe de usarse dentro de ThemeProvider");
  }
  return context;
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    //apply theme class to document element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const value = { theme, toggleTheme, isDark: theme === "dark" };
  return (
    <ThemeContext.Provider value={{ value }}>{children}</ThemeContext.Provider>
  );
};
