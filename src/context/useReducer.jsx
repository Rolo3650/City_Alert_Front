import React, { createContext, useReducer } from 'react'


const initial_state = {
    
}

const reducerObject = (state, payload) => ({
    [actionTypes.SET_INITIAL_SATE]: {
        
    }
})

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