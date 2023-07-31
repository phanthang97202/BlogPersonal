import Post from "@/models/Post";
import { connectToDatabase } from "@/utils/database";
// import { headers } from "next/dist/client/components/headers";

export const GET = async (request: any, response: any) => {
  try {
    await connectToDatabase();
    const { Authorization } = request.headers;
    // console.log(
    //   "\n\n\n===========authorization",
    //   request.headers.authorization?.split(" ")[0]
    // );
    // const decodedToken = await admin
    //   .auth()
    //   .verifyIdToken(process.env.NEXT_PUBLIC_TOKEN as string);
    // console.log("decodedToken", decodedToken);

    const posts = await Post.find({});
    return new Response(
      JSON.stringify({
        Data: posts,
        authorization: "fsfs",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(`Failed create new prompt \n ${error} `, {
      status: 500,
    });
  }
};
