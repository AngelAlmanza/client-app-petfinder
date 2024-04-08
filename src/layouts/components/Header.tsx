import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dogAndCatBanner from '../../assets/images/dog-and-cat-banner.png'
import { TextInput } from '../../components/inputs/TextInput'

type Props = {
  handleMenu: () => void
  openMenu: boolean
}

export const Header = ({ openMenu, handleMenu }: Props) => {
  return (
    <header className='w-100 px-6 pt-3 pb-1 flex justify-between items-center'>
      <button className="bg-primary-gray px-3 py-2 rounded-lg mr-2 relative">
        {
          openMenu
            ? <FontAwesomeIcon color="#797979" icon={faXmark} size="lg" onClick={handleMenu} />
            : <FontAwesomeIcon color="#797979" icon={faBars} size="lg" onClick={handleMenu} />
        }
        {
          openMenu && (
            <nav className="px-4 py-2 rounded-3xl bg-primary-gray absolute top-14">
              <ul>
                <li>Inicio</li>
                <li>Adopta</li>
                <li>Donaciones</li>
                <li>Voluntariado</li>
                <li>Eventos</li>
                <li>Contacto</li>
              </ul>
            </nav>
          )
        }
      </button>
      <TextInput placeholder="Buscar" iconName='search' className="bg-primary-gray rounded-2xl" />
      <img src={dogAndCatBanner} alt="PetFinder Logo" className='w-16' />
    </header>
  )
}
