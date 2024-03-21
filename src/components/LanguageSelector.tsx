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
            className="border p-2 rounded text-sm lg:text-base text-eucalyptus-50 bg-transparent"
        >
            <option value="en">en</option>
            <option value="es">es</option>
        </select>

    </>
)

export default LanguageSelector