import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
// Used for google redirect
// import {
//   auth,
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  // Used for google redirect
  // useEffect(
  //   () => async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       const userDocRef = await createUserDocumentFromAuth(res.user);
  //       console.log(userDocRef);
  //     }
  //   },
  //   []
  // );

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* 
      Example of how to use google redirect
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
    </div>
  );
};

export default SignIn;
