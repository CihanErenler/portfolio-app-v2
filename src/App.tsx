import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer, SmallNav, ScrollToTopButton } from "./components";
import { Toaster } from "react-hot-toast";

const App: FC<JSX.IntrinsicElements["main"]> = () => {
  return (
    <main className="bg-slate-100 dark:bg-zinc-800 min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#334155",
            border: "1px solid #e2e8f0",
            borderRadius: "0.75rem",
            padding: "16px",
            fontSize: "14px",
          },
          success: {
            iconTheme: {
              primary: "#3b82f6",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Navbar />
      <SmallNav />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default App;
