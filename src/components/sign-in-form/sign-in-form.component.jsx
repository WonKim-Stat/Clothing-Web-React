import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utilities/firebase/firebase.utility";
import { createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utility";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields; // desctructuring

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // const { user } = await signInWithGooglePopup(); // destructuring to get only user in the response
    // await createUserDocumentFromAuth(user); // need to use await because the method is asyncronious
    // |=> move into onAuthStateChangedListner
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signAuthUserWithEmailAndPassword(email, password);

      //   setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("user-not-found");
          break;
        default:
          console.log(error);
      }
      //     if (error.code === "auth/wrong-password") {
      //         alert('incorrect password for email')
      //     } else if ///
      //   console.log("Authentication error occurred", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={() => {}}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="passwordemail"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
