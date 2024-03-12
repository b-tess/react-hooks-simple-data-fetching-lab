import { useEffect, useState } from 'react'

function App() {
    const [imageLink, setImageLink] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImageLink(data.message)
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <img
                src={imageLink}
                alt='A Random Dog'
            />
        </div>
    )
}

export default App
