import { useNavigate } from "react-router-dom"
import { PostButton } from "./buttons/PostButton"
import { PrivateRoutes } from "../constants/routes"
import { ExtraPostType } from "../enums/publicationTypes"

type Props = {
  value: string
  onChange: (value: string) => void
}

export const TextAreaCreatePost = ({ value, onChange }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-100 rounded-2xl shadow-sm bg-white h-fit">
      <textarea
        className="md:text-lg md:h-18  w-full p-4 rounded-2xl resize-none h-100 outline-none lg:text-2xl"
        placeholder="Perdiste a tu mascota? Publica aquí!"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        rows={2}
      />
      <div className="w-100 p-2 flex justify-end lg:mr-4">
        <PostButton
          onClick={() => navigate(PrivateRoutes.CREATE_POST_PAGE)}
          text="Publicar"
          type={ExtraPostType.more}
        />
      </div>
    </div>
  )
}
