import { useState } from "react";

import { FormInput } from "/Users/wonseokkim/complete-react/clothing-shop/src/components/form-input/form-input.component.jsx";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utility";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // const [name,setName] = useState("")
  // const [email,setemail] = useState("")
  // const [password1,setPassword1] = useState("")
  // const [password2,setPassword2] = useState("")

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields; // desctructuring

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //it is an async method because we're generating a user document inside of an external service
  const handleSubmit = async (event) => {
    event.preventDefault(); // to prevent the page from refreshing when the form is submitted.

    //  To get the input values on form submit, we simply access the state variables.
    if (password != confirmPassword) {
      alert("password is not matching");
      return;
    }

    try {
      //   const response = await createAuthUserWithEmailAndPassword(
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log("Authentication error occurred", error);
    }

    // 1. password matches
    // 2. authenticate email with password
    // 3. using createAuthUserWithEmailAndPassword to store data
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // desctructruing to identify where is the change coming from
    setFormFields({ ...formFields, [name]: value }); //spread object to keep the rest of the keys with info and then modify one value on this object.
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
