import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrosshairs, faSearch, faDog, IconDefinition } from "@fortawesome/free-solid-svg-icons"

type PostType = 'found' | 'lost' | 'inAdoption' | 'more'

type ButtonTypeConfig = {
  label: string
  icon: IconDefinition | null
  color: string
}

const ButtonPostConfig: Record<PostType, ButtonTypeConfig> = {
  found: {
    label: 'Encontrado',
    icon: faCrosshairs,
    color: 'success-color',
  },
  lost: {
    label: 'Perdido',
    icon: faSearch,
    color: 'danger-color',
  },
  inAdoption: {
    label: 'En adopción',
    icon: faDog,
    color: 'aux-color',
  },
  more: {
    label: 'Ver Más',
    icon: null,
    color: 'primary-color',
  },
}

type Props = {
  type: PostType
  onClick: () => void
}

export const PostButton = ({ type }: Props) => {
  const config = ButtonPostConfig[type]

  return (
    <button className={`min-w-20 flex justify-center items-center py-1 px-2 rounded-xl bg-${config.color}`}>
      {
        config.icon && <FontAwesomeIcon icon={config.icon} className="text-white" />
      }
      <span className="text-white text-xs font-medium ml-1">{ config.label }</span>
    </button>
  )
}
