import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { PostTextInput } from "../components/inputs/PostTextInput"
import { useForm } from "../hooks/useForm"
import { useAppDispatch } from "../store/hooks"
import { createPost } from "../store/thunks/postThunks"
import { Formik } from "formik"
import { isValidPetType, isValidRace, isValidDetails, isValidAddress, isValidPetName } from "../utils/validatiors";
import { ERROR_MESSAGES } from "../constants/errorsMessages";

export const CreatePostPage = () => {
  const dispatch = useAppDispatch();

  const { name, type, breed, age, personality, title, content, location, onChange } = useForm({
    name: '',
    type: '',
    breed: '',
    age: '2',
    personality: 'Happy',
    title: 'Post prueba',
    content: '',
    location: '',
  });

  const handleCreatePost = () => {
    dispatch(createPost({
      pet: {
        name,
        type,
        breed,
        age,
        personality,
      },
      post: {
        title,
        content,
        location,
        type: 'lost',
      },
    }));
  };
  return (
    <>
      <Formik
        initialValues={{ animaltype: "", race: "", petname: "", address: "", details: "", }}
        validate={(values) => {
          console.log(values)
          const errors: Record<string, string> = {};
          if (!isValidPetType(values.animaltype)) {
            errors.typeanimal = ERROR_MESSAGES.INVALID_TYPEANIMAL;
          }
          if (!isValidRace(values.race)) {
            errors.race = ERROR_MESSAGES.INVALID_RAZA;
          }
          if (!isValidPetName(values.petname)) {
            errors.petname = ERROR_MESSAGES.INVALID_PETNAME;
          }
          if (!isValidAddress(values.address)) {
            errors.address = ERROR_MESSAGES.INVALID_ADDRESS;
          }
          if (!isValidDetails(values.details)) {
            errors.details = ERROR_MESSAGES.INVALID_PETDETAILS;
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >{({
        values,
        errors,
        handleChange,
      }) => (
        //formulario
        <form>
          <div className="w-full px-4">
            <h2 className="text-lg md:text-3xl font-medium text-text-primary-color text-center">¿Perdiste una mascota?</h2>
            <div className="h-px md:h-0.5 bg-primary-color w-full my-4" />
            <h4 className="text-sm md:text-xl font-medium text-center text-text-primary-color">¡La comunidad puede ayudarte a recuperarla!</h4>
          </div>
          <div className="w-100 my-4 md:px-24">
            <div className="w-100 h-52 md:h-60 mb-2 bg-gray-400 rounded-2xl flex justify-center items-center">
              <FontAwesomeIcon icon={faImage} className="text-4xl text-text-primary-color" />
            </div>
            <p className="text-sm md:text-lg font-medium text-text-primary-color">Por lo que es necesario que proporciones los siguientes datos.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center md:px-24">
            <PostTextInput
              placeholder="Tipo de animal"
              name="animaltype"
              value={values.animaltype}
              onChange={handleChange}
              style={{ width: 'calc(50% - 8px)', marginRight: '8px' }}
            />
            {errors.animaltype ? <p className="text-red-500 text-sm">{errors.animaltype}</p> : null}
            <PostTextInput
              name="race"
              placeholder="Raza"
              value={values.race}
              onChange={(value) => onChange('breed', value)}
              style={{ width: 'calc(50% - 8px)', marginLeft: '8px' }}
            />
            {errors.race ? <p className="text-red-500 text-sm">{errors.race}</p> : null}
            <PostTextInput
              name="petname"
              placeholder="Nombre de la mascota"
              value={values.petname}
              onChange={handleChange}
            />
            {errors.petname ? <p className="text-red-500 text-sm">{errors.petname}</p> : null}
            <PostTextInput
              name="address"
              placeholder="Ubicación donde se perdió"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address ? <p className="text-red-500 text-sm">{errors.address}</p> : null}
            <PostTextInput
              name="details"
              placeholder="Detalles extra (color, raza, tamaño, etc.)"
              value={values.details}
              onChange={handleChange}
            />
            {errors.details ? <p className="text-red-500 text-sm">{errors.details}</p> : null}
          </div>
          <div className="w-full my-4 flex justify-evenly items-center md:px-6">
            <button className="w-1/3 bg-danger-color text-white text-sm md:text-2xl font-medium py-3 rounded-3xl mt-4">Cancelar</button>
            <button
              onClick={handleCreatePost}
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
