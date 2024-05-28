import { IconDefinition, faHome, faRightFromBracket, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { PrivateRoutes } from "./routes";

type MenuRoute = {
  path: PrivateRoutes
  name: string
  icon: IconDefinition
}

export const menuRoutes: MenuRoute[] = [
  {
    path: PrivateRoutes.HOME_PAGE,
    name: 'Inicio',
    icon: faHome
  },
  {
    path: PrivateRoutes.SEARCH_PAGE,
    name: 'Buscar',
    icon: faSearch
  },
  {
    path: PrivateRoutes.EDIT_PROFILE_PAGE,
    name: 'Mi perfil',
    icon: faUser
  },
  {
    path: PrivateRoutes.LOGOUT_PAGE,
    name: 'Cerrar sesión',
    icon: faRightFromBracket
  }
];