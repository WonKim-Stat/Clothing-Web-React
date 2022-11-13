import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";

import { AuthError, AuthErrorCodes } from "firebase/auth";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/utils/firebase/firebase.utils.js";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

// import "./sign-in-form.styles.jsx";

import { SignInContainer, ButtonContainer } from "./sign-in-form.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const reset = () => {
    setFormFields(defaultFormFields);
  };

  // sign in with google pop-up
  const logGoogleUser = async () => {
    // await signInWithGooglePopup();
    dispatch(googleSignInStart());

    // const { user } = await signInWithGooglePopup();
    // const userDocRef = createUserDocumentFromAuth(user);
    // setCurrentUser(user);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));

      // setCurrentUser(user);
      reset();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("wrong-password");
          break;
        case AuthErrorCodes.USER_MISMATCH:
          alert("auth/user-not-found");
          break;
      }
    }
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in wiht your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In with Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
