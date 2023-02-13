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
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
// import { MotionBox, MotionFlex } from "./motion";
// import Header from "./header";
// import Projects from "./projects";
// import { projectsList } from "data/projects-list";
// import "style/style.css";
import UserIcon from "../assets/images/user_icon.png";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
    return (
        <Flex
            direction='column'
            align='center'
            mt={1.5}
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
                    <Avatar
                        size={"2xl"}
                        src={UserIcon}
                        // src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
                    />
                </MotionBox>
                <MotionFlex
                    ml={["auto", "auto", 16]}
                    m={["auto", "initial"]}
                    w={["90%", "85%", "80%"]}
                    maxW='800px'
                    opacity='0'
                    justify='center'
                    direction='column'
                    initial={{
                        opacity: 0,
                        translateX: 150,
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            duration: ANIMATION_DURATION,
                        },
                    }}
                >
                    <Box
                        as='h2'
                        fontSize='2xl'
                        fontWeight='400'
                        textAlign='left'
                    >
                        My name is{" "}
                        <Box as='strong' fontWeight='600'>
                            Sangpil Jung!
                        </Box>{" "}
                        and I&apos;m a{" "}
                        <Box as='span' whiteSpace='nowrap'>
                            Full Stack Developer and
                        </Box>{" "}
                        <Box as='span' whiteSpace='nowrap'>
                            an open source lover&nbsp;
                        </Box>
                        from{" "}
                    </Box>
                    <Box
                        as='h2'
                        fontSize='2xl'
                        fontWeight='400'
                        mt={5}
                        textAlign='left'
                    >
                        This is my digital garden, where I write about the
                        things I'm working on and share what I've learned. 😊
                    </Box>
                </MotionFlex>
            </Flex>
        </Flex>
    );
};

export default Home;
