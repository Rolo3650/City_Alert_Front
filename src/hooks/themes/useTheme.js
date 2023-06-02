import React, { useContext } from 'react'
import { Context } from '../../context/useReducer'
import { actionTypes } from '../../context/ActionTypes'

const useTheme = () => {

    const [state, dispatch] = useContext(Context)

    const changeDarkTheme = () => {
        dispatch({ type: actionTypes.SET_THEME_DARK })
    }

    const changeLightTheme = () => {
        dispatch({ type: actionTypes.SET_THEME_LIGHT })
    }

    return {
        theme: state.theme,
        changeDarkTheme,
        changeLightTheme
    }
}

export { useTheme }