import { Route, Routes } from "react-router-dom"
import { SignInPage } from "../pages/signInPage"
import { RegisterPage } from "../pages/registerPage"
import { StartPage } from "../pages/startPage"
import { NotFound } from "../pages/notFound"

export const PublicRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
