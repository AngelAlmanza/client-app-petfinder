import { faEllipsis, faUser, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { PostButton } from "./buttons/PostButton";

type Props = {
  username: string,
  description: string,
  postImage?: string,
  altImage?: string
  buttonByPublish: ReactNode,
  styles?: React.CSSProperties
}

export const PetPost = ({ username, description, postImage, altImage, buttonByPublish, styles }: Props) => {
  const [opacityButton, setOpacityButton] = useState<string>('opacity-0');

  const hideButton = () => {
    if (opacityButton === 'opacity-0') {
      setOpacityButton('opacity-100')
    } else {
      setOpacityButton('opacity-0')
    }
  };

  return (
    <a
      className="w-full rounded-2xl bg-white shadow p-1 flex flex-col no-underline"
      href="/post-details"
      style={styles}
    >
      {
        postImage && (
          <img
            src={postImage} alt={altImage}
            className="w-full h-52 object-cover rounded-2xl"
          />
        )
      }
      <div className="px-2">
        <div className="w-100 flex justify-between items-center my-3 relative">
          <div>
            <FontAwesomeIcon icon={faUser} className="text-text-primary-color text-xl" />
            <span className="ml-2 text-sm font-medium text-text-primary-color">{ username }</span>
          </div>
          <button onClick={hideButton}>
            <FontAwesomeIcon icon={faEllipsis} className="text-text-primary-color text-xl" />
          </button>
          <div className={`absolute right-0 top-4 transition-all ${opacityButton}`} >
            <button className="bg-primary-gray rounded-lg shadow-md py-2 px-4 flex items-center">
              <FontAwesomeIcon icon={faFlag} className="text-danger-color text-xl" />
              <span className="inline-block ml-2 font-medium text-sm text-text-primary-color">Reportar</span>
            </button>
          </div>
        </div>
        <p className="mb-4 text-text-primary-color text-sm overflow-hidden h-14 line-clamp-3">
          { description }
        </p>
        <div className="flex justify-between items-center my-2">
          { buttonByPublish }
          <PostButton onClick={() => {}} type="more" />
        </div>
      </div>
    </a>
  )
}
