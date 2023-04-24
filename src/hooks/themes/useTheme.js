import React, { useContext } from 'react'
import { Context } from '../../context/useReducer'

const useTheme = () => {

    const [state, dispatch] = useContext(Context)

    return {
        theme: state.theme
    }
}

export { useTheme }