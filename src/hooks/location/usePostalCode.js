import React from 'react'
import { useApi } from '../api/useApi'
import { GET_POSTAL_CODES, GET_POSTAL_CODES_BY_STATE } from '../../api/location/location'
import { config } from '../../utils/config'

const usePostalCode = () => {

    const apiPostalCodes = useApi(GET_POSTAL_CODES)
    const apiPostalCodesByState = useApi(GET_POSTAL_CODES_BY_STATE)

    const getPostalCodes = async () => {
        const response = await apiPostalCodes.request()
        if (response?.ok) {
            return response?.postalCodes_array
        } else {
            return null;
        }
    }

    const getPostalCodesByState = async (id) => {
        const response = await apiPostalCodes.request({ id: id })
        if (response?.ok) {
            return response?.postalCodes_array
        } else {
            return null;
        }
    }

    const numberToPC = (id) => {
        if (typeof id == 'number') {
            const pc = id.toString()
            if (pc.length < 5) {
                return numberToPC(`0${pc}`)
            } else {
                return pc
            }
        } else if (typeof id == 'string') {
            if (id.length < 5) {
                return numberToPC(`0${id}`)
            } else {
                return id
            }
        } else {
            return ''
        }
    }

    const pcToNumber = (id) => {
        if (typeof id === 'string') {
            if (config.regex.number.test(id)) {
                if (id.length > 1) {
                    if (id[0] == 0) {
                        const pc = id.split('').filter((number, index) => index != 0).join('');
                        return pcToNumber(pc)
                    } else {
                        return parseInt(id)
                    }
                } else {
                    if (id[0] == 0) {
                        return 1
                    } else {
                        return parseInt(id)
                    }
                }
            } else {
                return 1
            }
        } else {
            return 1
        }
    }

    return {
        getPostalCodes,
        getPostalCodesByState,
        numberToPC,
        pcToNumber
    }
}

export { usePostalCode }