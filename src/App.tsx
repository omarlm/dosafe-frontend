import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import PasswordGeneratorButton from './components/PasswordButtonGenerator'
import DisplayPassword from './components/DisplayPassword'
import { generatePassword } from './services/api'

import './App.css'

const App: React.FC = () => {

  const [language, setLanguage] = useState('en')
  const [password, setPassword] = useState('')

  const handleGeneratePassword = async () => {
    const generatedPassword = await generatePassword(language)
    setPassword(generatedPassword)
  }

  return (
    <>
      <div className="max-w-xl mx-auto w-full px-4">
        <section className="text-center md:mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight font-bold text-eucalyptus-50 mt-14">
            Password Generator
          </h1>
          <p className='text-lg lg:text-2xl text-eucalyptus-50 font-bold mt-2'>
            To remember passwords easily 🧠
          </p>
        </section>
        <section>
          <div className="mt-8 border border-eucalyptus-600 rounded-lg p-4 text-eucalyptus-50 text-pretty text-base text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos veritatis enim, dignissimos ipsam labore quo fugiat quibusdam maiores exercitationem quasi perferendis sequi possimus obcaecati mollitia temporibus dolores aliquid consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis similique porro nam necessitatibus magni earum quisquam tempora, ipsum officiis. Eaque quo asperiores voluptatibus est vero dicta. Sed ipsum porro aliquid?
          </div>
        </section>

        <div className="flex justify-center items-center">
          <section className="p-4 w-full max-w-md">
            <div className='flex flex-row justify-center items-center gap-2'>
              <LanguageSelector selectedLanguage={language} onChangeLanguage={setLanguage} />
              <PasswordGeneratorButton onClick={handleGeneratePassword} />
            </div>
            {password &&
              <div className="mt-8 border border-eucalyptus-600 rounded-lg p-4 text-eucalyptus-50 text-pretty text-base text-center">
                <DisplayPassword password={password} />
              </div>
            }
          </section>
        </div>

      </div>
    </>
  )
}

export default App
