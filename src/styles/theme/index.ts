import { extendTheme } from "@chakra-ui/react";
import { flashless } from "@laurabeatris/chakra-ui-flashless";

import { breakPoints } from "./breakPoints";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { config } from "./config";

export const theme = extendTheme(
    flashless({
        // config,
        // colors,
        // fonts,
        breakPoints,
    })
);
