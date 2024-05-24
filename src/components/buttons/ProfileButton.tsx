type Props = {
  text: string;
  type: 'button' | 'submit';
  onClick?: () => void;
}

export const ProfileButton = ({ text, type, onClick }: Props) => {
  return (
    <button
      type={type}
      className="w-48 md:w-60 mt-6 px-8 py-2 bg-primary-color rounded-3xl font-semibold text-base md:text-2xl text-white text-center"
      onClick={onClick}
    >
      { text }
    </button>
  )
}
