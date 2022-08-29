import React from "react";
import {
  createUserDocFromAuth,
  googleSignInWithPopup,
} from "../../Utility/Firebase/Firebase";

const SignIn = () => {
  const signInGoogleUser = async () => {
    const { user } = await googleSignInWithPopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>This is sign in</h1>
      <button onClick={signInGoogleUser}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;
