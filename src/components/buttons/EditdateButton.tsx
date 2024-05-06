import React from 'react';

// Definimos la interfaz para las propiedades del botón
interface ButtonProps {
    onClick: () => void;
    text: string;
    // Puedes añadir más propiedades según tus necesidades
}

// Creamos el componente de botón
const Button: React.FC<ButtonProps> = ({  text }) => {
    return (
        //mx-20 mt-2 px-12 py-2 bg-primary-color rounded-3xl font-semibold text-base text-white text-center special-button
        <button className="w-48 md:w-60 mt-6 px-8 py-2 bg-primary-color rounded-3xl font-semibold text-base md:text-2xl text-white text-center ">
            {text}
        </button>
    );
};

export default Button;