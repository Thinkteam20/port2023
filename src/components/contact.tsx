import {
    Avatar,
    Box,
    Button,
    chakra,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    GridItem,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    Radio,
    RadioGroup,
    Select,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <Box
                bg='#edf3f8'
                _dark={{
                    bg: "#111",
                }}
                p={10}
            >
                <Box>
                    <SimpleGrid
                        display={{
                            base: "initial",
                            md: "grid",
                        }}
                        columns={{
                            md: 3,
                        }}
                        spacing={{
                            md: 6,
                        }}
                    >
                        <GridItem
                            colSpan={{
                                md: 1,
                            }}
                        >
                            <Box px={[4, 0]}>
                                <Heading
                                    fontSize='lg'
                                    fontWeight='md'
                                    lineHeight='6'
                                >
                                    Profile
                                </Heading>
                                <Text
                                    mt={1}
                                    fontSize='sm'
                                    color='gray.600'
                                    _dark={{
                                        color: "gray.400",
                                    }}
                                >
                                    This information will be displayed publicly
                                    so be careful what you share.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem
                            mt={[5, null, 0]}
                            colSpan={{
                                md: 2,
                            }}
                        >
                            <chakra.form
                                method='POST'
                                shadow='base'
                                rounded={[null, "md"]}
                                overflow={{
                                    sm: "hidden",
                                }}
                            >
                                <Stack
                                    px={4}
                                    py={5}
                                    bg='white'
                                    _dark={{
                                        bg: "#141517",
                                    }}
                                    spacing={6}
                                    p={{
                                        sm: 6,
                                    }}
                                >
                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl
                                            as={GridItem}
                                            colSpan={[3, 2]}
                                        >
                                            <FormControl
                                                as={GridItem}
                                                colSpan={[6, 3]}
                                            >
                                                <FormLabel
                                                    htmlFor='first_name'
                                                    fontSize='sm'
                                                    fontWeight='md'
                                                    color='gray.700'
                                                    _dark={{
                                                        color: "gray.50",
                                                    }}
                                                >
                                                    Name
                                                </FormLabel>
                                                <Input
                                                    type='text'
                                                    name='first_name'
                                                    id='first_name'
                                                    autoComplete='given-name'
                                                    mt={1}
                                                    focusBorderColor='brand.400'
                                                    shadow='sm'
                                                    size='sm'
                                                    w='full'
                                                    rounded='md'
                                                    color='gray.700'
                                                    _dark={{
                                                        color: "gray.50",
                                                    }}
                                                />
                                            </FormControl>
                                        </FormControl>
                                    </SimpleGrid>

                                    <div>
                                        <FormControl id='email' mt={1}>
                                            <FormLabel
                                                fontSize='sm'
                                                fontWeight='md'
                                                color='gray.700'
                                                _dark={{
                                                    color: "gray.50",
                                                }}
                                            >
                                                Message
                                            </FormLabel>
                                            <Textarea
                                                placeholder=''
                                                mt={1}
                                                rows={3}
                                                shadow='sm'
                                                focusBorderColor='brand.400'
                                                fontSize={{
                                                    sm: "sm",
                                                }}
                                            />
                                            <FormHelperText>
                                                Brief description of job
                                                Position
                                            </FormHelperText>
                                        </FormControl>
                                    </div>

                                    <FormControl></FormControl>

                                    <FormControl>
                                        <FormLabel
                                            fontSize='sm'
                                            fontWeight='md'
                                            color='gray.700'
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            Position Description
                                        </FormLabel>
                                        <Flex
                                            mt={1}
                                            justify='center'
                                            px={6}
                                            pt={5}
                                            pb={6}
                                            borderWidth={2}
                                            _dark={{
                                                color: "gray.500",
                                            }}
                                            borderStyle='dashed'
                                            rounded='md'
                                        >
                                            <Stack
                                                spacing={1}
                                                textAlign='center'
                                            >
                                                <Icon
                                                    mx='auto'
                                                    boxSize={12}
                                                    color='gray.400'
                                                    _dark={{
                                                        color: "gray.500",
                                                    }}
                                                    stroke='currentColor'
                                                    fill='none'
                                                    viewBox='0 0 48 48'
                                                    aria-hidden='true'
                                                >
                                                    <path
                                                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                                        strokeWidth='2'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </Icon>
                                                <Flex
                                                    fontSize='sm'
                                                    color='gray.600'
                                                    _dark={{
                                                        color: "gray.400",
                                                    }}
                                                    alignItems='baseline'
                                                >
                                                    <chakra.label
                                                        htmlFor='file-upload'
                                                        cursor='pointer'
                                                        rounded='md'
                                                        fontSize='md'
                                                        color='brand.600'
                                                        _dark={{
                                                            color: "brand.200",
                                                        }}
                                                        pos='relative'
                                                        _hover={{
                                                            color: "brand.400",
                                                            _dark: {
                                                                color: "brand.300",
                                                            },
                                                        }}
                                                    >
                                                        <span>
                                                            Upload a file
                                                        </span>
                                                        <VisuallyHidden>
                                                            <input
                                                                id='file-upload'
                                                                name='file-upload'
                                                                type='file'
                                                            />
                                                        </VisuallyHidden>
                                                    </chakra.label>
                                                    <Text pl={1}>
                                                        or drag and drop
                                                    </Text>
                                                </Flex>
                                                <Text
                                                    fontSize='xs'
                                                    color='gray.500'
                                                    _dark={{
                                                        color: "gray.50",
                                                    }}
                                                >
                                                    PDF, PNG, JPG, GIF up to
                                                    10MB
                                                </Text>
                                            </Stack>
                                        </Flex>
                                    </FormControl>
                                </Stack>
                                <Box
                                    px={{
                                        base: 4,
                                        sm: 6,
                                    }}
                                    py={3}
                                    bg='gray.50'
                                    _dark={{
                                        bg: "#121212",
                                    }}
                                    textAlign='right'
                                >
                                    <Button
                                        type='submit'
                                        colorScheme='brand'
                                        _focus={{
                                            shadow: "",
                                        }}
                                        fontWeight='md'
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </chakra.form>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
}
