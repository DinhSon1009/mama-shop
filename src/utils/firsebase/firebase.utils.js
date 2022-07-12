import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnNXCEzJEfwJANrY5nad_kTmdOyovXhxg",
  authDomain: "mama-shop-db.firebaseapp.com",
  projectId: "mama-shop-db",
  storageBucket: "mama-shop-db.appspot.com",
  messagingSenderId: "24947741987",
  appId: "1:24947741987:web:b1212ee4f2da2b51ca2896",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// fireStore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //   console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  //   console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }

    return userDocRef;
  }
  //if user data doesn't exist
  //create / set the document with the data from userAuth in my collection

  //if user data exists

  //return userDocRef
};
