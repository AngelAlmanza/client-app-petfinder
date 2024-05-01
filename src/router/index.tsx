import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/homePage';
import { SignInPage } from "../pages/signInPage";
import { RegisterPage } from "../pages/registerPage";
import { NotFound } from "../pages/notFound";
import { MessagerPage } from "../pages/messagerPage";
import { PostDetailsPage } from "../pages/postDetailsPage";
<<<<<<< HEAD
import { EditporfilePage } from "../pages/editporfilePage";
=======
import { CreatePostPage } from "../pages/createPostPage";
>>>>>>> 9477ab4f74dbadd1649a6ba1165eadea12428bab

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
    path: 'post-details',
    element: <PostDetailsPage />
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/listmessenger',
    element: <MessagerPage/>
  },
  {
<<<<<<< HEAD
    path: '/editporfile',
    element : <EditporfilePage/>
=======
    path: '/create-post',
    element: <CreatePostPage />
  },
  {
    path: '*',
    element: <NotFound />,
>>>>>>> 9477ab4f74dbadd1649a6ba1165eadea12428bab
  }
])

export default router;