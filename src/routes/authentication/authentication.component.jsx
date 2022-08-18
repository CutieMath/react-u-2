import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

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
      <SignInForm />
      <SignUpForm />
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button>
    </div>
  );
};

export default SignIn;
