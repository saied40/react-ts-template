import Header from "@components/header";
import Footer from "@components/footer";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
