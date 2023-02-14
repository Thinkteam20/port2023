import {
    List,
    HStack,
    ListItem,
    VStack,
    Box,
    Flex,
    Heading,
} from "@chakra-ui/react";

const timelineData = [
    {
        id: 1,
        logo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "$2400, Design changes",
        date: "22 DEC 7:20 PM",
        color: "brand.300",
        description: "rorem uposdofsodf ",
    },
    {
        id: 1,
        logo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "New order #4219423",
        date: "21 DEC 11:21 PM",
        color: "blue.300",
        description: "rorem uposdofsodf ",
    },
    {
        id: 1,
        logo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "Server Payments for April",
        date: "21 DEC 9:28 PM",
        color: "orange.300",
        description: "rorem uposdofsodf ",
    },
    {
        id: 1,
        logo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        title: "New card added for order #3210145",
        date: "20 DEC 3:52 PM",
        color: "red.300",
        description: "rorem uposdofsodf ",
    },
];

export function Achievements() {
    return (
        <List paddingBottom={4}>
            {(timelineData ?? []).map(({ id, title, description }, index) => {
                return (
                    <ListItem
                        key={id}
                        zIndex={1}
                        paddingTop={4}
                        position='relative'
                    >
                        <HStack
                            width='full'
                            alignItems='flex-start'
                            justifyContent='flex-start'
                        >
                            <Box
                                minWidth='14px'
                                height='14px'
                                marginTop={1}
                                borderRadius='full'
                                bgGradient='linear(to-l, #7928CA, #FF0080)'
                            />

                            <VStack width='full' spacing={2} textAlign='left'>
                                <Heading
                                    width='full'
                                    size='xs'
                                    textAlign='left'
                                >
                                    {title}
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
}
