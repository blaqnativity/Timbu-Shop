import { Outlet, Link } from "react-router-dom";
import FooterNav from "../components/FooterNav";

const Layout = () => {
  return (
    <>
      <Outlet />

      <FooterNav />
    </>
  );
};

export default Layout;
