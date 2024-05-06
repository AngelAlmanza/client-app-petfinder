import dogAndCat from "../assets/images/dog-and-cat-banner.png";
import { Numbermessages } from "../components/numbermessages"
export const Chats = () => {


  return (
    <div className="inline-flex items-center relative md:w-4/5">
      <div>
        <img src={dogAndCat} alt="PetFinder Logo" className="w-16 md:w-36" />
      </div>
      <div className="inline-flex flex-col">
        <div>
          <p className="text-base md:text-2xl font-medium text-text-primary-color">Nombre de usuario</p>
        </div>
        <div>
          <p className="text-sm md:text-xl text-text-primary-color">Encontre a tu mascota amigo...</p>
        </div>
      </div>
      <div className="absolute top-2 -right-16">
        <Numbermessages />
      </div>
    </div>
  )
}
