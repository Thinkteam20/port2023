import * as React from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import { theme } from "./style/theme";

// const theme = extendTheme({
//     colors: {
//         black: "#000",
//         white: "#fff",
//         gray: {
//             50: "#f7fafc",
//             900: "#171923",
//         },
//     },
// });

export const App = () => (
    <ChakraProvider theme={theme} resetCSS={true}>
        <TopNav />
        <Box
            textAlign='center'
            fontSize='xl'
            w={["90%", "85%", "80%"]}
            maxW={800}
            mx='auto'
            bg='white'
        >
            <Outlet />
        </Box>
    </ChakraProvider>
);
