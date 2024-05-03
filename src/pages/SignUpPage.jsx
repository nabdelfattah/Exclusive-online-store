import { Link } from "react-router-dom";
import registrationImg from "../assets/icons/lg/side-image.svg";
import googleIcon from "../assets/icons/google.svg";
import { RegistrationHeader, RegistrationInput } from "../components";

export function SignUpPage() {
  return (
    <div className="registration_wrapper">
      <img className="registration_img" src={registrationImg} />
      <form className="registration_form" name="signup">
        <RegistrationHeader heading="Create an account" />
        <RegistrationInput label="Name" type="text" />
        <RegistrationInput label="Email or Phone Number" type="email" />
        <RegistrationInput label="Password" type="password" />
        <div className="signup-btns">
          <button className="btn-primary">Create Account</button>
          <button className="btn-outline">
            <img src={googleIcon} />
            Sign up with Google
          </button>
          <p className="registration_redirectionText">
            Already have account? <Link to="login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
