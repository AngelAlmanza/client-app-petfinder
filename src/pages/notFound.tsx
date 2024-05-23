import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../store/hooks";
import notFoundImage from "../assets/images/notFoundImg.png"

export const NotFound = () => {
  const navigate = useNavigate();
  const token = useAppSelector(state => state.auth.token);

  useEffect(() => {
    if (token.length === 0) {
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    } else {
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 1000)
    }
  }, [token, navigate]);

  return (
    <div className="h-96 flex flex-col items-center justify-center">
        <img src={notFoundImage} alt="Not found" className="w-1/2 mx-auto" />
      <p className="text-xl font-medium text-center px-4">
        Lo sentimos, la página que buscas no existe
        <br /> <br />
        Serás redirigido en unos segundos
      </p>
    </div>
  )
}
