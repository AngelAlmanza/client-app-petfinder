type Props = {
  text: string;
  onClick?: () => void;
}

export const SpecialButton = ({ text, onClick }: Props) => {
  return (
    <button
      className="px-12 py-3 bg-blue-500 rounded-3xl font-bold text-base text-white text-center special-button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
