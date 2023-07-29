"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import CardBlog from "./CardBlog";
import { AuthContext } from "@context/AuthContext";

const ViewBlog = () => {
  const authUser = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["newPost", authUser],
    queryFn: async () => {
      const resp = await fetch("api/posts");
      return await resp.json();
    },
  });
  console.log("data", data);
  return (
    <div>
      <CardBlog dataPosts={data}></CardBlog>
    </div>
  );
};

export default ViewBlog;
