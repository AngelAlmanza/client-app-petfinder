
import Pencil from "../../assets/images/pencil-edit.png"


// Creamos el componente de botón
export const PencilEditButton = () => {
    return (
        <button className="bg-ligth-green w-10 h-10 rounded-full flex items-center justify-center">
            <img src={Pencil} alt="w-4 h-4 mr-2" />
        </button>
    );
};