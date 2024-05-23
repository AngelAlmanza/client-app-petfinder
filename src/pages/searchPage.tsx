import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import rabbitImg from "../assets/images/searchImg.png";
import { PetPost } from "../components/PetPost";
import { PostButton } from "../components/buttons/PostButton";
import { SelectSearch } from "../components/inputs/SelectSearch";
import { animalTypesList } from "../constants/animalTypes";
import { publicationTypesList } from "../constants/publicationTypes";
import { AnimalTypes } from "../enums/animalTypes";
import { PublicationTypes } from "../enums/publicationTypes";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilters, setSearchResults } from "../store/slices/postSlice";
import { getPostBySearch } from "../store/thunks/postThunks";
import { getPostImage } from "../utils/getPostImage";

interface SearchFormValues {
  postType: string;
  animalType: string;
}

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { searchResults, filters } = useAppSelector((state) => state.posts);
  const [searching, setSearching] = useState(false)

  const handleSearch = (values: SearchFormValues) => {
    setSearching(true);
    dispatch(setFilters({
      postType: values.postType as PublicationTypes,
      animalType: values.animalType as AnimalTypes,
    }));
  }

  const handleResetSearch = () => {
    dispatch(setSearchResults([]));
    dispatch(setFilters(null));
  };

  useEffect(() => {
    if (filters) {
      dispatch(getPostBySearch(filters))
        .catch(() => {
          Swal.fire('Error', 'No se encontraron resultados', 'error');
        })
        .finally(() => {
          dispatch(setFilters(null));
          setSearching(false);
        })
    }
  }, [dispatch, filters]);

  return (
    <div className="min-h-screen">
      {
        !searching && searchResults.length === 0 && (
          <section>
            <h2 className="text-center text-sm text-primary-color font-bold border-b border-primary-color w-3/4 mx-auto my-4">¿No encuentras lo que buscas?</h2>
            <div>
              <Formik
                initialValues={{
                  postType: '',
                  animalType: '',
                }}
                onSubmit={handleSearch}
              >
                {
                  ({ values, handleChange, handleSubmit }) => (
                    <form className="w-3/4 mx-auto my-4" onSubmit={handleSubmit}>
                      <SelectSearch
                        data={publicationTypesList}
                        label="Tipo de anuncio"
                        name="postType"
                        id="postType"
                        value={values.postType}
                        onChange={handleChange}
                      />
                      <SelectSearch
                        data={animalTypesList}
                        label="Tipo de animal"
                        name="animalType"
                        id="animalType"
                        value={values.animalType}
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="w-full bg-primary-color text-white text-center text-sm font-bold py-2.5 rounded-lg mt-4"
                      >
                        Buscar
                      </button>
                    </form>
                  )
                }
              </Formik>
              <div className="w-full max-h-48 flex justify-center">
                <img src={rabbitImg} alt="Search Image" className="max-h-48 object-cover" />
              </div>
            </div>
          </section>
        )
      }
      {
        !searching && searchResults.length > 0 && (
          <section className="grid grid-cols-1 gap-4 relative">
            {
              searchResults.map(post => (
                <PetPost
                  key={post.id}
                  id={post.id}
                  buttonByPublish={<PostButton onClick={() => { }} type={post.type} />}
                  username={post.user?.profile?.name}
                  postImage={getPostImage(post.pet?.images)}
                  altImage={`${post.title} post image`}
                  description={post.content}
                />
              ))
            }
          </section>
        )
      }
      {
        !searching && searchResults.length > 0 && (
          <button
            className="bg-primary-color rounded-full p-6 w-8 h-8 flex items-center justify-center fixed bottom-12 right-4 shadow-md"
            onClick={handleResetSearch}
          >
            <FontAwesomeIcon icon={faRotateLeft} className="text-white" />
          </button>
        )
      }
    </div>
  )
}
