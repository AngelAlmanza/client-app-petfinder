import { Route, Routes } from "react-router-dom"
import { SignInPage } from "../pages/signInPage"
import { RegisterPage } from "../pages/registerPage"
import { StartPage } from "../pages/startPage"
import { NotFound } from "../pages/notFound"
import { PublicRoutes as PublicRoutesEnum } from "../constants/routes";

export const PublicRoutes = () => {

  return (
    <Routes>
      <Route path={PublicRoutesEnum.START_PAGE} element={<StartPage />} />
      <Route path={PublicRoutesEnum.SIGN_IN_PAGE} element={<SignInPage />} />
      <Route path={PublicRoutesEnum.REGISTER_PAGE} element={<RegisterPage />} />
      <Route path={PublicRoutesEnum.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}
