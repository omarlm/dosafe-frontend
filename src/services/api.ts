import { IDisplayPassword } from '../interfaces/IDisplayPassword'

export const generatePassword = async (language: string): Promise<string> => {
    try {
        const response = await fetch(`http://localhost:3001/generate-password/${language}`)
        if (!response.ok) {
            throw new Error('Respuesta del servidor no fue exitosa')
        }
        const data: IDisplayPassword = await response.json()
        return data.password
    } catch (error) {
        console.log(error)
        throw error
    }
}