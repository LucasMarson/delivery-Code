import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsFillPinMapFill } from "react-icons/bs";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom"

export function SidebarNav() {

  function openBag() {
    const event = new CustomEvent('openBag')
    window.dispatchEvent(event);
  }

  return (
    <>
      <HStack mx="4">
        <InputGroup>
          <Input
            type="search"
            placeholder="Procurar no restaurante..."
            borderRightRadius="none"
          />
          <Button
            leftIcon={<MdSearch />}
            borderLeftRadius="none"
            px="6"
            colorScheme="red"
          >
            Buscar
          </Button>
        </InputGroup>
      </HStack>
      <Flex gap="4" mr="4" direction={["column", "row"]}>
        <Button
          leftIcon={<BsFillPinMapFill />}
          colorScheme="red"
          variant="outline"
        >
          Entrega: Pedreira
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            colorScheme="red"
            variant="outline"
            borderRadius="md"
            borderWidth="1px"
            px={4}
            y={3}
            rightIcon={<RiArrowDropDownLine />}
          >
            <FaUser />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/solicitation">
              <Text as="span">Pedidos</Text>
            </MenuItem>
            <MenuItem as={Link} to="/favorites">
              <Text as="span">Favoritos</Text>
            </MenuItem>
            <MenuItem as={Link} to="/profile">
              <Text as="span">Perfil</Text>
            </MenuItem>
            <MenuItem as={Link} to="/adresses">
              <Text as="span">Meus Endereços</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem as={Link} to="/">
              <Text as="span">Sair</Text>
            </MenuItem>
          </MenuList>
        </Menu>

        <Button
          leftIcon={<FaShoppingBag />}
          colorScheme="red"
          variant="outline"
          onClick={openBag}
        >
          Sacola
        </Button>
      </Flex>
    </>
  );
}
