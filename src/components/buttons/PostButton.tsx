import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrosshairs, faSearch, faDog, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { PublicationTypes } from '../../enums/publicationTypes';
import { getTypeByValue } from "../../utils/getTypeByValue"

enum ExtraPostType {
  more = 'more',
}

type TagByPostType = PublicationTypes | ExtraPostType

type ButtonTypeConfig = {
  label: string
  icon: IconDefinition | null
  color: string
}

const ButtonPostConfig: Record<TagByPostType, ButtonTypeConfig> = {
  found: {
    label: getTypeByValue(PublicationTypes.FOUND),
    icon: faCrosshairs,
    color: 'success-color',
  },
  lost: {
    label: getTypeByValue(PublicationTypes.LOST),
    icon: faSearch,
    color: 'danger-color',
  },
  adopt: {
    label: getTypeByValue(PublicationTypes.ADOPT),
    icon: faDog,
    color: 'aux-color',
  },
  more: {
    label: 'Ver Más',
    icon: null,
    color: 'primary-color',
  },
  [PublicationTypes.DEFAULT]: {
    label: getTypeByValue(PublicationTypes.DEFAULT),
    icon: null,
    color: 'gray-color',
  }
}

type Props = {
  type: TagByPostType
  text?: string
  styles?: React.CSSProperties
  onClick: () => void
}

export const PostButton = ({ type, text, styles, onClick }: Props) => {
  const config = ButtonPostConfig[type]

  return (
    <button
      className={` min-w-20 flex justify-center items-center py-1 px-2 rounded-xl bg-${config.color}`}
      style={styles}
      onClick={onClick}
    >
      {
        config.icon && <FontAwesomeIcon icon={config.icon} className="text-white" />
      }
      <span className="text-white text-xs md:text-xl lg:text-2xl font-medium ml-1">{ text || config.label }</span>
    </button>
  )
}
