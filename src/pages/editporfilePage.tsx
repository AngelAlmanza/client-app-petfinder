import { TextInputCity } from "../components/inputs/TextInputCity";
import { TextInputEmail } from "../components/inputs/TextInputEmail";
import { PencilEditButton } from "../components/buttons/EditpincelButton";
import { BackButton } from "../components/buttons/BackButton"
import EditdateButton from "../components/buttons/EditdateButton";
import DeletaccountButton from "../components/buttons/DeleteaccountButton";
import SignoffButton from "../components/buttons/SignoffButton";
import Usericon from "../assets/images/icon-user.png"

export const EditporfilePage = () => {

    return (
        <div className="flex flex-col items-center relative">
            <div className="flex justify-between items-center mr-4 md:mr-80 lg:mr-0">
                <div className="mr-28 md:mr-72 w-2 lg:hidden">
                    <BackButton />
                </div>
                <div className="text-xl md:text-3xl">
                    <div className="flex-1 text-center">
                        <p className="text-xl md:text-3xl font-bold text-text-primary-color lg:mb-5 lg:text-4xl">Editar perfil</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full">
            <div className="absolute gradient-background overflow-hidden top-0 right-0 h-24 md:h-40 lg:h-60 w-full"></div>
                <div className="absolute bottom-7 right-8 -mb-36 md:-bottom-12 mr-0 lg:-bottom-32">
                    <PencilEditButton />
                </div>
            </div>
            <div className="relative flex justify-center mt-8">
                <img src={Usericon} alt="User Icon" className="drop-shadow-xl w-24 h-24 md:w-40 mt-4 md:h-40 lg:w-1/4 lg:h-1/4" />
                <div className="absolute bottom-0 right-2 -mb-1 md:-mb-2 md:mr-1 lg:absolute lg:right-2/4 lg:-mr-28">
                    <PencilEditButton />
                </div>
            </div>
            <div>
                <p className="text-center text-text-primary-color font-medium text-lg md:text-3xl mt-3 mb-5">Nombre del Usuario</p>
            </div>
            <div>
                <p className="text-left text-primary-color font-bold text-xl md:text-2xl">Datos personales:</p>
            </div>
            <div className="mb-8 mt-4">
                <TextInputCity />
            </div>
            <div>
                <TextInputEmail />
            </div>
            <div>
                <EditdateButton text="Editar Datos" />
            </div>
            <div>
                <DeletaccountButton text="Eliminar cuenta" />
            </div>
            <div>
                <SignoffButton text="Cerrar sesión" />
            </div>
        </div>
    )
}
