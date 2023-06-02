import { Button, FormControl } from '@mui/material'
import React from 'react'
import PaletteIcon from '@mui/icons-material/Palette';
import { useColors } from '../../hooks/themes/useColors';
import { useTheme } from '../../hooks/themes/useTheme';

const ChangeTheme = () => {

    const { colors } = useColors();
    const { theme } = colors;
    const { changeDarkTheme, changeLightTheme } = useTheme();

    const toogleTheme = () => {
        if (theme == 'dark') {
            changeLightTheme()
        } else {
            changeDarkTheme()
        }
    }

    return (
        <FormControl fullWidth>
            <Button
                color={theme == 'dark' ? 'lightPrimary' : 'darkPrimary'}
                className='px-4 fs-5 justify-content-start'
                sx={{
                    textTransform: 'none',
                }}
                startIcon={<PaletteIcon />}
                onClick={toogleTheme}
            >
                Cambiar tema
            </Button>
        </FormControl>
    )
}

export { ChangeTheme }