import { Link } from "react-router-dom";
import registrationImg from "../assets/icons/lg/side-image.svg";
import { RegistrationHeader, RegistrationInput } from "../components";
import { useState } from "react";
export function LogInPage() {
  const [errMsg, serErrMsg] = useState("");
  return (
    <div className="registration_wrapper">
      <img className="registration_img" src={registrationImg} />
      <form className="registration_form" name="login">
        <RegistrationHeader heading="Log in to Exclusive" errMsg={errMsg} />
        <RegistrationInput label="Email or Phone Number" type="email" />
        <RegistrationInput label="Password" type="password" />
        <div className="login_btns">
          <button className="btn-primary">Log In</button>
          <Link className="forget-password">Forget Password?</Link>
        </div>
      </form>
    </div>
  );
}
