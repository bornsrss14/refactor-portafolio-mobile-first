import { createContext, useContext, useState, useMemo, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const dark = {
    txt: "var(--primary-white)",
    txt_logo: "white",
    ui: "var(--raisin-black-light)",
    uiEduExp: "var(--night-bg)",
    bg: "var(--night-bg)",
    bgExperience: "var(--raisin-black-light)",
    bgfooter: "var(--night-bg)",
    colorBorder: "rgba(113, 113, 113, 1)",
    tags: "var(--night-bg)",
    folderFront: "var(--color-dark-folder-front)",
    folderBack: "var(--color-dark-folder-back)",
    bgMansory: "var(--raisin-black-light)",
  };
  const light = {
    txt: "var(--night-bg)",
    txt_logo: "var(--c-primary-blue)",
    ui: "var(--white-dark)",
    uiEduExp: "var(--white-dark)",
    bg: "var(--primary-white)",
    bgExperience: "var(--primary-white)",
    bgfooter: "var(--white-dark)",
    colorBorder: "rgb(5, 5, 79)",
    tags: "rgb(0, 0, 255)",
    folderFront: "var(--azul-pastel)",
    folderBack: "var(--azul-pastel-dark)",
    bgMansory: "var(--primary-white)",
  };

  const toggleTheme = () => setIsDark((prev) => !prev);
  // 🧩 aplica clases al body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);
  const value = useMemo(() => ({ isDark, dark, light, toggleTheme }), [isDark]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeT = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeContextProvider");
  }
  return context;
};

export default ThemeContextProvider;
