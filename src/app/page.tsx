"use client";
import LoginButton from "@components/LoginButton/LoginButton";
import ViewBlog from "@components/ViewBlog/ViewBlog";
import { AuthContext } from "@context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const authUser = useContext(AuthContext);
  return (
    <>
      {authUser ? (
        <div>
          <p>Welcome to my blog </p>
          <ViewBlog />
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoginButton />
        </div>
      )}
    </>
  );
}
