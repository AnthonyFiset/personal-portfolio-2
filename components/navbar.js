import Logo from "./logo";
import NextLink from "next/link";
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor} target={target} {...props}>
                {children}
            </Link>
        </NextLink>
    )

}