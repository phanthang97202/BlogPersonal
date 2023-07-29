"use client";
import React from "react";
import Link from "next/link";
// export interface ResponsePostData {
//   content: string;
//   shorten: string;
//   title: string;
// }[]
// interface IProps {
//   dataPost: Object[];
// }
const CardBlog = ({ dataPosts }: any) => {
  console.log("===dataPosts", dataPosts);
  return (
    <>
      {dataPosts ? (
        dataPosts.map((p: any) => {
          return (
            <div key={p._id} className="border outline-slate-900 p-4">
              <h2 className="text-violet-600 text-2xl">#{p.title}</h2>
              <p className="italic text-[16px]">{p.shorten}...</p>
              <Link href={`/view-post/${p._id}`}>View Post ➡ </Link>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default CardBlog;
