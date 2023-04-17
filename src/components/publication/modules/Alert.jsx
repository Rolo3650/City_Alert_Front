import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { config } from '../../../utils/config'

const AlertCustom = ({ alert }) => {

    const returnAlert = () => {
        if (alert.id_publication_type == 0) {
            return <Alert
                severity='warning'
                variant='filled'
                sx={{
                    backgroundColor: config.colors.RED,
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
                    backgroundColor: config.colors.ORANGE,
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
                    backgroundColor: config.colors.YELLOW,
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