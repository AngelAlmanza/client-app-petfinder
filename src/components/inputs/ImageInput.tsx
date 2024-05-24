import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleImageChangeBase64: (data: string) => void
}

export const ImageInput = ({ value, name, onChange, handleImageChangeBase64 }: Props) => {
  const inputImage = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string>('');

  const onImageClick = () => {
    inputImage.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    onChange(e);
  };

  useEffect(() => {
    handleImageChangeBase64(imageSrc)
  }, [imageSrc, handleImageChangeBase64]);

  return (
    <div className="w-100 my-4 md:px-24 lg:px-20 lg:my-11 ">
      {
        value.length > 0
          ? (
            <div
              className="w-full h-52 md:h-60 lg:h-96 mb-2 bg-gray-400 rounded-2xl flex justify-center items-center cursor-pointer overflow-hidden"
              onClick={onImageClick}
            >
              <img
                src={imageSrc}
                alt="Imagen de la publicación"
                className="object-cover rounded-2xl"
              />
            </div>
          )
          : (
            <div
              className="w-full h-52 md:h-60 lg:h-96 mb-2 bg-gray-400 rounded-2xl flex justify-center items-center cursor-pointer"
              onClick={onImageClick}
            >
              <FontAwesomeIcon icon={faImage} className="text-4xl text-text-primary-color " />
            </div>
          )
      }
      <input
        ref={inputImage}
        type="file"
        className="hidden"
        accept="image/*"
        name={name}
        value={value}
        onChange={handleImageChange}
      />
    </div>
  )
}