interface PasswordGeneratorButtonProps {
    onClick: () => void
}

const PasswordGeneratorButton: React.FC<PasswordGeneratorButtonProps> = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="w-full bg-[#191919] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-black"
    >
        Generar contraseña
    </button>
)

export default PasswordGeneratorButton
