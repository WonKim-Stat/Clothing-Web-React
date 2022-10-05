import { initializeApp } from "firebase/app"; //f'irebase/what you want to pull in'
import {
  getAuth, // Create auth instance
  signInWithRedirect, // siginig with redirected page
  signInWithPopup, // signing with pop-up
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore, // instantiate firestore instance
  doc, // the method allows us to retrieve document instance.
  getDoc, // access doc
  setDoc, // set doc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79uUMYw2P3VGFzZxp3Svg7I03afPpF3c",
  authDomain: "crown-clothing-db-fa30d.firebaseapp.com",
  projectId: "crown-clothing-db-fa30d",
  storageBucket: "crown-clothing-db-fa30d.appspot.com",
  messagingSenderId: "903549777510",
  appId: "1:903549777510:web:2f2a8939dfe90608a55fa7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Provider using GoogleAuthProvider class
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
// setCustomParameters() will take some kind of configuration object{} and
// we tell different ways that we want this Google auth provider to behave.
// So what this means is that every time somebody interacts with our provider, we want to always force them to select an account.

// export our authentication, we need to create the instance and then we also need to export out.
export const auth = getAuth();
// Anonymous function return signInWithPopup passing (auth , provider)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// ----------------------------------------------------------------------------

// database
export const db = getFirestore();

// function that will take that data we're getting from the authentication service, and then we're going to store that inside of fire store.
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // Arguments (database, user collection, ID)
  // Notice that this is reference pointing to the unique id of the data in order to set the data from there.
  //   console.log(userAuth);
  //   console.log(userDocRef);

  const userSnapShop = await getDoc(userDocRef);
  console.log(userSnapShop);
  console.log(userSnapShop.exists()); // gives boolean value to check whether it exists in the database.

  // if userSnapShop.exists()) exists
  if (!userSnapShop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Set the doc with {that objects}
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error created", error.message);
    }
  }

  return userDocRef;
};
