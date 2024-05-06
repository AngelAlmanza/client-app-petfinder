import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { MainLayout } from "../layouts/MainLayout"
import { PostTextInput } from "../components/inputs/PostTextInput"
import { useForm } from "../hooks/useForm"
import { useAppDispatch } from "../store/hooks"
import { createPost } from "../store/thunks/postThunks"

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
    <MainLayout>
      <section className="w-full px-4">
        <h2 className="text-lg md:text-3xl font-medium text-text-primary-color text-center">¿Perdiste una mascota?</h2>
        <div className="h-px md:h-0.5 bg-primary-color w-full my-4" />
        <h4 className="text-sm md:text-xl font-medium text-center text-text-primary-color">¡La comunidad puede ayudarte a recuperarla!</h4>
      </section>

      <section className="w-100 my-4 md:px-24">
        <div className="w-100 h-52 md:h-60 mb-2 bg-gray-400 rounded-2xl flex justify-center items-center">
          <FontAwesomeIcon icon={faImage} className="text-4xl text-text-primary-color" />
        </div>
        <p className="text-sm md:text-lg font-medium text-text-primary-color">Por lo que es necesario que proporciones los siguientes datos.</p>
      </section>

      <section className="flex flex-wrap justify-center items-center md:px-24">
        <PostTextInput
          placeholder="Tipo de animal"
          value={type}
          onChange={(value) => onChange('type', value)}
          style={{ width: 'calc(50% - 8px)', marginRight: '8px' }}
        />
        <PostTextInput
          placeholder="Raza"
          value={breed}
          onChange={(value) => onChange('breed', value)}
          style={{ width: 'calc(50% - 8px)', marginLeft: '8px' }}
        />
        <PostTextInput
          placeholder="Nombre de la mascota"
          value={name}
          onChange={(value) => onChange('name', value)}
        />
        <PostTextInput
          placeholder="Ubicación donde se perdió"
          value={location}
          onChange={(value) => onChange('location', value)}
        />
        <PostTextInput
          placeholder="Detalles extra (color, raza, tamaño, etc.)"
          value={content}
          onChange={(value) => onChange('content', value)}
        />
      </section>

      <section className="w-full my-4 flex justify-evenly items-center md:px-6">
        <button className="w-1/3 bg-danger-color text-white text-sm md:text-2xl font-medium py-3 rounded-3xl mt-4">Cancelar</button>
        <button
          onClick={handleCreatePost}
          className="w-1/3 bg-primary-color text-white text-sm md:text-2xl font-medium py-3 rounded-3xl mt-4"
        >
          Publicar
        </button>
      </section>
    </MainLayout>
  )
}
