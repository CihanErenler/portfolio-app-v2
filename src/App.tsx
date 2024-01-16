import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";

const App: FC<JSX.IntrinsicElements["main"]> = () => {
  return (
    <main className="bg-accent-1 dark:bg-zinc-800 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
