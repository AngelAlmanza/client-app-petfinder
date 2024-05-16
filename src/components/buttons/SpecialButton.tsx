type Props = {
  text: string;
  isSubmitting?: boolean;
  type: 'submit' | 'button';
  onClick?: () => void;
}

export const SpecialButton = ({ text, type, isSubmitting = false, onClick }: Props) => {
  return (
    <button
      className="px-12 py-3 bg-blue-500 rounded-3xl font-bold text-base md:text-2xl text-white text-center special-button "
      onClick={onClick}
      type={type}
      disabled={isSubmitting}
    >
      {text}
    </button>
  )
}
