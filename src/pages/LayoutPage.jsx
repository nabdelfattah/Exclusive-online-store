import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";
import UserContextProvider from "../UserContext";

export function LayoutPage() {
  return (
    <UserContextProvider>
      <div className="layout">
        <Banner />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContextProvider>
  );
}
