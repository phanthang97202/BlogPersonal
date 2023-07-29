"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@context/AuthContext";
import { useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "@firebase/auth";
import { auth } from "@config/firebase";
import LoginButton from "@components/LoginButton/LoginButton";

const RouterLink = () => {
  const authUser = useContext(AuthContext);
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <div className="flex justify-between">
      <div className="flex">
        {authUser ? (
          <>
            <Link className="nav-link" href="./">
              Home
            </Link>
            <Link className="nav-link" href="./create-post">
              Create Post
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex mx-5">
        {authUser ? (
          <>
            <button
              className="nav-link"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
            <Image
              src={authUser?.photoURL}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RouterLink;
