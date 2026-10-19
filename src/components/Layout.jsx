import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";
import BackToTop from "./BackToTop";

export default function Layout() {
  const { pathname } = useLocation();

  // Remonte en haut de page a chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CursorGlow />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}
