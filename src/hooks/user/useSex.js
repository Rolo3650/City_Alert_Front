import React from 'react'
import { useApi } from '../api/useApi'
import { GET_SEXS } from '../../api/user/user'

const useSex = () => {

    const apiSexs = useApi(GET_SEXS);

    const getSexs = async () => {
        const response = await apiSexs.request()
        if (response?.ok) {
            return response?.sexs_array
        } else {
            return null;
        }
    }

    return {
        getSexs
    }
}

export default useSex