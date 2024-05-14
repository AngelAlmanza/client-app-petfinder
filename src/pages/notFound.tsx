import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../store/hooks";

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
      }, 400)
    }
  }, [token, navigate]);

  return (
    <div>NotFound</div>
  )
}
