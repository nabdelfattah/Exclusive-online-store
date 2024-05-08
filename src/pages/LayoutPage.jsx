import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";
import UserContextProvider from "../UserContext";
import { ProductContextProvider } from "../ProductContext";

export function LayoutPage() {
  return (
    <UserContextProvider>
      <div className="layout">
        <Banner />
        <Header />
        <ProductContextProvider>
          <Outlet />
        </ProductContextProvider>
        <Footer />
      </div>
    </UserContextProvider>
  );
}
