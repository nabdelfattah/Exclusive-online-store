import { Link, useNavigate } from "react-router-dom";
import registrationImg from "../assets/icons/lg/side-image.svg";
import googleIcon from "../assets/icons/google.svg";
import { RegistrationHeader, RegistrationInput } from "../components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { validateSignUp } from "../helper";
// import

export function SignUpPage() {
  const [errMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const { signup, user } = useContext(UserContext);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (user) navigateTo("/");
  }, []);

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
          "Faild to create an account. Perhaps someone is already using the email."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrMsg(validationResult.errors[0]);
    }
  }

  return (
    <div className="registration_wrapper">
      <img className="registration_img" src={registrationImg} />
      <form
        className="registration_form"
        name="signup"
        onSubmit={signupHandler}
      >
        <RegistrationHeader heading="Create an account" errMsg={errMsg} />
        <RegistrationInput label="Name" type="text" name="name" />
        <RegistrationInput
          label="Email or Phone Number"
          type="email"
          name="email"
        />
        <RegistrationInput label="Password" type="password" name="password" />
        <div className="signup-btns">
          <button disabled={IsLoading} className="btn-primary">
            Create Account
          </button>
          <button disabled={IsLoading} className="btn-outline" type="button">
            <img src={googleIcon} />
            Sign up with Google
          </button>
          <p className="registration_redirectionText">
            Already have account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
