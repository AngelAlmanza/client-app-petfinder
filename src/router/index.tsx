import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/startPage";
import { SignInPage } from "../pages/signInPage";
import { RegisterPage } from "../pages/registerPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
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