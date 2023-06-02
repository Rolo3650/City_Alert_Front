import { Button, FormControl } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useColors } from '../../hooks/themes/useColors'

const Navigate = ({ label, route, icon }) => {

    const navigateTo = useNavigate()
    const { colors } = useColors();
    const { theme } = colors;

    const onClick = () => {
        navigateTo(route)
    }

    return (
        <FormControl fullWidth>
            <Button
                color={theme == 'dark' ? 'lightPrimary' : 'darkPrimary'}
                className='px-4 fs-5 justify-content-start'
                sx={{
                    textTransform: 'none',
                }}
                startIcon={icon}
                onClick={onClick}
            >
                {label}
            </Button>
        </FormControl>
    )
}

export { Navigate }