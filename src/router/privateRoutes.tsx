import { MainLayout } from "../layouts/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { MessagerPage } from "../pages/messagerPage";
import { PostDetailsPage } from "../pages/postDetailsPage";
import { EditporfilePage } from "../pages/editporfilePage";
import { CreatePostPage } from "../pages/createPostPage";
import { HomePage } from '../pages/homePage';
import { NotFound } from "../pages/notFound";
import { useAppSelector } from "../store/hooks";
import { StartPage } from "../pages/startPage";

export const PrivateRoutes = () => {
  const token = useAppSelector(state => state.auth.token);

  if (token.length === 0) {
    return (
      <Navigate to="/" replace />
    )
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/post-details" element={<PostDetailsPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/listmessenger" element={<MessagerPage />} />
        <Route path="/editporfile" element={<EditporfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}
