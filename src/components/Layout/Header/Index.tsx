// Layout.js
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <br />
    </main>
  );
};
