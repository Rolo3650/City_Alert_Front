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

export { getThemeLight }