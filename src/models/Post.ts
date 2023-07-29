import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    unique: [true, "Title post is exists !!!"],
    require: [true, "Title post is required"],
  },
  shorten: {
    type: String,
    require: [true, "Short title post is required"],
  },
  content: {
    type: String,
    require: [true, "Content post post is required"],
  },
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
