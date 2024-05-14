
import { TextInput } from "../components/inputs/TextInput";
import dogAndCat from "../assets/images/dog-and-cat-banner.png";
import RegisterButton from "../components/buttons/RegisterButton";
import { register } from "../store/thunks/authThunks";
import { useAppDispatch } from "../store/hooks";
import { Formik } from "formik";
import { isValidEmail, isValidPassword } from "../utils/validatiors";
import { ERROR_MESSAGES } from "../constants/errorsMessages";
import { passwordRules } from "../constants/passwordRules";

export const RegisterPage = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="w-screen h-screen pt-10 min-h-screen gradient-background overflow-hidden md:px-24">
                <div className="px-4">
                    <div className="w-full flex justify-center items-center flex-col">
                        <h1 className="text-center text-white text-4xl font-normal">PetFinder</h1>
                        <img src={dogAndCat} alt="PetFinder Logo" className="-mt-14" />
                    </div>
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        validate={(values) => {
                            console.log(values)
                            const errors: Record<string, string> = {};
                            if (!isValidEmail(values.email)) {
                                errors.email = ERROR_MESSAGES.INVALID_EMAIL;
                            }
                            if (!isValidPassword(values.password)) {
                                errors.password = ERROR_MESSAGES.INVALID_PASSWORD;
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            dispatch(register({
                                name: values.name,
                                email: values.email,
                                password: values.password,
                                password_confirmation: values.password
                            }));
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form className="-mt-16 h-36 flex flex-col justify-evenly items-center">
                                <div className="mb-4 w-4/5">
                                    <TextInput
                                        name="name"
                                        value={values.name}
                                        placeholder="Nombre(s)"
                                        iconName="name"
                                        onChange={handleChange}
                                    />
                                    {errors.name ? <p className="text-red-500 text-sm">{errors.name}</p> : null}
                                </div>
                                <div className="mb-4 w-4/5">
                                    <TextInput
                                        name="email"
                                        value={values.email}
                                        placeholder="Correo Electrónico"
                                        iconName="email"
                                        onChange={handleChange}
                                    />
                                    {errors.email ? <p className="text-red-500 text-sm">{errors.email}</p> : null}
                                </div>
                                <div className="mb-4 w-4/5">
                                    <TextInput
                                        name="password"
                                        value={values.password}
                                        placeholder="Contraseña"
                                        iconName="password"
                                        onChange={handleChange}
                                    />
                                    {errors.password ? <p className="text-red-500 text-sm">{errors.password}</p> : null}
                                </div>
                                {JSON.stringify(values, null, 2)}
                                <ul className="w-fit mx-auto mb-4 md:mt-32">
                                    {
                                        passwordRules.map((rule, index) => (
                                            <li
                                                key={index}
                                                className="text-sm md:text-xl font-medium mb-1 list-item list-disc text-white"
                                            >
                                                {rule}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <RegisterButton text="Registrar" disabled={isSubmitting} onClick={handleSubmit} />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="bg-black flex justify-center items-center py-2">
                <img src={dogAndCat} alt="PetFinder Logo" className="w-8 rounded-full" />
                <p className="text-white text-base">PetFinder</p>
            </div>
        </>
    );
};
