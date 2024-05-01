import { MainLayout } from "../layouts/MainLayout";
import { TextInputCity } from "../components/inputs/TextInputCity";
import { TextInputEmail } from "../components/inputs/TextInputEmail";
import { PencilEditButton } from "../components/buttons/EditpincelButton";
import EditdateButton from "../components/buttons/EditdateButton";
import DeletaccountButton from "../components/buttons/DeleteaccountButton";
import SignoffButton from "../components/buttons/SignoffButton";
import Usericon from "../assets/images/icon-user.png"

export const EditporfilePage = () => {

    return (
        <MainLayout>
        <div className="flex flex-col items-center relative">
            <div>
                <p className="text-xl text-center -ml-6 -mt-6 py-2 mx-auto w-screen bg-white font-bold text-text-primary-color">Editar perfil</p>
            </div>
            <div className="relative w-screen">
                <div className="absolute gradient-background overflow-hidden top-0 right-0 h-32 w-screen">
                    
                </div>
                <div className="absolute bottom-0 right-8 -mb-36 mr-0">
                    <PencilEditButton/>
                </div>
            </div>
            <div className="relative">
                <div className="">
                    <img src={Usericon} alt="PetFinder Logo" className="mt-8" />
                </div>
                <div className="absolute bottom-0 right-14 mb-3 mr-0">
                    <PencilEditButton/>
                </div>
            </div>
            
            <div>
                <p className="text-center text-text-primary-color font-medium text-lg mt-3 mb-5">Nombre del Usuario</p>
            </div>
            <div>
                <p className="text-left text-primary-color font-bold text-xl ">Datos personales:</p>
            </div>
            <div>
                <TextInputCity />
            </div>
            <div>
                <TextInputEmail />
            </div>
            <div>
                <EditdateButton text="Editar Datos"/>
            </div>
            <div>
                <DeletaccountButton text="Eliminar cuenta" />
            </div>
            <div>
                <SignoffButton text="Cerrar sesión" />
            </div>
        </div>
    </MainLayout>
    )
}