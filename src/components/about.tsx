import {
    Heading,
    VStack,
    Text,
    Stack,
    Image,
    Kbd,
    Box,
} from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "./motion";
import img1 from "../assets/images/about/prog.png";
import img2 from "../assets/images/about/prog2.jpeg";
import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function About() {
    const ANIMATION_DURATION = 0.5;
    return (
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
            <VStack
                width='full'
                spacing={10}
                paddingTop={5}
                paddingBottom={10}
                alignItems='flex-start'
            >
                <VStack width='full' spacing={5} alignItems='flex-start'>
                    <Heading as='h2'>💁🏻 I am...</Heading>
                    <Stack direction='column' spacing={4}>
                        <Text textAlign='left'>
                            Highly-motivated developer equipped with great
                            coding, debugging and project management abilities.
                            Accomplishes project goals consistently with
                            elegant, scalable code. Works great with team
                            members under Agile and Scrum frameworks, solving
                            real-world problems using engineering skills with
                            passion for friendly software design, solid
                            architecture, best practices and documentation.
                        </Text>
                        {/* <Image
                            width={734}
                            height={300}
                            className='next-image'
                            src={img1}
                        /> */}

                        <Stack spacing={0.5} direction='column'>
                            <Heading size='xs' as='strong'></Heading>
                            <Text as='small' color='gray.300'></Text>
                        </Stack>
                    </Stack>

                    <Text textAlign='left'>
                        I have been struggling to find a right learning
                        mechanism that I could consistently apply throughout the
                        years since our field is always changing with new
                        technologies, patterns, new libraries, etc ⁠
                    </Text>
                    <Text textAlign='left'>
                        Now i have own methodology to learn and apply
                        <Stack direction='row' h='100%' p={4}>
                            <Kbd>READ & LEARN</Kbd>{" "}
                            <MdOutlineDoubleArrow color='#53c8c4' />
                            <Kbd>Create</Kbd>
                            <MdOutlineDoubleArrow color='#53c8c4' />
                            <Kbd>Improve</Kbd>
                            <MdOutlineDoubleArrow color='#53c8c4' />
                            <Kbd>Deploy</Kbd>
                        </Stack>
                    </Text>
                </VStack>
            </VStack>
        </MotionBox>
    );
}
