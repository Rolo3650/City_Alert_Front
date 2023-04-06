import React from 'react'
import { useApi } from '../api/useApi'
import { GET_SETTLEMENTS_BY_MUNICIPALITY, GET_SETTLEMENTS_BY_PC } from '../../api/location/location'

const useSettlement = () => {

    const apiSettlementsByMunicipality = useApi(GET_SETTLEMENTS_BY_MUNICIPALITY)
    const apiSettlementsByPC = useApi(GET_SETTLEMENTS_BY_PC)

    const getSettlementsByMunicipality = async (id) => {
        const response = await apiSettlementsByMunicipality.request({ id: id })
        if (response?.ok) {
            return response?.settlements_array
        } else {
            return null;
        }
    }

    const getSettlementsByPC = async (id) => {
        const response = await apiSettlementsByPC.request({ id: id })
        if (response?.ok) {
            return response?.settlements_array
        } else {
            return null;
        }
    }

    const setSettlementFromMunicipality = async (id, setState) => {
        const settlements = await getSettlementsByMunicipality(id)
        setState(settlements)
    }


    return {
        getSettlementsByMunicipality,
        getSettlementsByPC,
        setSettlementFromMunicipality
    }
}

export { useSettlement }