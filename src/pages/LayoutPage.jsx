import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";
import UserContextProvider from "../UserContext";
import { ProductContextProvider } from "../ProductContext";

export function LayoutPage() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <div className="layout">
          <Banner />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ProductContextProvider>
    </UserContextProvider>
  );
}
