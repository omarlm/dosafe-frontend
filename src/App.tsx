import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import PasswordGeneratorButton from './components/PasswordButtonGenerator'
import DisplayPassword from './components/DisplayPassword'
import { NavBar } from './components/NavBar'
import { generatePassword } from './services/api'

import './App.css'

const App: React.FC = () => {

  const [language, setLanguage] = useState('es')
  const [password, setPassword] = useState('')

  const handleGeneratePassword = async () => {
    const generatedPassword = await generatePassword(language)
    setPassword(generatedPassword)
  }

  return (
    <>
      <NavBar />
      <div className='max-w-screen-sm mx-auto px-4 py-4'>

        <section className="py-6">
          <h1 className="text-[#191919] text-6xl font-bold text-left">Password Generator</h1>
          <p className="text-gray-400">Para recordar contraseñas fácilmente 🧠</p>
        </section>

        <section className="py-6">
          <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <p className="text-[#191919]">
              Este proyecto nació de una idea mientras veía un stream de Midudev en Twitch.tv. Él afirmaba que las contraseñas más seguras son las que forman una frase hecha. Esta aplicación genera contraseñas con la intención de mantener coherencia en las mismas.
              ¡Pruébala! 😊
            </p>
          </div>
        </section>

        <section >
          <div className='lg:pt-14 flex justify-start gap-2'>
            <LanguageSelector selectedLanguage={language} onChangeLanguage={setLanguage} />
            <PasswordGeneratorButton onClick={handleGeneratePassword} />
          </div>
          {password &&
            <div >
              <DisplayPassword password={password} />
            </div>
          }
        </section>
      </div>
    </>
  )
}

export default App
