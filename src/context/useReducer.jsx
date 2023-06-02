import React, { createContext, useReducer } from 'react'
import { actionTypes } from './ActionTypes'
import { initial_state } from './states'
import { useLogin } from '../hooks/user/useLogin'
import { getThemeDark, getThemeLight } from './states/themes/theme'
import { getColorsDark, getColorsLight } from './states/themes/colors'

const reducerObject = (state, payload) => {
    return ({
        [actionTypes.SET_INITIAL_SATE]: initial_state,

        // login
        [actionTypes.SET_LOGIN_INITIAL_STATE]: { ...state, login: initial_state.login },
        [actionTypes.SET_LOGIN]: { ...state, login: payload },

        // user
        [actionTypes.SET_USER_INITIAL_STATE]: { ...state, user: initial_state.user },
        [actionTypes.SET_USER]: { ...state, user: payload },

        // edit user
        [actionTypes.SET_EDIT_USER_INITIAL_STATE]: { ...state, edit_user: initial_state.edit_user },
        [actionTypes.SET_EDIT_USER]: { ...state, edit_user: payload },

        // sign up
        [actionTypes.SET_SIGN_UP_INITIAL_STATE]: { ...state, sign_up: initial_state.sign_up },
        [actionTypes.SET_SIGN_UP]: { ...state, sign_up: payload },

        // publications
        [actionTypes.SET_PUBLICATIONS_INITIAL_STATE]: { ...state, publications: initial_state.publications },
        [actionTypes.SET_PUBLICATIONS]: { ...state, publications: payload },

        // publications resume
        [actionTypes.SET_PUBLICATIONS_RESUME_INITIAL_STATE]: { ...state, publications_resume: initial_state.publications_resume },
        [actionTypes.SET_PUBLICATIONS_RESUME]: { ...state, publications_resume: payload },

        // new publication
        [actionTypes.SET_NEW_PUBLICATION_INITIAL_STATE]: { ...state, new_publication: initial_state.new_publication },
        [actionTypes.SET_NEW_PUBLICATION]: { ...state, new_publication: payload },

        // theme 
        [actionTypes.SET_THEME_LIGHT]: {
            ...state, theme: getThemeLight(),
            colors: getColorsLight(),
        },
        [actionTypes.SET_THEME_DARK]: {
            ...state, theme: getThemeDark(),
            colors: getColorsDark(),
        }

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