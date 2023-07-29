"use client";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const LoginButton = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);

  return (
    <button className="nav-link btn-primary" onClick={() => signInWithGoogle()}>
      Login with Google
    </button>
  );
};

export default LoginButton;
