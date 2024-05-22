import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ImageInput } from "../components/inputs/ImageInput";
import { PostTextInput } from "../components/inputs/PostTextInput";
import { Select } from "../components/inputs/Select";
import { animalTypesList } from '../constants/animalTypes';
import { ERROR_MESSAGES } from "../constants/errorsMessages";
import { publicationTypesList } from "../constants/publicationTypes";
import { PrivateRoutes } from "../constants/routes";
import { AnimalTypes } from "../enums/animalTypes";
import { PublicationTypes } from "../enums/publicationTypes";
import { useAppDispatch } from "../store/hooks";
import { createPost } from "../store/thunks/postThunks";
import { isValidAddress, isValidDetails, isValidPetName, isValidRace } from "../utils/validatiors";

export const CreatePostPage = () => {
  const dispatch = useAppDispatch();
  const [imgBase64, setImgBase64] = useState<string>('');
  const navigate = useNavigate();

  const handleUploadImage = (data: string) => {
    setImgBase64(data);
  }

  return (
    <>
      <Formik
        initialValues={{
          petname: '',
          animalType: '',
          breed: '',
          age: '',
          personality: '',
          title: '',
          content: '',
          typePost: PublicationTypes.DEFAULT,
          location: '',
          image: '',
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!isValidRace(values.breed)) {
            errors.race = ERROR_MESSAGES.INVALID_BREED;
          }
          if (!isValidPetName(values.petname)) {
            errors.petname = ERROR_MESSAGES.INVALID_PETNAME;
          }
          if (!isValidAddress(values.location)) {
            errors.address = ERROR_MESSAGES.INVALID_ADDRESS;
          }
          if (!isValidDetails(values.content)) {
            errors.details = ERROR_MESSAGES.INVALID_PET_DETAILS;
          }
          if (values.typePost === PublicationTypes.DEFAULT) {
            errors.typePost = ERROR_MESSAGES.INVALID_POST_TYPE;
          }
          if (values.animalType === AnimalTypes.DEFAULT) {
            errors.animalType = ERROR_MESSAGES.INVALID_TYPE_ANIMAL;
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createPost({
            pet: {
              name: values.petname,
              type: values.animalType as AnimalTypes,
              breed: values.breed,
              age: values.age.toString(),
              personality: values.personality,
              image: imgBase64,
              image_type: 'pet'
            },
            post: {
              title: values.title,
              content: values.content,
              type: values.typePost,
              location: values.location,
            }
          })).then(() => {
            Swal.fire({
              title: 'Publicación creada',
              text: 'Tu publicación ha sido creada con éxito',
              icon: 'success',
              confirmButtonText: 'Aceptar',
            }).then((value) => {
              if (value.isConfirmed) {
                navigate(PrivateRoutes.HOME_PAGE);
              }
            })
          })
          setSubmitting(false);
        }}
      >{({
        values,
        errors,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-full px-4">
            <h2 className="text-lg md:text-3xl font-medium text-text-primary-color text-center">¿Perdiste una mascota?</h2>
            <div className="h-px md:h-0.5 bg-primary-color w-full my-4" />
            <h4 className="text-sm md:text-xl font-medium text-center text-text-primary-color">¡La comunidad puede ayudarte a recuperarla!</h4>
          </div>
          <ImageInput name="image" value={values.image} onChange={handleChange} handleImageChangeBase64={handleUploadImage} />
          <div className="flex flex-wrap justify-center items-center md:px-24">
            <p className="text-sm md:text-lg font-medium text-text-primary-color mb-4">Por lo que es necesario que proporciones los siguientes datos.</p>
            <PostTextInput
              placeholder="Título de tu publicación"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title ? <p className="text-red-500 text-sm">{errors.title}</p> : null}
            <PostTextInput
              placeholder="Personalidad de la mascota"
              name="personality"
              value={values.personality}
              onChange={handleChange}
            />
            <Select
              data={publicationTypesList}
              label="Tipo de publicación"
              name="typePost"
              id="typePost"
              value={values.typePost}
              onChange={handleChange}
            />
            {errors.typePost ? <p className="text-red-500 text-sm">{errors.typePost}</p> : null}
            {errors.personality ? <p className="text-red-500 text-sm">{errors.personality}</p> : null}
            <Select
              data={animalTypesList}
              label="Tipo de animal"
              name="animalType"
              id="animalType"
              value={values.animalType}
              onChange={handleChange}
            />
            <PostTextInput
              placeholder="Edad de la mascota"
              name="age"
              value={values.age}
              type="number"
              onChange={handleChange}
              style={{ width: 'calc(50% - 8px)', marginRight: '8px' }}
            />
            {errors.age ? <p className="text-red-500 text-sm">{errors.age}</p> : null}
            <PostTextInput
              name="breed"
              placeholder="Raza"
              value={values.breed}
              onChange={handleChange}
              style={{ width: 'calc(50% - 8px)', marginLeft: '8px' }}
            />
            {errors.breed ? <p className="text-red-500 text-sm">{errors.breed}</p> : null}
            <PostTextInput
              name="petname"
              placeholder="Nombre de la mascota"
              value={values.petname}
              onChange={handleChange}
            />
            {errors.petname ? <p className="text-red-500 text-sm">{errors.petname}</p> : null}
            <PostTextInput
              name="location"
              placeholder="Ubicación donde se perdió"
              value={values.location}
              onChange={handleChange}
            />
            {errors.location ? <p className="text-red-500 text-sm">{errors.location}</p> : null}
            <PostTextInput
              name="content"
              placeholder="Detalles extra (color, raza, tamaño, etc.)"
              value={values.content}
              onChange={handleChange}
            />
            {errors.content ? <p className="text-red-500 text-sm">{errors.content}</p> : null}
          </div>
          <div className="w-full my-4 flex justify-evenly items-center md:px-6">
            <button
              type="button"
              className="w-1/3 bg-danger-color text-white text-sm md:text-2xl font-medium py-3 rounded-3xl mt-4"
              onClick={() => navigate(PrivateRoutes.HOME_PAGE)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/3 bg-primary-color text-white text-sm md:text-2xl font-medium py-3 rounded-3xl mt-4"
            >
              Publicar
            </button>
          </div>
        </form>
      )}
      </Formik>
    </>
  )
}
