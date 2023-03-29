import { colors } from "./colors";
import { regex } from "./regex";

const config = {

    // Server Front

    PORT: 3000,

    // Server Back
    URL_BACK: 'http://localhost:4000/',

    // Colors 
    colors: colors(),

    // regex
    regex: regex()

};

export { config };