import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
