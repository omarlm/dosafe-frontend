import React from 'react'

interface LanguageSelectorProps {
    selectedLanguage: string;
    onChangeLanguage: (language: string) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onChangeLanguage }) => (
    <>
        <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => onChangeLanguage(e.target.value)}
            className="w-25 bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    </>
)

export default LanguageSelector
