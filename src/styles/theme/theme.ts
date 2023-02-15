import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                // bg: "gray.400",
                color: "black",
            },
            // styles for the `a`
            // a: {
            //     color: "white",
            //     _hover: {
            //         textDecoration: "underline",
            //     },
            // },
            variants: {
                base: {
                    bg: "yellow.500",
                    fontSize: "md",
                    color: "black",
                },
                sm: {
                    bg: "teal.500",
                    fontSize: "lg",
                },
                md: {
                    bg: "orange.500",
                    fontSize: "xl",
                },
            },
        },
    },
});
