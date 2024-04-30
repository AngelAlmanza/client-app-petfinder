import { useEffect, useState } from "react";
import { PetPost } from "../components/PetPost"
import { TextAreaCreatePost } from "../components/TextAreaCreatePost";
import { PostButton } from "../components/buttons/PostButton";
import { MainLayout } from "../layouts/MainLayout";
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
    <MainLayout>
      <section className="mb-4">
        <TextAreaCreatePost value={newPostText} onChange={setNewPostText} />
      </section>
      <section className="grid grid-cols-1 gap-4">
        {
          posts.map(post => (
            <PetPost
              key={post.id}
              buttonByPublish={<PostButton onClick={() => {}} type="lost" />}
              username="Username"
              postImage="https://via.placeholder.com/150"
              altImage="Post image"
              description={post.content}
            />
          ))
        }
      </section>
    </MainLayout>
  )
}
