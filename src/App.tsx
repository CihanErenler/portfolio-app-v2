import { FC, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const App: FC<JSX.IntrinsicElements["main"]> = () => {
  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark");
      document.documentElement.classList.toggle("light");
    } else {
      document.documentElement.classList.toggle("dark");
      document.documentElement.classList.toggle("light");
    }
  }, [theme]);

  return (
    <main className="bg-accent-1 dark:bg-zinc-800 min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
    </main>
  );
};

export default App;
