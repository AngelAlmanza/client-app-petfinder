import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent, MouseEvent } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import dogAndCatBanner from '../../assets/images/dog-and-cat-banner.png'
import { TextInput } from '../../components/inputs/TextInput'
import { menuRoutes } from "../../constants/menuRoutes"
import { useForm } from "../../hooks/useForm"
import { useAppDispatch } from "../../store/hooks"
import { logout } from "../../store/thunks/authThunks"
import { PrivateRoutes } from "../../constants/routes"
import { setSearchResults } from "../../store/slices/postSlice"

type Props = {
  handleMenu: () => void
  openMenu: boolean
}

export const Header = ({ openMenu, handleMenu }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    search,
    onChange
  } = useForm({ search: '' });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onChange('search', event.target.value);
  }

  const handleOnFocus = () => {
    dispatch(setSearchResults([]));
    navigate(PrivateRoutes.SEARCH_PAGE);
  }

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>, path: PrivateRoutes) => {
    if (path !== PrivateRoutes.LOGOUT_PAGE) return
    e.preventDefault();
    Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
      }
    })
  };

  return (
    <header className='w-100 px-6 pt-3 pb-1 flex justify-between items-center '>
      <button
        className="bg-primary-gray text-text-primary-color px-3 py-2 rounded-lg mr-2 relative"
        onClick={handleMenu}
      >
        {
          openMenu
            ? <FontAwesomeIcon icon={faXmark} size="lg" />
            : <FontAwesomeIcon icon={faBars} size="lg" />
        }
        {
          openMenu && (
            <nav className="w-44 py-6 rounded-3xl bg-primary-gray absolute top-16 left-0 header-transition-nav-bar z-50 lg:w-52">
              <div className="w-3/4 h-px bg-black mx-auto mb-2"></div>
              <ul className="w-100 flex flex-col items-start">
                {
                  menuRoutes.map((route, index) => (
                    <li key={index} className="w-full block ">
                      <NavLink
                        to={route.path}
                        className="w-full flex items-center px-6 py-2 text-text-primary-color hover:text-primary-color hover:bg-hover-bg transition lg:w-30 lg:h-20 lg:text-xl"
                        onClick={(event) => handleLogout(event, route.path)}
                      >
                        <FontAwesomeIcon icon={route.icon} className="mr-1 lg:text-3xl" />
                        <span>{route.name}</span>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
          )
        }
      </button>
      <TextInput
        placeholder="Buscar"
        iconName="search"
        className="rounded-xl"
        style={{ backgroundColor: '#EFEFEF' }}
        name="search"
        value={search}
        onChange={handleSearch}
        onFocus={handleOnFocus}
      />
      <img src={dogAndCatBanner} alt="PetFinder Logo" className="w-16" />
    </header>
  )
}
