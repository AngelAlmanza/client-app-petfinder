import { useEffect } from "react";
import Usericon from "../assets/images/icon-user.png";
// import { PencilEditButton } from "../components/buttons/EditpincelButton";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { ProfileButton } from "../components/buttons/ProfileButton";
import { ProfileInput } from "../components/inputs/ProfileInput";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProfileData, updateProfileData } from "../store/thunks/profileThunks";

interface ProfileFormValues {
    city: string;
    name: string;
}

export const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const { profile } = useAppSelector(state => state.profile);

    useEffect(() => {
        dispatch(getProfileData());
    }, [dispatch]);

    const handleSubmit = (values: ProfileFormValues) => {
        dispatch(updateProfileData({ name: values.name, city: values.city }))
            .then(() => {
                Swal.fire({ icon: 'success', title: 'Perfil actualizado', showConfirmButton: false, timer: 1500 })
            })
            .catch(() => {
                Swal.fire({ icon: 'error', title: 'Error al actualizar el perfil', showConfirmButton: false, timer: 1500 })
            });
    };

    return (
        <>
            <div className="absolute gradient-background overflow-hidden top-20 right-0 h-32 md:h-40 w-screen rounded-t-3xl" />
            <div className="flex flex-col items-center relative">
                <div className="relative">
                    <div className="lg:ml-80">
                        <img src={Usericon} alt="PetFinder Logo" className="mt-8 drop-shadow-xl md:w-2/4 md:h-2/4 md:ml-48" />
                    </div>
                    {/* <div className="absolute bottom-0 right-20 mb-3 md:-mb-2  mr-0 md:mr-48">
                        <PencilEditButton />
                    </div> */}
                </div>

                <div>
                    <p className="text-center text-text-primary-color font-medium text-lg md:text-3xl mt-3 mb-5">{profile?.name} {profile?.lastname}</p>
                </div>
                <div>
                    <p className="text-left text-primary-color font-bold text-xl md:text-2xl ">Datos personales:</p>
                </div>
                <Formik
                    initialValues={{
                        city: profile?.city || "",
                        name: profile?.name || "",
                    }}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                    validate={(values) => {
                        const errors: Partial<ProfileFormValues> = {};
                        if (!values.city || values.city.length < 3) {
                            errors.city = "Campo inválido";
                        }
                        if (!values.name || values.name.length < 3) {
                            errors.name = "Campo inválido";
                        }
                        return errors;
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <form onSubmit={handleSubmit} className="mb-8 mt-4 flex flex-col items-center justify-center gap-4">
                            <ProfileInput
                                placeholder="Ciudad" label="Ciudad"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                            <ProfileInput
                                placeholder="Nombre"
                                label="Nombre"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            <ProfileButton
                                text="Guardar Cambios"
                                type="submit"
                            />
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}