import { initializeApp } from "firebase/app"; //f'irebase/what you want to pull in'
import {
  getAuth, // Create auth instance
  signInWithRedirect, // siginig with redirected page
  signInWithPopup, // signing with pop-up
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore, // instantiate firestore instance
  doc, // the method allows us to retrieve document instance.
  getDoc, // access doc
  setDoc, // set doc
  collection, // collection to get referece of collection
  writeBatch,
  query,
  getDocs,
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
// Anonymous function return signInWithRedirect passing (auth , provider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
// ----------------------------------------------------------------------------

// database
export const db = getFirestore();

// function that will take that data we're getting from the authentication service, and then we're going to store that inside of fire store.
// export const createUserDocumentFromAuth = async (userAuth) => {
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {} // empty object by default
) => {
  if (!userAuth) return; // If we don't receive userAuth info, exits.
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
        ...additionalInformation,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create User/ Email is already in use");
      }
      console.log("error created", error.message);
    }
  }

  return userDocRef;
};

// the below is called 'Helper function'

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // if i don't either receive email or password, exit

  return await createUserWithEmailAndPassword(auth, email, password); // will return auth object
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // if i don't either receive email or password, exit

  return await signInWithEmailAndPassword(auth, email, password); // will return auth object
};

export const SignoutUser = async () => await signOut(auth);

// We will use this to centralize the user in/out.
//onAuthStateChanged you need to give callback function for this.
// it will call this callback whenever the auth changes. (sign-in or sign-out)
export const onAuthStateChangedListner = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};

// creating a method that allows us to upload these categories from that shop data
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  // want to add objectsToAdd into reference
  const batch = writeBatch(db);
  // create set events
  objectsToAdd.forEach((object) => {
    // get doc reference
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
