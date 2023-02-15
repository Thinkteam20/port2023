import * as React from "react";
import {
    Flex,
    Avatar,
    Box,
    Text,
    Badge,
    Stack,
    Link,
    UnorderedList,
    ListItem,
    useColorModeValue,
    Divider,
    Code,
    VStack,
    Heading,
    HStack,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import UserIcon from "../assets/images/user_icon.png";
import logoIcon from "../assets/images/logo.png";
import Card from "./card";
import Card2 from "./card2";
import img1 from "../assets/images/projects/gosave.png";
import img2 from "../assets/images/projects/notch.png";
import img3 from "../assets/images/projects/souq.png";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { Achievements } from "./achevement";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
    const now = new Date();
    const dayOfWeek = getDayOfWeek(
        now.getDate(),
        now.getMonth(),
        now.getFullYear()
    );
    return (
        <>
            <Box h='100vh' w='full'>
                <Flex
                    direction='column'
                    align='center'
                    backgroundColor='transparent'
                >
                    <Flex direction={["column", "column", "row"]}>
                        <MotionBox
                            opacity='0'
                            initial={{
                                translateX: -150,
                                opacity: 0,
                            }}
                            animate={{
                                translateX: 0,
                                opacity: 1,
                                transition: {
                                    duration: ANIMATION_DURATION,
                                },
                            }}
                            m='auto'
                            mb={[16, 16, "auto"]}
                        >
                            <Heading as='h1'>
                                Happy {dayOfWeek}!
                                <br />
                                I'm Sangpil Jung
                            </Heading>
                            <Box
                                as='h2'
                                fontSize='2xl'
                                fontWeight='400'
                                mt={5}
                                bgGradient='linear(to-l, #7928CA, #FF0080)'
                                bgClip='text'
                                textAlign='center'
                            >
                                JAVASCRPT | REACT | .NET DEVELOPER
                            </Box>
                        </MotionBox>
                    </Flex>
                    <Stack direction='row' h='100%' p={4}>
                        <Divider orientation='vertical' />
                        <Code colorScheme='purple' children='diligent' />
                        <Code colorScheme='red' children='consistent' />
                        <Code colorScheme='yellow' children='honest' />
                        <Code colorScheme='blue' children='resilience' />
                    </Stack>
                    <MotionBox
                        w='100%'
                        opacity='0'
                        initial={{
                            translateY: 80,
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1,
                            transition: {
                                delay: ANIMATION_DURATION - 0.1,
                                duration: ANIMATION_DURATION,
                            },
                        }}
                    >
                        <Box mt={10}>
                            <Stack
                                mb={10}
                                mx={[0, 0, 10]}
                                padding={4}
                                align='start'
                                borderLeft='4px solid'
                                borderColor={"#53c8c4"}
                                color={"whatsapp"}
                                _hover={{ shadow: "lg" }}
                                // backgroundColor={useColorModeValue(
                                //     "gray.100",
                                //     "#1e2533"
                                // )}
                                backgroundColor='gray.900'
                                rounded='sm'
                                fontSize='md'
                            >
                                <Text
                                    textAlign='center'
                                    color='#53c8c4'
                                    fontWeight='bold'
                                >
                                    SKILLS
                                </Text>
                                <UnorderedList
                                    textAlign='left'
                                    paddingLeft={5}
                                    m={0}
                                    color='white'
                                >
                                    <ListItem>
                                        <Link as={NavLink} to='/open-source'>
                                            Live/Local Github Repos
                                            <Badge ml='1' colorScheme='green'>
                                                New
                                            </Badge>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link as={NavLink} to='/story-timeline'>
                                            Story page
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link as={NavLink} to='/tech-stack'>
                                            Tech Stack
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link as={NavLink} to='/achievements'>
                                            Achievements
                                        </Link>
                                    </ListItem>
                                </UnorderedList>
                            </Stack>

                            <Box>
                                <Heading as='h2'>What we write about</Heading>
                                <Text as='p' fontSize='small'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec condimentum quam
                                    arcu, eu tempus tortor molestie at.
                                    Vestibulum pretium condimentum dignissim.
                                    Vestibulum ultrices vitae nisi sed
                                    imperdiet. Mauris quis erat consequat,
                                    commodo massa quis, feugiat sapien.
                                    Suspendisse placerat vulputate posuere.
                                    Curabitur neque tortor, mattis nec lacus
                                    non, placerat congue elit.
                                </Text>
                            </Box>
                        </Box>
                    </MotionBox>
                </Flex>
            </Box>
            <Box h='100vh' w='full'>
                <HStack spacing='50px'>
                    <Card2 imageSrc={img1} />
                    <Card2 imageSrc={img2} />
                    <Card2 imageSrc={img3} />
                </HStack>
            </Box>
        </>
    );
};

export default Home;
