import React from 'react'
import { useApi } from '../api/useApi'
import { GET_STATES } from '../../api/location/location'

const useStateLocation = () => {

    const apiState = useApi(GET_STATES)

    const getStates = async () => {
        const response = await apiState.request()
        if (response?.ok) {
            return response?.states_array
        } else {
            return null;
        }
    }


    return {
        getStates
    }
}

export { useStateLocation }