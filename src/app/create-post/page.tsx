"use client";
import Form, { IFormData } from "@/components/Form/Form";
import LoginButton from "@components/LoginButton/LoginButton";
import { AuthContext } from "@context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useContext(AuthContext);
  const handleSubmitForm = async (dataForm: IFormData) => {
    setLoading(true);
    try {
      setTimeout(async () => {
        await fetch("api/posts/create", {
          method: "POST",
          body: JSON.stringify({
            title: dataForm.titlePost,
            shorten: dataForm.shortDescPost,
            content: dataForm.mainContentPost,
          }),
        });
        toast("Create Post Success", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          type: "success",
        });
        router.push("/");
        setLoading(false);
      }, 3000);
    } catch (error: any) {
      setLoading(false);
      toast("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        type: "error",
      });
      return new Error("Error", error);
    }
  };

  return (
    <div>
      {auth ? (
        <>
          {loading ? (
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              height={200}
              width={200}
              src="/assets/images/loading.gif"
              alt="loading"
            />
          ) : (
            <></>
          )}
          <Form typeForm="create" onSubmitForm={handleSubmitForm} />
        </>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default CreatePost;
