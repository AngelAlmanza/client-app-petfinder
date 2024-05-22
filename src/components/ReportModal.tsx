import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../store/hooks";
import { faArrowLeftLong, faFlag } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { petFinderApi } from "../api/petFinderApi";
import { CreateReportResponse } from "../interfaces/ReportInterfaces";
import Swal from "sweetalert2";

type Props = {
  open: boolean;
  handleClose: () => void;
}

export const ReportModal = ({ open, handleClose }: Props) => {
  const { currentPost } = useAppSelector(state => state.posts);
  const [reportReason, setReportReason] = useState<string>('');

  const sendReport = () => {
    petFinderApi.post<CreateReportResponse>('/reports/create', {
      content: reportReason,
      post_id: currentPost?.id.toString()
    }).then(response => {
      if (response.status === 201) {
        console.log(response);
        Swal.fire('Reporte enviado', 'Tu reporte ha sido enviado con éxito', 'success')
        handleClose();
      }
    }).catch(() => {
      Swal.fire('Error', 'Ha ocurrido un error al enviar tu reporte', 'error')
      handleClose();
    });
  };

  return (
    <dialog
      open={open}
      className={
        `fixed inset-0 z-10 h-screen w-screen overflow-hidden bg-white bg-opacity-95 shadow-2xl flex justify-center items-center
        ${open ? 'block' : 'hidden'}`
      }
      onClose={handleClose}
    >
      <div className="w-4/5 h-[95%] bg-primary-gray rounded-2xl overflow-hidden">
        <section className="w-full h-1/3 bg-danger-color relative flex justify-center items-center">
          <button className="absolute top-4 left-4" onClick={handleClose}>
            <FontAwesomeIcon icon={faArrowLeftLong} size="xl" color="#FFF" />
          </button>
          <FontAwesomeIcon icon={faFlag} size="3x" className="text-white" />
        </section>
        <section className="w-full h-2/3 px-3 py-2 flex flex-col items-center justify-evenly gap-2">
          <p className="text-center text-text-primary-color text-base font-medium">
            Ayudanos a mantener nuestra comunidad a salvo <b className="text-danger-color">reportando</b> a:
          </p>
          <p className="text-center text-danger-color text-xl font-bold">{ currentPost?.title }</p>
          <p className="text-center text-text-primary-color text-base font-medium underline">
            { currentPost?.user.profile.name } { currentPost?.user.profile.lastname }
          </p>
          <p className="text-center text-text-primary-color text-base font-medium">
            Describe aquí el motivo de tu reporte:
          </p>
          <textarea
            className="w-full h-1/4 border border-primary-gray rounded-lg p-2 outline-none resize-none"
            placeholder="Escribe aquí tu reporte..."
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
          />
          <button className="bg-danger-color rounded-2xl px-16 py-2" onClick={sendReport}>
            Reportar
          </button>
        </section>
      </div>
    </dialog>
  )
}
