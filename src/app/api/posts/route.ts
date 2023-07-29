import Post from "@/models/Post";
import { connectToDatabase } from "@/utils/database";

export const GET = async (request: any) => {
  try {
    await connectToDatabase();

    const posts = await Post.find({});
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(`Failed create new prompt \n ${error} `, {
      status: 500,
    });
  }
};
