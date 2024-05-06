import Back from "../../assets/images/back.png"


// Creamos el componente de botón
export const BackButton = () => {
    return (
        <button className="flex items-center justify-center bg-hover-bg w-10 h-10 md:w-16 md:h-16 rounded-md md:ml-10">
            <img src={Back} alt="Back" className="w-5 h-5 md:w-8 md:h-8" />
        </button>
    );
};