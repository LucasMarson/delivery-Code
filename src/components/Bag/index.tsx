import { Text, Flex, VStack, HStack, Input, Button, InputGroup, CloseButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import { ListBag } from "../Product/ListBag";


export default function Bag() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("openBag", () => {
      setShow(true);
    })
  })

  return (
    <Dock
      position="right"
      isVisible={show}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <Flex maxWidth="100vw" h="100%" p="6" direction="column" gap="4">
        <HStack justify="space-between" align="center">
          <Text as="span" fontWeight="bold" fontSize="20">Minha Sacola</Text>
          <CloseButton onClick={() => setShow(false)} />
        </HStack>

        <VStack align="left" h="380px" overflow="auto">
            {
                [1, 2, 3, 4, 5].map((product) => {
                    return (
                      <ListBag name="Big Mac" price="22,00" amount="01" value="22,00"/>
                    )
                })
            }
        </VStack>

        <VStack align="left" gap="2">
            <HStack justify="space-between" align="center">
                <Text as="span">Subtotal</Text>
                <Text as="span">R$ 45,00</Text>
            </HStack>

            <HStack justify="space-between" align="center">
                <InputGroup w="60%">
                    <Input type="text" placeholder="Cupom" borderRightRadius="none"/>
                    <Button borderLeftRadius="none" colorScheme="green" variant="outline">Aplicar</Button>
                </InputGroup>
                <Text as="span" color="green">- R$ 0,00</Text>
            </HStack>

            <HStack justify="space-between" align="center">
                <Text as="span">Taxa de entrega</Text>
                <Text as="span">R$ 5,00</Text>
            </HStack>

            <HStack justify="space-between" align="center" fontWeight="bold" fontSize="20px" mt="10">
                <Text as="span">Total</Text>
                <Text as="span">R$ 150,00</Text>
            </HStack>

            <Button alignItems="center" borderRadius="4" colorScheme="red">
                Finalizar pedido
            </Button>
        </VStack>
      </Flex>
    </Dock>
  );
}