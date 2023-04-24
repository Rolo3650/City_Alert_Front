import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import { config } from '../../utils/config';
import { useTheme } from '../../hooks/themes/useTheme';

const Theme = (props) => {

    const { theme } = useTheme()

    const returnTheme = createTheme(theme);


    return (
        <ThemeProvider theme={returnTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export { Theme }