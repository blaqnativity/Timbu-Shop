import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterNav from "../components/FooterNav";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterNav />
    </>
  );
};

export default DefaultLayout;
