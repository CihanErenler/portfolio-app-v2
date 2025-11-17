import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer, SmallNav } from "./components";

const App: FC<JSX.IntrinsicElements["main"]> = () => {
  return (
    <main className="bg-slate-100 dark:bg-zinc-800 min-h-screen">
      <Navbar />
      <SmallNav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
