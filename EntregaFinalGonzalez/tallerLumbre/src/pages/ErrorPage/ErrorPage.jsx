import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
            }, 5000
        )
    }, [])

  return (
    <div>
        <h1 style={{paddingTop: '13vh', textAlign: 'center', paddingBottom: '60vh'}}>Hubo un error en la URL. Será redirigido a la página principal en 5 segundos</h1>
    </div>
  )
}

export default ErrorPage