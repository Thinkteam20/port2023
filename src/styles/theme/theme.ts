import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
});
