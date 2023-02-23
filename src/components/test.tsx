import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

export default function Test() {
    return (
        <Box p={4}>
            <Flex direction={["column", "row"]} justify='space-between'>
                <Heading size='lg' mb={4}>
                    My Website
                </Heading>
                <Box>
                    <Text display={["none", "block"]}>
                        Some navigation links
                    </Text>
                </Box>
            </Flex>
            <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={4}>
                <Box>
                    <Heading size='md'>Section 1</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ac iaculis metus, in euismod sapien. Sed at ipsum ac
                        tellus venenatis commodo.
                    </Text>
                </Box>
                <Box>
                    <Heading size='md'>Section 2</Heading>
                    <Text>
                        Sed sit amet mauris quis elit pretium ullamcorper vel
                        vel lorem. Vestibulum sagittis, ante ac tempor pretium,
                        libero sapien tempor risus, in malesuada mauris nulla in
                        magna.
                    </Text>
                </Box>
                <Box>
                    <Heading size='md'>Section 3</Heading>
                    <Text>
                        Nam pulvinar, lorem sit amet finibus convallis, velit
                        risus commodo massa, sit amet consequat nunc massa in
                        tellus. Vivamus ac metus nisi.
                    </Text>
                </Box>
                <Box>
                    <Heading size='md'>Section 4</Heading>
                    <Text>
                        Duis ac turpis sit amet velit tincidunt scelerisque. Sed
                        suscipit suscipit dolor, vitae tincidunt odio volutpat
                        eu.
                    </Text>
                </Box>
            </Grid>
        </Box>
    );
}
