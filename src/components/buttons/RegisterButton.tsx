type Props = {
    onClick: () => void;
    disabled?: boolean;
    text: string;
}

const Button = ({ text, disabled, onClick }: Props) => {
    return (
        <button
            className="mx-20 md:mx-44 mt-2 px-12 py-2 bg-blue-500 rounded-3xl font-bold text-base md:text-2xl text-white text-center special-button"
            onClick={onClick}
            type="submit"
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
