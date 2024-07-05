import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterNav from "../components/FooterNav";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <FooterNav />
    </>
  );
};

export default Layout;
