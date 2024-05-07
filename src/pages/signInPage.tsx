import { InitialPageCircleFooter } from "../components/InitialPageCircleFooter"
import { TextInput } from "../components/inputs/TextInput"
import dogAndCat from "../assets/images/dog-and-cat-banner.png"
import dogBanner from "../assets/images/dog-banner.jpg"
import birdBanner from "../assets/images/bird-banner.jpg"
import { useForm } from "../hooks/useForm"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { login } from "../store/thunks/authThunks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const SignInPage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.auth.token);
  const navigate = useNavigate();

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    dispatch(login({ email, password }))
  };

  useEffect(() => {
    if (token.length > 0) {
      navigate('/home');
    }
  }, [token, navigate]);

  return (
    <>
      <div
        className="w-screen h-screen pt-10 min-h-screen gradient-background overflow-hidden md:px-28  "
      >
        <div className="px-4 w-100">
          <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-center text-white text-4xl font-normal">PetFinder</h1>
            <img src={dogAndCat} alt="PetFinder Logo" className="-mt-14 md:-mt-14" />
          </div>
          <div className="w-100 -mt-16 h-36 flex flex-col justify-evenly items-center md:w-200 ">
            <TextInput
              placeholder="Correo Electronico"
              iconName="email"
              onChange={(value) => onChange('email', value)}
            />
            <TextInput
              placeholder="Contraseña"
              iconName="password"
              onChange={(value) => onChange('password', value)}
            />
          </div>
          <div className="w-100 mb-4">
            <p className="text-sm md:text-2xl text-center text-white font-medium">Rescata, adopta, ama: ¡Un gesto que transforma vidas!</p>
          </div>
        </div>
        <InitialPageCircleFooter onSubmit={onSubmit} />
      </div>
      <div className="bg-white">
        <h2 className="text-center text-base md:text-xl font-bold my-4 text-text-primary-color">¿Perdiste a tu mascota?</h2>
        <p className="text-base md:text-lg font-normal text-justify text-text-primary-color px-10">
          ¡Lo entendemos! perder a tu compañero puede ser angustiante,
          pero estamos aquí para ayudarte a reunirte lo antes posible.
          Utiliza nuestro apartado de <b>mascotas perdidas</b> para aumentar
          las posibilidades de encontrar a tu amigo de vida.
        </p>
        <img src={dogBanner} alt="Dog banner" className="w-100 object-cover mt-4" />
        <h2 className="text-center text-base md:text-xl font-bold my-4 text-text-primary-color">Encuentra a tu compañero ideal</h2>
        <p className="text-base font-normal md:text-lg text-justify text-text-primary-color px-10">
          ¿Estás buscando sumar un nuevo miembro a tu familia?
          ¡Nuestro servicio de adopción de mascotas te ayuda a encontrar el compañero
          perfecto que se adapte a tu estilo de vida y personalidad!
        </p>
        <img src={birdBanner} alt="Dog banner" className="w-100 object-cover mt-4" />
      </div>
      <div className="bg-black flex justify-center items-center py-2">
        <img src={dogAndCat} alt="PetFinder Logo" className="w-8 rounded-full md:w-16 md:-mt-4 " />
        <p className="text-white text-base md:text-2xl md:-mt-4">PetFinder</p>
      </div>
    </>
  )
}
