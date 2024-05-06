type Props = {
  text: string;
  color: string;
}

export const PostTag = ({ text, color }: Props) => {
  return (
    <div className="w-40 px-2 md:px-4 overflow-hidden md:-mr-1">
      <p className={`w-100 py-1 rounded-2xl text-center font-bold text-sm md:text-lg text-white line-clamp-1 bg-${color}`}>{ text }</p>
    </div>
  )
}
