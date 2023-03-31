import React, { useContext } from 'react'
import { Context } from '../../context/useReducer';
import { useCookies } from 'react-cookie';
import { actionTypes } from '../../context/ActionTypes';

const useUser = () => {

    const [state, dispatch] = useContext(Context)
    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);

    const setUserInitialState = (payload) => {
        dispatch({ type: actionTypes.SET_USER_INITIAL_STATE, payload: {} })
    }

    const setUser = (payload) => {
        dispatch({ type: actionTypes.SET_USER, payload: { ...state.user, ...payload } })
    }

    const setUserFromCookie = () => {
        setUser(userCookie["user"])
    }

    return {
        setUserFromCookie,
        setUserInitialState,
        user: state.user
    }
}

export { useUser }