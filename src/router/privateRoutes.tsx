import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes as PrivateRoutesEnum } from "../constants/routes";
import { MainLayout } from "../layouts/MainLayout";
import { CreatePostPage } from "../pages/createPostPage";
import { HomePage } from '../pages/homePage';
import { MessagerPage } from "../pages/messagerPage";
import { NotFound } from "../pages/notFound";
import { PostDetailsPage } from "../pages/postDetailsPage";
import { ProfilePage } from "../pages/profilePage";
import { SearchPage } from "../pages/searchPage";
import { useAppSelector } from "../store/hooks";

export const PrivateRoutes = () => {
  const token = useAppSelector(state => state.auth.token);

  if (token.length === 0) {
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <MainLayout>
      <Routes>
        <Route path={PrivateRoutesEnum.HOME_PAGE} element={<HomePage />} />
        <Route path={PrivateRoutesEnum.SEARCH_PAGE} element={<SearchPage />} />
        <Route path={`${PrivateRoutesEnum.POST_DETAILS_PAGE}/:id`} element={<PostDetailsPage />} />
        <Route path={PrivateRoutesEnum.CREATE_POST_PAGE} element={<CreatePostPage />} />
        <Route path={PrivateRoutesEnum.MESSENGER_PAGE} element={<MessagerPage />} />
        <Route path={PrivateRoutesEnum.EDIT_PROFILE_PAGE} element={<ProfilePage />} />
        <Route path={PrivateRoutesEnum.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};
