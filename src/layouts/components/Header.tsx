import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dogAndCatBanner from '../../assets/images/dog-and-cat-banner.png'
import { TextInput } from '../../components/inputs/TextInput'
import { menuRoutes } from "../../constants/menuRoutes"

type Props = {
  handleMenu: () => void
  openMenu: boolean
}

export const Header = ({ openMenu, handleMenu }: Props) => {

  return (
    <header className='w-100 px-6 pt-3 pb-1 flex justify-between items-center'>
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
            <nav className="w-44 py-6 rounded-3xl bg-primary-gray absolute top-16 left-0 header-transition-nav-bar">
              <div className="w-3/4 h-px bg-black mx-auto mb-2"></div>
              <ul className="w-100 flex flex-col items-start">
                {
                  menuRoutes.map((route, index) => (
                    <li key={index} className="w-full block">
                      <a
                        href={route.path}
                        className="w-full flex items-center px-6 py-2 text-text-primary-color hover:text-primary-color hover:bg-hover-bg transition"
                      >
                        <FontAwesomeIcon icon={route.icon} className="mr-1" />
                        <span>{route.name}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>
          )
        }
      </button>
      <TextInput placeholder="Buscar" iconName="search" className="rounded-xl" style={{ backgroundColor: '#EFEFEF' }} />
      <img src={dogAndCatBanner} alt="PetFinder Logo" className="w-16" />
    </header>
  )
}
