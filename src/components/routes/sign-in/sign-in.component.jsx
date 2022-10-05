// Bring in signInWithGooglePopup method from
import { signInWithGooglePopup } from "../../../utilities/firebase/firebase.utility";
import { createUserDocumentFromAuth } from "../../../utilities/firebase/firebase.utility";

const SignIn = () => {
  // Create async function. WHy? whenever you make a call to some database, this is going to be asynchronous.
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);
    const { user } = await signInWithGooglePopup(); // destructuring to get only user in the response
    const userDocRef = await createUserDocumentFromAuth(user); // need to use await because the method is asyncronious
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
