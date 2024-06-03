import { Link, useNavigate } from "react-router-dom";
import registrationImg from "../assets/icons/lg/side-image.svg";
import googleIcon from "../assets/icons/google.svg";
import { RegistrationHeader, RegistrationInput } from "../components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { validateSignUp } from "../helper";
import { useTranslation } from "react-i18next";

export function SignUpPage() {
  const { t } = useTranslation();

  const { signup, signupWithGoogle, user } = useContext(UserContext);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (user) navigateTo("/");
  }, []);

  const [errMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  async function signupHandler(e) {
    e.preventDefault();
    // validate user data
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const validationResult = validateSignUp(name, email, password);
    // register user
    if (validationResult.isValid) {
      try {
        setErrMsg("");
        setIsLoading(true);
        await signup(email, password, name);
        navigateTo("/");
      } catch {
        setErrMsg(
          "Faild to create an account. Perhaps someone is already using the email"
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrMsg(validationResult.errors[0]);
    }
  }
  async function signupWithGoogleHandler() {
    await signupWithGoogle();
  }

  return (
    <div className="registration_wrapper">
      <img
        className="registration_img"
        src={registrationImg}
        alt={t("A cart and bags and huge phone")}
      />
      <form
        className="registration_form"
        name="signup"
        onSubmit={signupHandler}
      >
        <RegistrationHeader heading={t("Create an account")} errMsg={errMsg} />
        <RegistrationInput label={t("Name")} type="text" name="name" />
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
        <div className="signup-btns">
          <button
            disabled={IsLoading}
            name="create-account-button"
            className="btn-primary"
          >
            {t("Create Account")}
          </button>
          <button
            disabled={IsLoading}
            name="sign-up-with-google-button"
            className="btn-outline"
            type="button"
            onClick={signupWithGoogleHandler}
          >
            <img src={googleIcon} />
            {t("Sign up with Google")}
          </button>
          <p className="registration_redirectionText">
            {t("Already have account?")} <Link to="/login">{t("Log in")}</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
