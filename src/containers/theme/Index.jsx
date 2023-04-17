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
            lightPrimary: {
                main: config.colors.WHITE,
                contrastText: config.colors.SECONDARY,
            },
            red: {
                main: config.colors.RED,
                contrastText: config.colors.WHITE,
            },
            yellow: {
                main: config.colors.YELLOW,
                contrastText: config.colors.WHITE,
            },
            orange: {
                main: config.colors.ORANGE,
                contrastText: config.colors.WHITE,
            }
        },
    });


    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export { Theme }