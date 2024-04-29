import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";

export function LayoutPage() {
  return (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
