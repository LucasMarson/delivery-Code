import { Flex, Icon, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from 'react-icons/ri'
import { Sidebar } from "../Sidebar";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";

export function Header () {
    const { onOpen} = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex 
            as="header"
            w="100%"
            maxWidth="full"
            mx="auto"
            p="4"
            align="center"
            justifyContent="space-between"
            bg= "white"
            position="fixed"
        >
            <Image src="../../assets/logo.png"/>

            {!isWideVersion && (
                <IconButton
                    aria-label="Open navegation"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant= "unstyled"
                    onClick={onOpen}
                    mr="2"
                    display="flex"
                >
                </IconButton>
            )}

            <Sidebar />
        </Flex>
    )
}