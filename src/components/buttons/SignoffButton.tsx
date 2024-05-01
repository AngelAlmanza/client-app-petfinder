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
        
        <button className="mt-5 text-danger-color underline  ">
            {text}
        </button>
    );
};

export default Button;