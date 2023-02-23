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
    Tooltip,
} from "@chakra-ui/react";
import { FaReact, FaBitbucket } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiDotnet } from "react-icons/si";

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case "FaReact":
            return <FaReact />;
        case "FaBitbucket":
            return <FaBitbucket />;
        case "SiJquery":
            return <SiJquery />;
        case "SiDotnet":
            return <SiDotnet />;
        default:
            return null;
    }
};

export const projects = [
    {
        id: 1,
        name: "One Dream Community",
        description:
            "Hellonext is a feature voting software where you can allow your users to vote on features, publish roadmap, and complete your customer feedback loop",
        stack: {
            1: <SiDotnet />,
            2: <FaReact />,
            3: <SiJquery />,
            4: <FaBitbucket />,
        },
        img: "https://res.cloudinary.com/dlnh85cl7/image/upload/v1676592964/portfolio/odc-min_twexrv.jpg",
        fontColor: "#87BD42",
    },
    {
        id: 2,
        name: "Laep in!",
        description:
            "Hellonext is a feature voting software where you can allow your users to vote on features, publish roadmap, and complete your customer feedback loop",
        // stack: ["SiDotnet", "SiJquery", "FaReact", "FaBitbucket"],
        img: "https://res.cloudinary.com/dlnh85cl7/image/upload/v1676598560/portfolio/leapin_r7wjvm.jpg",
        fontColor: "red.500",
        stack: { 1: "SiDotnet", 2: "FaReact", 3: "SiJquery", 4: "FaBitbucket" },
    },
    {
        id: 3,
        name: "Uhak Station",
        description:
            "Hellonext is a feature voting software where you can allow your users to vote on features, publish roadmap, and complete your customer feedback loop",
        // stack: ["SiDotnet", "SiJquery", "FaReact", "FaBitbucket"],
        img: "https://res.cloudinary.com/dlnh85cl7/image/upload/v1676599614/portfolio/uhakstation_1_d5regy.png",
        fontColor: "gray.500",
        stack: { 3: "SiJquery", 4: "FaBitbucket" },
    },
];

export default function Projects() {
    return (
        <>
            <Text mt={10} textTransform={"uppercase"} fontWeight='bold'>
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
                                <HStack align='center'>
                                    <Flex mt={2} align='center'>
                                        {/* {Object.values(project.stack).map(
                                            (data) => (
                                                <div>{data}</div>
                                            )
                                        )} */}
                                        {Object.values(project.stack).map(
                                            (data) => {
                                                const IconComponent =
                                                    getIconComponent(data);
                                                if (IconComponent) {
                                                    const IconComp = (
                                                        <div>
                                                            {IconComponent}
                                                        </div>
                                                    );
                                                    return IconComp;
                                                }
                                                return null;
                                            }
                                        )}
                                    </Flex>
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
