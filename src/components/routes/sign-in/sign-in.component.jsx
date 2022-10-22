// Bring in signInWithGooglePopup method from
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utilities/firebase/firebase.utility";
import { createUserDocumentFromAuth } from "../../../utilities/firebase/firebase.utility";
import SignInForm from "../../sign-in-form/sign-in-form.component";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";

// import "./sign-in.styles.jsx";
import { AuthContainer } from "./sign-in.styles";

const SignIn = () => {
  // when the function mount for the first time
  // Inside of the useEffect() you cannot use async()=> {}, but async function something() {}

  // Create async function. WHy? whenever you make a call to some database, this is going to be asynchronous.
  // const logGoogleUser = async () => {
  //   // const response = await signInWithGooglePopup();
  //   // console.log(response);
  //   const { user } = await signInWithGooglePopup(); // destructuring to get only user in the response
  //   const userDocRef = await createUserDocumentFromAuth(user); // need to use await because the method is asyncronious
  // };

  return (
    <AuthContainer>
      <SignInForm />
      {/* <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button> */}
      <SignUpForm />
    </AuthContainer>
  );
};

export default SignIn;
