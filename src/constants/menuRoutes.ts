import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faHome, faSearch, faCrosshairs, faDog, faUser, faMessage, faShieldCat, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
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
    path: PrivateRoutes.HOME_PAGE,
    name: 'Buscar',
    icon: faSearch
  },
  {
    path: PrivateRoutes.HOME_PAGE,
    name: 'Encontradas',
    icon: faCrosshairs
  },
  {
    path: PrivateRoutes.HOME_PAGE,
    name: 'En adopción',
    icon: faDog
  },
  {
    path: PrivateRoutes.EDIT_PROFILE_PAGE,
    name: 'Mi perfil',
    icon: faUser
  },
  {
    path: PrivateRoutes.MESSENGER_PAGE,
    name: 'Chats',
    icon: faMessage
  },
  {
    path: PrivateRoutes.HOME_PAGE,
    name: 'Veterinarias',
    icon: faShieldCat
  },
  {
    path: PrivateRoutes.HOME_PAGE,
    name: 'Cerrar sesión',
    icon: faRightFromBracket
  }
];