import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import { config } from '../../utils/config';

const Theme = (props) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: config.colors.PRIMARY,
            },
            secondary: {
                main: config.colors.SECONDARY,
            },
        },
    });


    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export { Theme }