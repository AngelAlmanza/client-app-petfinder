/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faFlag, faPaw, faLocationDot, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import { PostTag } from "../components/PostTag";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPostById } from "../store/thunks/postThunks";
import { getTypeByValue } from "../utils/getTypeByValue";
import { getAnimaltypeByValue } from "../utils/getAnimaltypeByValue";
import { setCurrentPost } from "../store/slices/postSlice";
import { ReportModal } from "../components/ReportModal";

export const PostDetailsPage = () => {
  const [opacityButton, setOpacityButton] = useState<string>('opacity-0');
  const [openReportModal, setOpenReportModal] = useState<boolean>(false);
  const { currentPost } = useAppSelector(state => state.posts);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const hideButton = () => {
    if (opacityButton === 'opacity-0') {
      setOpacityButton('opacity-100')
    } else {
      setOpacityButton('opacity-0')
    }
  };

  const onBack = () => {
    dispatch(setCurrentPost(null));
    navigate(-1);
  }

  const handleReportModal = () => {
    if (openReportModal) {
      hideButton()
    }
    setOpenReportModal(!openReportModal);
  };

  useEffect(() => {
    dispatch(getPostById(id!.toString()))
  }, [id, dispatch]);

  return (
    <>
      <section className="w-full h-72 relative md:px-20">
        <img src="https://via.placeholder.com/150" className="w-full h-full object-cover rounded-lg" />
        <span
          className="w-3/4 md:w-3/5 inline-flex justify-between items-center rounded-2xl py-1 px-3
          bg-red-500 font-bold text-white uppercase text-xl text-center md:text-2xl absolute bottom-0
            left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <FontAwesomeIcon icon={faPaw} size="2x" className="text-white text-xs md:text-lg " />
          { currentPost?.pet.name }
          <FontAwesomeIcon icon={faPaw} size="2x" className="text-white text-xs md:text-lg " />
        </span>
      </section>

      <section className="w-100 md:px-14 relative flex gap-2 items-center mt-8">
        <div className="w-3/4 flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-xl filter">
            <img className="w-full h-full" src="https://via.placeholder.com/150" />
          </div>
          <div>
            <p className="text-lg md:text-2xl line-clamp-1 text-primary-color font-bold">{ currentPost?.user.profile.name }</p>
            <p className="text-sm md:text-lg line-clamp-1 text-text-primary-color font-medium">{ currentPost?.title }</p>
          </div>
        </div>
        <button onClick={hideButton} className="w-1/4 flex justify-end items-start pr-4">
          <FontAwesomeIcon icon={faEllipsis} className="text-text-primary-color text-xl md:text-2xl" />
        </button>
        <div className={`absolute -top-6 right-10 transition-all ${opacityButton}`} >
          <button
            className="bg-primary-gray rounded-lg shadow-md py-2 px-4 flex items-center"
            onClick={handleReportModal}
          >
            <FontAwesomeIcon icon={faFlag} className="text-danger-color text-xl" />
            <span className="inline-block ml-2 font-medium text-sm md:text-lg text-text-primary-color">Reportar</span>
          </button>
        </div>
      </section>

      <section>
        <h4 className="my-4 text-primary-color font-bold text-lg md:text-2xl md:px-14">Etiquetas</h4>
        <div className="flex items-center justify-center flex-wrap gap-1">
          <PostTag text={getTypeByValue(currentPost?.type!)} color="primary-color" />
          <PostTag text={getAnimaltypeByValue(currentPost?.pet.type!)} color="primary-color" />
        </div>
      </section>

      <section>
        <h4 className="my-4 text-primary-color font-bold text-lg md:text-2xl md:px-14 ">Visto por última vez en:</h4>
        <p className="text-sm md:text-lg text-text-primary-color font-medium md:px-14">
          <FontAwesomeIcon icon={faLocationDot} className="text-danger-color mr-1" />
          { currentPost?.location }
        </p>
      </section>

      <section>
        <h4 className="my-4 text-primary-color font-bold text-lg md:text-2xl md:px-14">Detalles</h4>
        <p className="text-sm md:text-lg text-text-primary-color font-medium md:px-14">
          { currentPost?.content }
        </p>
      </section>

      <section className="flex items-center justify-evenly mb-4 mt-8 md:mt-16">
        <button onClick={onBack}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm md:text-3xl text-text-primary-color font-semibold" />
          <span className="ml-2 text-sm md:text-3xl text-text-primary-color font-semibold underline">Volver</span>
        </button>
        <button className="bg-ligth-green flex justify-evenly items-center px-3 py-2 rounded-2xl shadow-lg">
          <FontAwesomeIcon icon={faPhone} className="text-sm md:text-2xl text-white font-semibold" />
          <span className="ml-2 text-sm md:text-3xl text-white font-semibold">Contactar</span>
        </button>
      </section>

      <ReportModal open={openReportModal} handleClose={handleReportModal} />
    </>
  )
}
