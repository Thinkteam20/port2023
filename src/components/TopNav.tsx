import React from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Text,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Icon,
    Tooltip,
} from "@chakra-ui/react";
// import { Link as NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

const webLinks = [
    { name: "About", to: "/about" },
    { name: "Blog", to: "/blog" },
];

const mobileLinks = [];

interface NavLinkProps {
    index?: string;
    name: string;
    path: string;
    onClose: () => void;
}

export default function TopNav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const menuProps = {
        bg: useColorModeValue("gray.200", "gray.900"),
        color: useColorModeValue("blue.500", "blue.200"),
    };

    return (
        <>
            <Box
                bg={useColorModeValue("white", "gray.700")}
                px={4}
                // boxShadow={"md"}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={["90%", "85%", "80%"]}
                    maxW={800}
                    mx='auto'
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                        aria-label={"Open Menu"}
                        display={["inherit", "inherit", "none"]}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {webLinks.map((link, idx) => (
                            <Link key={idx} to={link.to}>
                                {link.name}
                            </Link>
                        ))}
                    </HStack>
                    <Flex alignItems={"center"}>
                        <IconButton
                            as={Link}
                            to={"https://github.com/MA-Ahmad"}
                            size={"md"}
                            icon={<FaGithub />}
                            aria-label={"Github account"}
                            bg={useColorModeValue("white", "gray.700")}
                            _hover={{
                                textDecoration: "none",
                                bg: useColorModeValue("gray.200", "gray.900"),
                            }}
                        />
                        {/* <ColorModeSwitcher justifySelf='flex-end' /> */}
                        <Tooltip
                            label={text === "dark" ? "Dark mode" : "Light mode"}
                            aria-label='A tooltip'
                        >
                            <IconButton
                                size='md'
                                fontSize='md'
                                variant='ghost'
                                color='current'
                                marginLeft='2'
                                icon={<SwitchIcon />}
                                aria-label={`Switch to ${text} mode`}
                                _hover={{
                                    bg: useColorModeValue(
                                        "gray.200",
                                        "gray.900"
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
