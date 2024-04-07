import { useState } from 'react'
import { Copy } from 'lucide-react'


interface DisplayPasswordProps {
    password: string
}

const DisplayPassword: React.FC<DisplayPasswordProps> = ({ password }) => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
            .catch(err => console.error('Error al copiar la contraseña: ', err))
    }

    return (
        password ? (
            <section className="py-6 relative">
                <div className="flex justify-center p-4 border border-gray-300 rounded-lg shadow-md">
                    <p className="text-[#191919] text-center">{password}</p>
                    <button
                        onClick={copyToClipboard}
                        type="button"
                        className='ml-auto relative' // Agregamos relative aquí
                    >
                        <Copy />
                        {copied && (
                            <div
                                className={`absolute top-0 left-full ml-2 transform -translate-y-1/2 rounded-md bg-black text-white py-1 px-3 text-xs`}
                            >
                                Copiado!
                            </div>
                        )}
                    </button>
                </div>
            </section>
        ) : null

    )
}

export default DisplayPassword
