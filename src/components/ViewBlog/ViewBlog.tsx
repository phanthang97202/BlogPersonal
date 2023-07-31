"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import CardBlog from "./CardBlog";
import { AuthContext } from "@context/AuthContext";
import CircleLoading from "@components/CircleLoading";
import { getPostHttp } from "@utils/httpsRequest";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";

const ViewBlog = () => {
  const authUser: any = useContext(AuthContext);
  const { data, isLoading, refetch, isSuccess } = useQuery({
    queryKey: ["newPost", authUser],
    queryFn: async () => {
      const resp = await getPostHttp(
        "api/posts",
        authUser,
        "Failed to get all posts"
      );
      console.log("===resp", resp);

      return resp;
    },
    enabled: true,
  });
  return (
    <div>
      {isLoading ? (
        <CircleLoading />
      ) : (
        <CardBlog dataPosts={data?.data?.Data ?? []}></CardBlog>
      )}
    </div>
  );
};

export default ViewBlog;
