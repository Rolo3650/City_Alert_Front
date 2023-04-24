import React, { useContext } from 'react'
import { Context } from '../../context/useReducer'

const useColors = () => {

    const [state, dispatch] = useContext(Context)

    return {
        colors: state?.colors,
        theme: state?.colors?.theme
    }
}

export { useColors }