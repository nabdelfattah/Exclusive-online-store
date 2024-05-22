import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";
import UserContextProvider from "../UserContext";
import HeaderContextProvider from "../HeaderContext";

export function LayoutPage() {
  return (
    <UserContextProvider>
      <HeaderContextProvider>
        <div className="layout">
          <Banner />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </HeaderContextProvider>
    </UserContextProvider>
  );
}
