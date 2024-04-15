import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/homePage';
import { SignInPage } from "../pages/signInPage";
import { RegisterPage } from "../pages/registerPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/register',
    element: <RegisterPage/>
  }


])

export default router;