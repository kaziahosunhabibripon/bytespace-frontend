import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
