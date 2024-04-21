import { useState } from "react";
import { PetPost } from "../components/PetPost"
import { TextAreaCreatePost } from "../components/TextAreaCreatePost";
import { PostButton } from "../components/buttons/PostButton";
import { MainLayout } from "../layouts/MainLayout";

const TEXT_TEST = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, reiciendis! Dolore vero ad delectus consectetur distinctio laboriosam labore amet explicabo adipisci iste, error accusamus eveniet non eius nisi? Recusandae, maxime? Mollitia corporis facere accusamus omnis assumenda saepe modi cupiditate sequi, aperiam sed officiis ut eius cum excepturi vero culpa quo et totam sunt consequatur reiciendis placeat. Officiis molestiae error provident. Dolore ratione quod possimus sequi quidem eum corrupti dolor dignissimos, quo culpa impedit nisi laborum nostrum molestias sint nobis itaque dolorum voluptas odio perspiciatis ipsum beatae? Fuga voluptatum ea sit.";

export const HomePage = () => {
  const [newPostText, setNewPostText] = useState<string>("");

  return (
    <MainLayout>
      <section className="mb-4">
        <TextAreaCreatePost value={newPostText} onChange={setNewPostText} />
      </section>
      <section className="grid grid-cols-1 gap-4">
        <PetPost
          buttonByPublish={<PostButton onClick={() => {}} type="lost" />}
          username="Username"
          postImage="https://via.placeholder.com/150"
          altImage="Post image"
          description={TEXT_TEST}
        />
        <PetPost
          buttonByPublish={<PostButton onClick={() => {}} type="inAdoption" />}
          username="Username"
          description={TEXT_TEST}
        />
      </section>
    </MainLayout>
  )
}
