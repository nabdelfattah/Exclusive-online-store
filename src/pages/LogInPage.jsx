import { Link, useNavigate } from "react-router-dom";
import registrationImg from "../assets/icons/lg/side-image.svg";
import { RegistrationHeader, RegistrationInput } from "../components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { useTranslation } from "react-i18next";

export function LogInPage() {
  const { t } = useTranslation();
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useContext(UserContext);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (user) navigateTo("/");
  }, []);

  async function loginHandler(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    try {
      setErrMsg("");
      setIsLoading(true);
      await login(email, password);
      navigateTo("/");
    } catch (err) {
      setErrMsg("Faild to log in");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="registration_wrapper">
      <img
        className="registration_img"
        src={registrationImg}
        alt={t("A cart and bags and huge phone")}
      />
      <form className="registration_form" name="login" onSubmit={loginHandler}>
        <RegistrationHeader
          heading={t("Log in to Exclusive")}
          errMsg={errMsg}
        />
        <RegistrationInput
          label={t("Email or Phone Number")}
          type="email"
          name="email"
        />
        <RegistrationInput
          label={t("Password")}
          type="password"
          name="password"
        />
        <div className="login_btns">
          <button
            className="btn-primary"
            disabled={isLoading}
            name="login-button"
          >
            {t("Log In")}
          </button>
          {isLoading ? (
            ""
          ) : (
            <Link className="forget-password">{t("Forget Password?")}</Link>
          )}
        </div>
      </form>
    </div>
  );
}
