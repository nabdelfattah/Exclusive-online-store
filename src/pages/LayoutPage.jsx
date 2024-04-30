import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";
import UserContextProvider from "../UserContext";

export function LayoutPage() {
  return (
    <UserContextProvider>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}
