"use client";
import LoginButton from "@components/LoginButton/LoginButton";
import ViewBlog from "@components/ViewBlog/ViewBlog";
import { auth } from "@config/firebase";
import { AuthContext } from "@context/AuthContext";
import { getAuth } from "@firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export default function Home() {
  const authUser: any = useContext(AuthContext);
  console.log("🚀 ~ file: page.tsx:9 ~ Home ~ authUser:", authUser);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["signinuser", authUser],
    queryFn: async () => {
      const resp = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: authUser.auth.currentUser.email,
          fullname: authUser.auth.currentUser.displayName,
          avatar:
            authUser.auth.currentUser.photoURL ??
            "https://99px.ru/sstorage/53/2019/10/mid_275139_500880.png",

          createdAt:
            authUser.metadata.createdAt !== null
              ? authUser.metadata.createdAt
              : Date.now(),
          lastLoginAt:
            authUser.metadata.lastLoginAt !== null
              ? authUser.metadata.lastLoginAt
              : Date.now(),
        }),
        headers: {
          Authorization: `Bearer ${
            authUser.auth.currentUser.accessToken ?? ""
          }`,
        },
      });
      return await resp.json();
    },
    enabled: true,
  });

  return (
    <div className=" ">
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
    </div>
  );
}
