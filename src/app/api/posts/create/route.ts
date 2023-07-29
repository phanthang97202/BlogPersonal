import Post from "@/models/Post";
import { connectToDatabase } from "@/utils/database";

export const POST = async (request: any) => {
  const { title, shorten, content } = await request.json();

  try {
    await connectToDatabase();

    const newPost = await Post.create({
      title,
      shorten,
      content,
    });

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(`Failed create new prompt \n ${error} `, {
      status: 500,
    });
  }
};
