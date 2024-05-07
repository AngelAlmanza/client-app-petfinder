import { PostButton } from "./buttons/PostButton"

type Props = {
  value: string
  onChange: (value: string) => void
}

export const TextAreaCreatePost = ({ value, onChange }: Props) => {
  return (
    <div className="w-100 rounded-2xl shadow-sm bg-white h-fit">
      <textarea
        className="md:text-lg md:h-18  w-full p-4 rounded-2xl resize-none h-100 outline-none"
        placeholder="Perdiste a tu mascota? Publica aquí!"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        rows={2}
      />
      <div className="w-100 p-2 flex justify-end">
        <PostButton
          onClick={() => {}}
          text="Publicar"
          type="more"
        />
      </div>
    </div>
  )
}
