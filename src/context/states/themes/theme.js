import { config } from "../../../utils/config"

const getThemeLight = () => {
    return {
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
            lightSecondary: {
                main: config.colors.WHITE,
                contrastText: config.colors.SECONDARY,
            },
            darkPrimary: {
                main: config.colors.DARK_GREY
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
    }
}


const getThemeDark = () => {
    return {
        palette: {
            primary: {
                main: config.colors.PRIMARY,
            },
            secondary: {
                main: config.colors.TERCIARY,
            },
            lightPrimary: {
                main: config.colors.WHITE,
                contrastText: config.colors.TERCIARY,
            },
            darkPrimary: {
                main: config.colors.LIGHT_GREY,
                contrastText: config.colors.PRIMARY,
            },
            red: {
                main: config.colors.DARK_RED,
                contrastText: config.colors.WHITE,
            },
            yellow: {
                main: config.colors.DARK_YELLOW,
                contrastText: config.colors.WHITE,
            },
            orange: {
                main: config.colors.DARK_ORANGE,
                contrastText: config.colors.WHITE,
            }
        },
    }
}

export { getThemeLight, getThemeDark }