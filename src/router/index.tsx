import { BrowserRouter } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";

export const MainRouter = () => {
  const token = useAppSelector(state => state.auth.token);

  return (
    <BrowserRouter>
      {
        token.length === 0
          ? <PublicRoutes />
          : <PrivateRoutes />
      }
    </BrowserRouter>
  )
};
