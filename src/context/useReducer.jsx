import React, { createContext, useReducer } from 'react'
import { actionTypes } from './ActionTypes'
import { initial_state } from './states'
import { useLogin } from '../hooks/user/useLogin'

const reducerObject = (state, payload) => {
    return ({
        [actionTypes.SET_INITIAL_SATE]: initial_state,

        // login
        [actionTypes.SET_LOGIN_INITIAL_STATE]: { ...state, login: initial_state.login },
        [actionTypes.SET_LOGIN]: { ...state, login: payload },

        // user
        [actionTypes.SET_USER_INITIAL_STATE]: { ...state, user: initial_state.user },
        [actionTypes.SET_USER]: { ...state, user: payload },
        
        // sign up
        [actionTypes.SET_SIGN_UP_INITIAL_STATE]: { ...state, sign_up: initial_state.sign_up },
        [actionTypes.SET_SIGN_UP]: { ...state, sign_up: payload },

        // publications
        [actionTypes.SET_PUBLICATIONS_INITIAL_STATE]: { ...state, publications: initial_state.publications },
        [actionTypes.SET_PUBLICATIONS]: { ...state, publications: payload },

        // new publication
        [actionTypes.SET_NEW_PUBLICATION_INITIAL_STATE]: { ...state, new_publication: initial_state.new_publication },
        [actionTypes.SET_NEW_PUBLICATION]: { ...state, new_publication: payload },

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