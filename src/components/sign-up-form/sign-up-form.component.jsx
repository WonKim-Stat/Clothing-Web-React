import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/utils/firebase/firebase.utils.js";

import { signUpStart } from "../../store/user/user.action";

// import { UserContext } from "../../contexts/user.context";

// import "./sign-up-form.styles.scss";
import { SignUpContainer } from "./sign-up-form.sityles";

import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const reset = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("the password is not matched, please try again");
      return; // exit
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      // const { user } =

      // await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // // setCurrentUser(user);

      // await createUserDocumentFromAuth(user, { displayName });
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
