import { Outlet } from "react-router-dom";
import FooterNav from "../components/FooterNav";

const MainLayout = () => {
  return (
    <>
      <Outlet />

      <FooterNav />
    </>
  );
};

export default MainLayout;
