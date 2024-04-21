import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/homePage';
import { SignInPage } from "../pages/signInPage";
import { RegisterPage } from "../pages/registerPage";
import { NotFound } from "../pages/notFound";

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
    path: '/home',
    element: <HomePage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <NotFound />,
      },
      {
        path: 'found',
        element: <NotFound />,
      },
      {
        path: 'adoption',
        element: <NotFound />,
      },
      {
        path: 'profile',
        element: <NotFound />,
      },
      {
        path: 'chats',
        element: <NotFound />,
      },
      {
        path: 'veterinaries',
        element: <NotFound />,
      },
      {
        path: 'logout',
        element: <NotFound />,
      },
    ]
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
])

export default router;