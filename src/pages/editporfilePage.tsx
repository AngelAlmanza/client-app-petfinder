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
            <div className="flex justify-between items-center mr-4">
                <div className="mr-28 w-1"> {/* Agregamos margen a la derecha para separar el botón del título */}
                    <BackButton />
                </div>
                <div className=" text-xl">
                    <div className="flex justify-center">
                        <p className="py-4 mr-16 w-40 bg-white font-bold text-text-primary-color">Editar perfil</p>
                    </div>
                </div>
            </div>
            <div className="relative w-screen">
                <div className="absolute gradient-background overflow-hidden top-0 right-0 h-32 w-screen">

                </div>
                <div className="absolute bottom-0 right-8 -mb-36 mr-0">
                    <PencilEditButton />
                </div>
            </div>
            <div className="relative">
                <div className="">
                    <img src={Usericon} alt="PetFinder Logo" className="mt-8 drop-shadow-xl" />
                </div>
                <div className="absolute bottom-0 right-20 mb-3 mr-0">
                    <PencilEditButton />
                </div>
            </div>

            <div>
                <p className="text-center text-text-primary-color font-medium text-lg mt-3 mb-5">Nombre del Usuario</p>
            </div>
            <div>
                <p className="text-left text-primary-color font-bold text-xl ">Datos personales:</p>
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