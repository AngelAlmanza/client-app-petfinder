import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/startPage";
import { SignInPage } from "../pages/signInPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  }
])

export default router;