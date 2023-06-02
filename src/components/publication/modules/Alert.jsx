import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { config } from '../../../utils/config'
import { useColors } from '../../../hooks/themes/useColors'

const AlertCustom = ({ alert }) => {

    const { colors } = useColors()

    const returnAlert = () => {
        if (alert.id_publication_type == 3) {
            return <Alert
                severity='warning'
                variant='filled'
                sx={{
                    backgroundColor: colors.$color_5,
                    alignItems: 'center',
                    "& .MuiSvgIcon-root": {
                        fontSize: "30px"
                    }
                }}
            >
                {alert.publication_type ?? ""}
            </Alert>
        } else if (alert.id_publication_type == 2) {
            return <Alert
                severity='warning'
                variant='filled'
                sx={{
                    backgroundColor: colors.$color_6,
                    alignItems: 'center',
                    "& .MuiSvgIcon-root": {
                        fontSize: "30px"
                    }
                }}
            >
                {alert.publication_type ?? ""}
            </Alert>
        } else if (alert.id_publication_type == 1) {
            return <Alert
                severity='warning'
                variant='filled'
                sx={{
                    backgroundColor: colors.$color_7,
                    alignItems: 'center',
                    "& .MuiSvgIcon-root": {
                        fontSize: "30px"
                    }
                }}
            >
                {alert.publication_type ?? ""}
            </Alert>
        }
    }

    return (<div className='mb-3'>
        {returnAlert()}
    </div>)
}

export { AlertCustom }