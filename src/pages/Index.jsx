import React, { useContext } from 'react'
import { Context } from '../context/useReducer'

const Index = () => {

    const [state, dispatch] = useContext(Context)

    return (
        <div>Hola</div>
    )
}

export { Index }