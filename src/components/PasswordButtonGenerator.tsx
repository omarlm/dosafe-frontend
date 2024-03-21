// PasswordGeneratorButton.tsx
import React from 'react'

interface PasswordGeneratorButtonProps {
    onClick: () => void
}

const PasswordGeneratorButton: React.FC<PasswordGeneratorButtonProps> = ({ onClick }) => (
    <button type="button" className="bg-eucalyptus-400 hover:bg-emerald-300 text-eucalyptus-950 p-2 rounded text-sm lg:text-base" onClick={onClick}>
        Generate password
    </button>
)

export default PasswordGeneratorButton
