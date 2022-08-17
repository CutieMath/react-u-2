import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(
    () => async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        const userDocRef = await createUserDocumentFromAuth(res.user);
        console.log(userDocRef);
      }
    },
    []
  );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button>
    </div>
  );
};

export default SignIn;
