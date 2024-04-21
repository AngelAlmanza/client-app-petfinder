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
        <button className="mx-20 mt-2 px-12 py-2 bg-blue-500 rounded-3xl font-bold text-base text-white text-center special-button">
            {text}
        </button>
    );
};

export default Button;
