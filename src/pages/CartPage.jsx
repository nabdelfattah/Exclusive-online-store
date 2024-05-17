import { useContext, useState } from "react";
import { Breadcrumb, CartTotal, Coupon } from "../components";
import { ProductInCart } from "../components/ProductInCart";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useTranslation } from "react-i18next";

export function CartPage() {
  const { t } = useTranslation();
  const { setCart } = useContext(UserContext);
  const breadcrumb = [
    { route: "/", text: "Home" },
    { route: "/cart", text: "Cart" },
  ];
  const [cartPdts, setCartPdts] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [updatedCart, setUpdatedCart] = useState(cartPdts);

  let totalPrice;
  if (cartPdts) {
    totalPrice = cartPdts.reduce((acc, obj) => {
      return acc + obj.count * obj.price;
    }, 0);
  }

  function updateCartHandler() {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartPdts(updatedCart);
    setCart(updatedCart);
  }

  return (
    <>
      <Breadcrumb chain={breadcrumb} />
      <div className="container cart_wrapper mb-14">
        <header className="cart_header container">
          <p className="cart_colName">{t("Product")}</p>
          <p className="cart_colName">{t("Price")}</p>
          <p className="cart_colName">{t("Quantity")}</p>
          <p className="cart_colName">{t("Subtotal")}</p>
        </header>
        {cartPdts ? (
          <ul className="cart_pdts_wrapper">
            {cartPdts.map((obj) => {
              return (
                <ProductInCart
                  key={JSON.stringify(obj)}
                  product={obj}
                  updateCart={setUpdatedCart}
                />
              );
            })}
          </ul>
        ) : (
          <p className="emptyCart">{t("Your cart is empty")}.</p>
        )}
        <div className="cart_btns mb-8">
          <Link to="/products" className="btn-outline">
            {t("Return To Shop")}
          </Link>
          <button
            name="update-cart-button"
            className="btn-outline"
            onClick={updateCartHandler}
          >
            {t("Update Cart")}
          </button>
        </div>
        <div className="cart_coupon_total_wrapper">
          <Coupon />
          <div className="cart_total_box">
            <h2 className="total_heading">{t("Cart Total")}</h2>
            <CartTotal
              subtotal={totalPrice}
              shipping="Free"
              total={totalPrice}
            />
            <Link to="/checkout" className="btn-primary">
              {t("Procees to checkout")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
