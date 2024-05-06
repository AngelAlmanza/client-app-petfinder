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
        
        <button className="w-48 mt-6 px-8 py-2 bg-danger-color rounded-3xl font-semibold text-base text-white text-center md:text-2xl md:w-60 ">
            {text}
        </button>
    );
};

export default Button;