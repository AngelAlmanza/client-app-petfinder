import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/startPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  }
])

export default router;