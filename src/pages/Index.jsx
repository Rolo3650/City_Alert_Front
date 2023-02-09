import React, { useContext } from 'react'
import { Context } from '../context/useReducer'

const Index = () => {

    const [state, dispatch] = useContext(Context)

    return (
        <div className="header">
            <div className="contenido">
                Hola
            </div>
        </div>
    )
}

export { Index }