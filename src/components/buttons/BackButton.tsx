import Back from "../../assets/images/back.png"


// Creamos el componente de botón
export const BackButton = () => {
    return (
        <button className="flex items-center justify-center bg-hover-bg w-10 h-10 rounded-md">
            <img src={Back} alt="Back" className="w-5 h-5" />
        </button>
    );
};