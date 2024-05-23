import { Image } from "../interfaces/PostInterfaces";
import imageNotFound from "../assets/images/image-not-found.jpeg";

export const getPostImage = (post: Image[]) => {
  if (!post || post.length === 0) {
    return imageNotFound;
  } else if (!post[0].base64_url) {
    return imageNotFound;
  } else {
    return post[0].base64_url;
  }
};