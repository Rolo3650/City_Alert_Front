import { config } from "../../../utils/config"

const getColorsLight = () => {
    return {
        // bin   
        $color_1: config.colors.WHITE,
        $color_2: config.colors.DARK_WHITE,
        $color_3: config.colors.DARK_GREY,
        $color_4: config.colors.LIGHT_GREY,

        // alert
        $color_5: config.colors.RED,
        $color_6: config.colors.ORANGE,
        $color_7: config.colors.YELLOW,

        // theme
        $color_8: config.colors.PRIMARY,
        $color_9: config.colors.SECONDARY,

        // variants
        $color_10: config.colors.LIGHT_SECONDARY,
        $color_11: config.colors.DARK_SECONDARY,

        theme: "light",
    }
}

export { getColorsLight }