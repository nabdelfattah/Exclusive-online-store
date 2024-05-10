import "./styles/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LayoutPage,
  HomePage,
  ProductsPage,
  ErrorPage,
  ContactPage,
  AboutPage,
  SignUpPage,
  LogInPage,
  DetailsPage,
  WishlistPage,
  CartPage,
  CheckoutPage,
  AccountPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<DetailsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
