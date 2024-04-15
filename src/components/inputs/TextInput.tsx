import { faEnvelope, faLock, faMagnifyingGlass, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type IconName = 'email' | 'password' | 'search'

type Props = {
  placeholder: string
  iconName: IconName
  className?: string
}

const ICONS: Record<IconName, IconDefinition> = {
  'email': faEnvelope,
  'password': faLock,
  'search': faMagnifyingGlass,
}

export const TextInput = ({ placeholder, iconName, className }: Props) => {
  const icon = ICONS[iconName]
  return (
    <div className="w-full relative">
      <input
        className={`w-full bg-white px-4 py-3 outline-none rounded-3xl pr-10 text-sm font-medium ${className}`}
        type="text"
        placeholder={placeholder}
      />
      <FontAwesomeIcon color="#A3A3A3" icon={icon} className="absolute right-4 top-[14px]" />
    </div>
  )
}
