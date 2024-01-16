import { createContext, useState, useEffect } from "react";
import { AppContextType, AppProviderType } from "../../@types/componentTypes";

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: AppProviderType) => {
  const [theme, setTheme] = useState<string | null>(null);
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, showNav, setShowNav }}>
      {children}
    </AppContext.Provider>
  );
};
