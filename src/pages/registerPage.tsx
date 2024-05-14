
import { TextInput } from "../components/inputs/TextInput";
import dogAndCat from "../assets/images/dog-and-cat-banner.png";
import RegisterButton from "../components/buttons/RegisterButton";
import { useForm } from "../hooks/useForm";
import { register } from "../store/thunks/authThunks";
import { useAppDispatch } from "../store/hooks";
import { useState } from 'react';

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const [nameValid, setNameValid] = useState<boolean>(true);
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [passwordValid, setPasswordValid] = useState<boolean>(true);

    const { name, email, password, onChange } = useForm({
        name: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleRegister = () => {
        dispatch(register({ name, email, password, password_confirmation: password}))
    };

    return (
        <>
            <div className="w-screen h-screen pt-10 min-h-screen gradient-background overflow-hidden md:px-24">
                <div className="px-4">
                    <div className="w-full flex justify-center items-center flex-col">
                        <h1 className="text-center text-white text-4xl font-normal">PetFinder</h1>
                        <img src={dogAndCat} alt="PetFinder Logo" className="-mt-14" />
                    </div>
                    <div className="-mt-16 h-36 flex flex-col justify-evenly items-center">
                        <div className="mb-4 w-4/5">
                            <TextInput
                                placeholder="Nombre(s)"
                                iconName="name"
                                onChange={(value) => onChange('name', value)}
                            />
                        </div>
                        <div className="mb-4 w-4/5">
                            <TextInput
                                placeholder="Correo Electrónico"
                                iconName="email"
                                onChange={(value) => onChange('email', value)}
                            />
                        </div>
                        <div className="mb-4 w-4/5">
                            <TextInput
                                placeholder="Contraseña"
                                iconName="password"
                                onChange={(value) => onChange('password', value)}
                            />
                        </div>
                    </div>
                    <ul className="w-fit mx-auto mt-20 mb-4 md:mt-32">
                    <li className={`text-sm md:text-xl font-medium mb-1 list-item list-disc ${nameValid ? 'text-white' : 'text-red-500'}`}>Minimo debe contener 8 letras</li>
                    <li className={`text-sm md:text-xl font-medium mb-1 list-item list-disc ${emailValid ? 'text-white' : 'text-red-500'}`}>Utiliza por lo menos 1 mayuscula</li>
                    <li className={`text-sm md:text-xl font-medium mb-1 list-item list-disc ${passwordValid ? 'text-white' : 'text-red-500'}`}>Utiliza por lo menos 1 numero</li>
                    </ul>
                    <RegisterButton text="Registrar" onClick={handleRegister} />
                </div>
            </div>
            <div className="bg-black flex justify-center items-center py-2">
                <img src={dogAndCat} alt="PetFinder Logo" className="w-8 rounded-full" />
                <p className="text-white text-base">PetFinder</p>
            </div>
        </>
    );
};
