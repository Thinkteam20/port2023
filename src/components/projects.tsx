import {
    chakra,
    Box,
    Stack,
    Image,
    Flex,
    Text,
    Icon,
    HStack,
    createIcon,
    IconButton,
} from "@chakra-ui/react";
import { FaReact, FaBitbucket } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <>
            <Text mt={10} textTransform={"uppercase"}>
                Projects
            </Text>

            {projects.map((project) => (
                <Box mt={5} key={project.id} shadow='base' p={3}>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        _light={{ bg: "brand.500" }}
                        px={8}
                        py={0}
                        mx='auto'
                    >
                        <Box
                            w={{ base: "full", d: 11 / 12, xl: 9 / 12 }}
                            mx='auto'
                            pr={{ md: 20 }}
                        >
                            <Text
                                textTransform={"uppercase"}
                                color={project.fontColor}
                                fontWeight={600}
                                fontSize={"sm"}
                                p={2}
                                alignSelf={"flex-start"}
                                rounded={"md"}
                            >
                                {project.name}
                            </Text>

                            <chakra.p
                                mb={6}
                                fontSize={{ base: "small", md: "small" }}
                                color='gray.500'
                                _dark={{ color: "gray.300" }}
                            >
                                {project.description}
                            </chakra.p>
                            <Flex>
                                {/* {projects.stack.map((stack) => (
                                    <HStack align='center'>
                                        <IconButton
                                            aria-label='random'
                                            icon={stack}
                                        ></IconButton>
                                    </HStack>
                                ))} */}
                                <HStack align='center'>
                                    {/* The default icon size is 1em (16px) */}

                                    <Icon
                                        as={SiDotnet}
                                        w={8}
                                        h={8}
                                        color='purple.700'
                                    />
                                    {/* Use the `boxSize` prop to change the icon size */}
                                    <Icon
                                        as={SiJquery}
                                        w={8}
                                        h={8}
                                        color='blue.300'
                                    />
                                    {/* Use the `color` prop to change the icon color */}
                                    <Icon
                                        as={FaReact}
                                        w={8}
                                        h={8}
                                        color='cyan.400'
                                    />
                                    <Icon
                                        as={FaBitbucket}
                                        w={8}
                                        h={8}
                                        color='blue.700'
                                    />
                                </HStack>
                            </Flex>

                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                mb={{ base: 4, md: 8 }}
                                spacing={2}
                            ></Stack>
                        </Box>
                        <Box
                            w={{ base: "full", md: 10 / 12 }}
                            mx='auto'
                            textAlign='center'
                        >
                            <Image
                                w='full'
                                rounded='lg'
                                shadow='2xl'
                                src={project.img}
                                alt='Hellonext feedback boards software screenshot'
                            />
                        </Box>
                    </Flex>
                </Box>
            ))}
        </>
    );
}
