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
            <div className="flex justify-between items-center mr-4 md:mr-80">
                <div className="mr-28 md:mr-72 w-2">
                    <BackButton />
                </div>
                <div className=" text-xl md:text-3xl">
                    <div className="flex justify-center">
                        <p className="py-4 mr-16 md:-mr-16 w-40 md:w-48 md:py-8 bg-white font-bold text-text-primary-color">Editar perfil</p>
                    </div>
                </div>
            </div>
            <div className="relative w-screen">
                <div className="absolute gradient-background overflow-hidden top-0 right-0 h-32 md:h-40 w-screen">

                </div>
                <div className="absolute bottom-0 right-8 -mb-36 md:-mb-48 mr-0">
                    <PencilEditButton />
                </div>
            </div>
            <div className="relative">
                <div className="">
                    <img src={Usericon} alt="PetFinder Logo" className="mt-8 drop-shadow-xl md:w-2/4 md:h-2/4 md:ml-48" />
                </div>
                <div className="absolute bottom-0 right-20 mb-3 md:-mb-2  mr-0 md:mr-48">
                    <PencilEditButton />
                </div>
            </div>

            <div>
                <p className="text-center text-text-primary-color font-medium text-lg md:text-3xl mt-3 mb-5">Nombre del Usuario</p>
            </div>
            <div>
                <p className="text-left text-primary-color font-bold text-xl md:text-2xl ">Datos personales:</p>
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