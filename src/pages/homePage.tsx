import { useEffect, useState } from "react";
import { PetPost } from "../components/PetPost"
import { TextAreaCreatePost } from "../components/TextAreaCreatePost";
import { PostButton } from "../components/buttons/PostButton";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPosts } from "../store/thunks/postThunks";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const [newPostText, setNewPostText] = useState<string>("");
  const { posts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <section className="mb-4 md:px-6 md:ml-1">
        <TextAreaCreatePost value={newPostText} onChange={setNewPostText} />
      </section>
      <section className="grid grid-cols-1 gap-4">
        {
          posts.map(post => (
            <PetPost
              key={post.id}
              id={post.id}
              buttonByPublish={<PostButton onClick={() => {}} type="lost" />}
              username={post.user.profile.name}
              postImage="https://via.placeholder.com/150"
              altImage={`${post.title} post image`}
              description={post.content}
            />
          ))
        }
      </section>
    </>
  )
};
