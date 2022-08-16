import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        red: {
            "500": "#ed5359"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
            }
        }
    }
})