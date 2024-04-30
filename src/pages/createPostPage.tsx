import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { MainLayout } from "../layouts/MainLayout"
import { PostTextInput } from "../components/inputs/PostTextInput"
import { useState } from "react"

export const CreatePostPage = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    location: '',
    animalType: '',
    race: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return (
    <MainLayout>
      <section className="w-full px-4">
        <h2 className="text-lg font-medium text-text-primary-color text-center">¿Perdiste una mascota?</h2>
        <div className="h-px bg-primary-color w-full my-4" />
        <h4 className="text-sm font-medium text-center text-text-primary-color">¡La comunidad puede ayudarte a recuperarla!</h4>
      </section>

      <section className="w-100 my-4">
        <div className="w-100 h-52 mb-2 bg-gray-400 rounded-2xl flex justify-center items-center">
          <FontAwesomeIcon icon={faImage} className="text-4xl text-text-primary-color" />
        </div>
        <p className="text-sm font-medium text-text-primary-color">Por lo que es necesario que proporciones los siguientes datos.</p>
      </section>

      <section className="flex flex-wrap justify-center items-center">
        <PostTextInput
          placeholder="Tipo de animal"
          value={form.animalType}
          onChange={(value) => handleChange('animalType', value)}
          style={{ width: 'calc(50% - 8px)', marginRight: '8px' }}
        />
        <PostTextInput
          placeholder="Raza"
          value={form.race}
          onChange={(value) => handleChange('race', value)}
          style={{ width: 'calc(50% - 8px)', marginLeft: '8px' }}
        />
        <PostTextInput
          placeholder="Nombre de la mascota"
          value={form.name}
          onChange={(value) => handleChange('name', value)}
        />
        <PostTextInput
          placeholder="Ubicación donde se perdió"
          value={form.location}
          onChange={(value) => handleChange('location', value)}
        />
        <PostTextInput
          placeholder="Detalles extra (color, raza, tamaño, etc.)"
          value={form.description}
          onChange={(value) => handleChange('description', value)}
        />
      </section>

      <section className="w-full my-4 flex justify-evenly items-center">
        <button className="w-1/3 bg-danger-color text-white text-sm font-medium py-3 rounded-3xl mt-4">Cancelar</button>
        <button className="w-1/3 bg-primary-color text-white text-sm font-medium py-3 rounded-3xl mt-4">Publicar</button>
      </section>
    </MainLayout>
  )
}
