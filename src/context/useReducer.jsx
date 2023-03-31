import React, { createContext, useReducer } from 'react'
import { actionTypes } from './ActionTypes'
import { initial_state } from './states'

const reducerObject = (state, payload) => {
    return ({
        [actionTypes.SET_INITIAL_SATE]: initial_state,

        // login
        [actionTypes.SET_LOGIN_INITIAL_STATE]: { ...state, login: initial_state.login },
        [actionTypes.SET_LOGIN]: { ...state, login: payload }
    })
}

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}

export const Context = createContext(initial_state);

export const ReducerContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initial_state);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}