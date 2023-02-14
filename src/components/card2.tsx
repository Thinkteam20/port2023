import { Box, Heading, Image, ScaleFade, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function Card2({ imageSrc }: { imageSrc: string }) {
    const ref = useRef(null);
    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-200px" },
        { disconnectOnLeave: false },
        {}
    );

    return (
        <ScaleFade
            initialScale={0.9}
            in={enterCount > 0}
            whileHover={{ scale: "1.1" }}
        >
            <Box
                w='full'
                borderRadius='lg'
                borderWidth='1px'
                cursor='point'
                overflow='hidden'
                ref={ref}
            >
                <Image src={imageSrc}></Image>
                <Box p={6}>
                    <Heading fontSize='small' letterSpacing='1px'>
                        123 logan load, Australia
                    </Heading>
                    <Text fontSize='x-small'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec condimentum quam arcu, eu tempus tortor molestie
                        at. Vestibulum pretium condimentum dignissim. Vestibulum
                        ultrices vitae nisi sed imperdiet. Mauris quis erat
                        consequat, commodo massa quis, feugiat sapien.
                        Suspendisse placerat vulputate posuere. Curabitur neque
                        tortor, mattis nec lacus non, placerat congue elit.
                    </Text>
                </Box>
            </Box>
        </ScaleFade>
    );
}
