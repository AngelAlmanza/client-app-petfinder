import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faHome, faSearch, faCrosshairs, faDog, faUser, faMessage, faShieldCat, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

type MenuRoute = {
  path: string
  name: string
  icon: IconDefinition
}

export const menuRoutes: MenuRoute[] = [
  {
    path: '/',
    name: 'Inicio',
    icon: faHome
  },
  {
    path: '/search',
    name: 'Buscar',
    icon: faSearch
  },
  {
    path: '/found',
    name: 'Encontradas',
    icon: faCrosshairs
  },
  {
    path: '/adoption',
    name: 'En adopción',
    icon: faDog
  },
  {
    path: '/profile',
    name: 'Mi perfil',
    icon: faUser
  },
  {
    path: '/chats',
    name: 'Chats',
    icon: faMessage
  },
  {
    path: '/veterinaries',
    name: 'Veterinarias',
    icon: faShieldCat
  },
  {
    path: '/logout',
    name: 'Cerrar sesión',
    icon: faRightFromBracket
  }
];