"use client";
import Form, { IFormData } from "@/components/Form/Form";
import CircleLoading from "@components/CircleLoading";
import LoginButton from "@components/LoginButton/LoginButton";
import { AuthContext } from "@context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { createPostHttp } from "@utils/httpsRequest";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const CreatePost = () => {
  const router = useRouter();
  const authUser: any = useContext(AuthContext);

  const addPostMutation = useMutation({
    mutationFn: async (body: IFormData) => {
      const resp = await createPostHttp(
        "api/posts/create",
        authUser,
        body,
        `Failed to created`
      );
      return resp;
    },
  });

  const handleSubmitForm = async (dataForm: IFormData) => {
    try {
      addPostMutation.mutate(dataForm);
      router.push("/");
      // reset data và error
      // addPostMutation.reset()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {authUser ? (
        <>
          {addPostMutation.isLoading ? <CircleLoading /> : <></>}
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
