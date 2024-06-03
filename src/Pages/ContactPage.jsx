import { Breadcrumb } from "../components";
import contactInfo1 from "../assets/icons/contactInfo1.svg";
import contactInfo2 from "../assets/icons/contactInfo2.svg";
import { useTranslation } from "react-i18next";

export function ContactPage() {
  const { t } = useTranslation();
  // const [isInputClicked, setIsInputClicked] = useState(false);
  function inputClickHandler(e) {
    e.currentTarget.closest("div").className = "";
  }
  function inputBlurHandler(e) {
    if (!e.currentTarget.value) {
      e.currentTarget.closest("div").className = "contact_inputWrapper";
    }
  }
  const contactChain = [
    { route: "/", text: "Home" },
    { route: "/", text: "Contact" },
  ];
  function sendMsgHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <Breadcrumb chain={contactChain} />
      <div className="contact_wrapper mb-14 container">
        <div className="contact_info">
          <section className="contact_info_call">
            <h3>
              <img src={contactInfo1} alt="a phone icon" /> {t("Call To Us")}
            </h3>
            <p>{t("We are available 24/7, 7 days a week")}.</p>
            <p>Phone: +8801611112222</p>
          </section>
          <section className="contact_info_mail">
            <h3>
              <img src={contactInfo2} alt="a message icon" /> {t("Write To US")}
            </h3>
            <p>
              {t("Fill out our form and we will contact you within 24 hours")}.
            </p>
            <p>{t("Emails")}: customer@exclusive.com</p>
            <p>{t("Emails")}: support@exclusive.com</p>
          </section>
        </div>
        <form className="contact_form">
          <div className="contact_inputWrapper">
            <input
              type="text"
              name="name"
              placeholder={t("Your Name")}
              onClick={inputClickHandler}
              onBlur={inputBlurHandler}
            />
          </div>
          <div className="contact_inputWrapper">
            <input
              type="email"
              name="email"
              placeholder={t("Your Email")}
              onClick={inputClickHandler}
              onBlur={inputBlurHandler}
            />
          </div>
          <div className="contact_inputWrapper">
            <input
              type="tel"
              name="phone"
              placeholder={t("Your Phone")}
              onClick={inputClickHandler}
              onBlur={inputBlurHandler}
            />
          </div>
          <textarea name="message" placeholder={t("Your Massage")} />
          <button
            name="send-message-button"
            className="btn-primary"
            onClick={sendMsgHandler}
          >
            {t("Send Massage")}
          </button>
        </form>
      </div>
    </>
  );
}
