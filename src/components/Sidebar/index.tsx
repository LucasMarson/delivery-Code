import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <VStack>
              <SidebarNav />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return <SidebarNav />;
}
