import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/utils/firebase/firebase.utils.js";

import { googleSignInStart } from "../../store/user/user.action";

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

  const handleChange = (event) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);
      reset();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong-password");
          break;
        case "auth/user-not-found":
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
