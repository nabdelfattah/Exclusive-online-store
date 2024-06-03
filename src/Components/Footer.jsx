import { Link } from "react-router-dom";
import mailArrow from "../assets/icons/footer/arrow-r-mail.svg";
import qrCode from "../assets/icons/footer/qr-code.svg";
import googlePlay from "../assets/icons/footer/google-store.svg";
import appStore from "../assets/icons/footer/app-store.svg";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  function sendMailHandler(e) {
    e.preventDefault();
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_col">
          <Link to="/" className="logo" aria-label="Go to home page">
            Exclusive
          </Link>
          <p className="footer_heading">{t("Subscribe")}</p>
          <p className="footer_text">{t("Get 10% off your first order")}</p>
          <form className="footer_form" onSubmit={sendMailHandler}>
            <input
              className="footer_input"
              type="email"
              name="email"
              id="footer_email"
              placeholder={t("Enter your email")}
            />
            <img src={mailArrow} alt={t("arrow icon")} />
          </form>
        </div>
        <div className="footer_col">
          <div className="footer_sub-col">
            <p className="footer_heading">{t("Support")}</p>
            <ul className="footer_navList">
              <li>
                <address>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</address>
              </li>
              <li>
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
              </li>
              <li>
                <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
              </li>
            </ul>
          </div>
          <div className="footer_sub-col">
            <p className="footer_heading">{t("Account")}</p>
            <ul className="footer_navList">
              <li>
                <Link to="/account">{t("My Account")}</Link>
              </li>
              <li>
                <Link to="/login">{t("Login / Register")}</Link>
              </li>
              <li>
                <Link to="/cart">{t("Cart")}</Link>
              </li>
              <li>
                <Link to="/wishlist">{t("Wishlist")}</Link>
              </li>
              <li>
                <Link to="/products">{t("Shop")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer_sub-col">
            <p className="footer_heading">{t("Quick Link")}</p>
            <ul className="footer_navList">
              <li>
                <Link to="about">{t("Privacy Policy")}</Link>
              </li>
              <li>
                <Link to="about">{t("Terms Of Use")}</Link>
              </li>
              <li>
                <Link to="about">{t("FAQ")}</Link>
              </li>
              <li>
                <Link to="contact">{t("Contact")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_col">
          <p className="footer_heading">{t("Download App")}</p>
          <p className="footer_downloadText">
            {t("Save $3 with App New User Only")}
          </p>
          <div className="footer_downloadGrid">
            <img src={qrCode} alt="QR code" width={80} height={80} />
            <a href="#">
              <img src={googlePlay} alt="Google play" />
            </a>
            <a href="#">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
          <div className="footer_socialLinks">
            <a href="#" aria-label="facebook account">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" aria-label="X account">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24.00 24.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.192"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
            <a href="#" aria-label="Instagram account">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" aria-label="Linked-in account">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="copywrite">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4998 18.3332C15.1022 18.3332 18.8332 14.6022 18.8332 9.99984C18.8332 5.39746 15.1022 1.6665 10.4998 1.6665C5.89746 1.6665 2.1665 5.39746 2.1665 9.99984C2.1665 14.6022 5.89746 18.3332 10.4998 18.3332Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9998 8.14799C12.9998 8.14799 11.9704 6.6665 10.2547 6.6665C8.53905 6.6665 7.1665 8.14799 7.1665 9.99984C7.1665 11.8517 8.53905 13.3332 10.2547 13.3332C11.9704 13.3332 12.9998 11.8517 12.9998 11.8517"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {t("Copyright Rimel 2022. All right reserved")}
      </p>
    </footer>
  );
}
