
import { TextInput } from "../components/inputs/TextInput";
import dogAndCat from "../assets/images/dog-and-cat-banner.png";
import RegisterButton from "../components/buttons/RegisterButton";

export const RegisterPage = () => {
    return (
        <>
            <div className="w-screen h-screen pt-10 min-h-screen gradient-background overflow-hidden">
                <div className="px-4">
                    <div className="w-full flex justify-center items-center flex-col">
                        <h1 className="text-center text-white text-4xl font-normal">PetFinder</h1>
                        <img src={dogAndCat} alt="PetFinder Logo" className="-mt-14" />
                    </div>
                    <div className="-mt-16 h-36 flex flex-col justify-evenly items-center">
                        <div className="mb-2">
                            <TextInput placeholder="Nombre(s)" iconName="email" />
                        </div>
                        <div className="mb-2">
                            <TextInput placeholder="Apellidos" iconName="email" />
                        </div>
                        <div className="mb-2">
                            <TextInput placeholder="Correo Electrónico" iconName="email" />
                        </div>
                        <div className="mb-2">
                            <TextInput placeholder="Contraseña" iconName="password" />
                        </div>
                    </div>
                    <div className="mt-20">
                        <p className="text-sm text-center text-white font-medium mt-10">· Minimo debe contener 8 letras</p>
                        <p className="text-sm text-center text-white font-medium mt-3">· Utiliza por lo menos 1 mayuscula</p>
                        <p className="text-sm text-center text-white font-medium mt-3">· Utiliza por lo menos 1 numero</p>
                    </div>
                    <RegisterButton  text="Registrar"/>
                </div>
            </div>
            <div className="bg-black flex justify-center items-center py-2">
                <img src={dogAndCat} alt="PetFinder Logo" className="w-8 rounded-full" />
                <p className="text-white text-base">PetFinder</p>
            </div>
        </>
    );
};
