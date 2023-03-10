import * as React from "react";
import {
    Box,
    ChakraProvider,
    ColorModeScript,
    extendTheme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import { theme } from "./styles/theme/theme";
import Footer from "./components/footer";

export const App = () => (
    <ChakraProvider theme={theme} resetCSS={true}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <TopNav />
        <Box
            textAlign='center'
            fontSize='xl'
            w={["90%", "85%", "80%"]}
            maxW={900}
            mx='auto'
            bg='white'
            style={{ backgroundSize: "1200% 1200%" }}
        >
            <Box pt={10} pb={10} mt={2}>
                <Outlet />
            </Box>
        </Box>
        <Footer />
    </ChakraProvider>
);
