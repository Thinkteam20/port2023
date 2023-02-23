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
    Image,
    Link,
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/images/logos/logo.png";

const webLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/Resume" },
    { name: "Contact", path: "/Contact" },
];

const mobileLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/Resume" },
    { name: "Contact", path: "/Contact" },
];

interface NavLinkProps {
    index?: string;
    name: string;
    path: string;
    onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <Link
            as={RouterNavLink}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                color: "black",
                bg: useColorModeValue("gray.200", "gray.900"),
            }}
            _activeLink={{
                color: useColorModeValue("#53c8c4", "#53c8c4"),
            }}
            onClick={() => props.onClose()}
            to={props.path}
        >
            {props.name}
        </Link>
    );
};

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
                // bg={useColorModeValue("white", "gray.700")}
                bg='black'
                px={4}
                boxShadow={"lg"}
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
                        bg={useColorModeValue("white", "gray.700")}
                    />
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                        sx={{ color: "white" }}
                    >
                        <Image src={logo} h={85} w={90}></Image>
                        {webLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                name={link.name}
                                path={link.path}
                                onClose={onClose}
                            />
                        ))}
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Tooltip label='Linkedin'>
                            <IconButton
                                as={Link}
                                to={"https://github.com/MA-Ahmad"}
                                size={"md"}
                                icon={<FaLinkedin />}
                                aria-label={"Github account"}
                                bg={useColorModeValue("white", "gray.700")}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.200",
                                        "gray.900"
                                    ),
                                }}
                            />
                        </Tooltip>

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
                                bg={useColorModeValue("white", "gray.700")}
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
                {isOpen ? (
                    <Box
                        pb={4}
                        w={["100%", "100%", "80%"]}
                        maxW={800}
                        display={["inherit", "inherit", "none"]}
                        color='white'
                    >
                        <Stack as={"nav"} spacing={4}>
                            {mobileLinks.map((link, index) => (
                                <NavLink
                                    name={link.name}
                                    path={link.path}
                                    onClose={onClose}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
