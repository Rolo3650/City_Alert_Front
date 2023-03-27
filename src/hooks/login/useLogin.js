import React, { useContext } from 'react'
import { actionTypes } from '../../context/ActionTypes'
import { Context } from '../../context/useReducer'

const useLogin = () => {

    const [state, dispatch] = useContext(Context)

    const setLogin = (payload) => {
        dispatch({ type: actionTypes.SET_LOGIN, payload: { ...state.login, ...payload } })
    }

    const setEmail = (payload) => {
        dispatch({ type: actionTypes.SET_LOGIN, payload: { ...state.login, email: { ...state.login.email, ...payload } } })
    }

    const setPassword = (payload) => {
        dispatch({ type: actionTypes.SET_LOGIN, payload: { ...state.login, password: { ...state.login.password, ...payload } } })
    }

    return {
        login: state.login,
        setLogin,
        setEmail,
        setPassword
    }

}

export { useLogin }