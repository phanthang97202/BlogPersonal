"use client";

import { auth } from "@config/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
export interface IChildrenProp {
  children: React.ReactNode;
}
export const AuthContext = createContext();
const AuthLogin = ({ children }: IChildrenProp) => {
  // const provider = new GoogleAuthProvider();
  let [loggedInUser, loading, _error] = useAuthState(auth);

  console.log(loggedInUser);
  return (
    <AuthContext.Provider value={loggedInUser}>{children}</AuthContext.Provider>
  );
};
export default AuthLogin;
