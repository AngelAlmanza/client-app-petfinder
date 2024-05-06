type Props = {
  placeholder: string
  style?: React.CSSProperties
  value: string
  onChange: (value: string) => void
}

export const PostTextInput = ({ placeholder, style, value, onChange }: Props) => {
  return (
    <input
      className="w-full bg-white px-4 py-3 outline-none rounded-3xl text-sm md:text-xl font-medium border border-icon-color mb-4 shadow-md"
      type="text"
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
