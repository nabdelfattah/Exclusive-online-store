import { Breadcrumb } from "../components";
import { Link } from "react-router-dom";
import banks from "../assets/icons/banks.svg";
import check from "../assets/icons/check.svg";

export function CheckoutPage() {
  const breadcrumb = [
    { route: "/account", text: "Account" },
    { route: "/account", text: "My Account" },
    { route: "/products", text: "Product" },
    { route: "/cart", text: "View Cart" },
    { route: "/checkout", text: "CheckOut" },
  ];
  const cartPdts = JSON.parse(localStorage.getItem("cart"));
  const totalPrice = cartPdts.reduce((acc, obj) => {
    return acc + obj.count * obj.price;
  }, 0);
  function buyHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <Breadcrumb chain={breadcrumb} />
      <div className="checkout_wrapper container mb-14">
        <h1 className="checkout_heading">Billing Details</h1>
        <form className="checkout_form" onSubmit={buyHandler}>
          <div className="checout_inputs_Wrapper">
            <label htmlFor="account-fname" className="label">
              First Name
            </label>
            <input
              type="text"
              id="account-fname"
              className="input"
              name="fname"
              required
            />
            <label htmlFor="account-company" className="label">
              Company Name
            </label>
            <input
              type="text"
              id="account-company"
              className="input"
              name="company"
            />
            <label htmlFor="account-street" className="label">
              Street Address
            </label>
            <input
              type="text"
              id="account-street"
              className="input"
              name="street"
              required
            />
            <label htmlFor="account-apartment" className="label">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              id="account-apartment"
              className="input"
              name="apartment"
            />
            <label htmlFor="account-city" className="label">
              Town/City
            </label>
            <input
              type="text"
              id="account-city"
              className="input"
              name="city"
              required
            />
            <label htmlFor="account-phone" className="label">
              Phone Number
            </label>
            <input
              type="tel"
              id="account-phone"
              className="input"
              name="number"
              required
            />
            <label htmlFor="account-email" className="label">
              Email Address
            </label>
            <input
              type="email"
              id="account-email"
              className="input"
              name="emeil"
              required
            />
            <label htmlFor="account-checkbox" className="checkbox_wrapper">
              <input
                id="account-checkbox"
                name="account-checkbox"
                type="checkbox"
                className="input"
              />
              <span className="account_checkIcon_box">
                <img
                  className="account_checkIcon"
                  src={check}
                  alt="checkmark"
                />
              </span>
              <span>Save this information for faster check-out next time</span>
            </label>
          </div>
          <div className="checout_payment_Wrapper">
            <ul className="checkout_pdts">
              {cartPdts.map((obj) => {
                return (
                  <li key={JSON.stringify(obj)} className="checkout_pdt">
                    <Link
                      to={`/products/${obj.id}`}
                      className="pdtName_wrapper"
                    >
                      <img className="pdtImg" src={obj.img} alt={obj.name} />
                      <p className="pdtName">{obj.name}</p>
                    </Link>
                    <p className="pdtPrice">${obj.price * obj.count}</p>
                  </li>
                );
              })}
            </ul>
            <p className="total">
              Subtotal: <span>${totalPrice}</span>
            </p>
            <p className="shipping">
              Shipping: <span>Free</span>
            </p>
            <p className="total">
              Total: <span>${totalPrice}</span>
            </p>
            <ul className="paymentMethods">
              <li className="method_wrapper">
                <div>
                  <input type="radio" name="method" id="bank" />
                  <label htmlFor="bank">Bank</label>
                </div>
                <img src={banks} alt="available banks" />
              </li>
              <li className="method_wrapper">
                <div>
                  <input type="radio" name="method" id="cash" />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </li>
            </ul>
            <div className="coupon_wrapper">
              <input type="text" name="coupon" placeholder="Coupon Code" />
              <button type="button" className="btn-primary">
                Apply Coupon
              </button>
            </div>
            <button className="btn-primary">Place Order</button>
          </div>
        </form>
      </div>
    </>
  );
}
