import { Button, FormControl } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/user/useUser'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useColors } from '../../hooks/themes/useColors';

const NavigateUser = () => {

    const navigateTo = useNavigate()
    const { user } = useUser()
    const { colors } = useColors();
    const { theme } = colors;

    const onClick = () => {
        navigateTo('/user/' + user?.id_user)
    }

    return (
        <FormControl fullWidth>
            <Button
                color={theme == 'dark' ? 'lightPrimary' : 'darkPrimary'}
                className='px-4 fs-5 justify-content-start'
                sx={{
                    textTransform: 'none',
                }}
                startIcon={<AccountCircleIcon />}
                onClick={onClick}
            >
                Ver mi información
            </Button>
        </FormControl>
    )
}

export { NavigateUser }