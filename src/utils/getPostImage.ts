import { Image } from "../interfaces/PostInterfaces";

export const getPostImage = (post: Image[]) => {
  if (post.length === 0) return "https://via.placeholder.com/150";
  return post[0].base64_url;
};