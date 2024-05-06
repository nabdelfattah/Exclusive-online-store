import { Link, useNavigate } from "react-router-dom";
import registrationImg from "../assets/icons/lg/side-image.svg";
import { RegistrationHeader, RegistrationInput } from "../components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export function LogInPage() {
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
      setErrMsg("Faild to log in.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="registration_wrapper">
      <img className="registration_img" src={registrationImg} />
      <form className="registration_form" name="login" onSubmit={loginHandler}>
        <RegistrationHeader heading="Log in to Exclusive" errMsg={errMsg} />
        <RegistrationInput
          label="Email or Phone Number"
          type="email"
          name="email"
        />
        <RegistrationInput label="Password" type="password" name="password" />
        <div className="login_btns">
          <button className="btn-primary" disabled={isLoading}>
            Log In
          </button>
          {isLoading ? (
            ""
          ) : (
            <Link className="forget-password">Forget Password?</Link>
          )}
        </div>
      </form>
    </div>
  );
}
