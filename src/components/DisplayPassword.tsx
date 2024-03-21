import React, { useState } from 'react'
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
            <div className="flex items-center gap-2">
                <div className="flex-1 min-w-0">
                    <p className="break-words text-xs sm:text-sm">{password}</p>
                </div>
                <div className="relative">
                    <button
                        onClick={copyToClipboard}
                        className="p-2 text-eucalyptus-100 hover:text-gray-300"
                        type="button"
                    >
                        <Copy className="h-6 w-6" />
                    </button>
                    {copied && (
                        <div className={`absolute -top-8 ${copied ? 'right-0' : '-right-4'} translate-x-1/2 rounded-md bg-eucalyptus-500 text-emerald-50 py-1 px-3 text-xs`}>
                            Copied!
                        </div>
                    )}
                </div>
            </div>

        ) : null
    )
}

export default DisplayPassword
