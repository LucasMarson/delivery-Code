import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { Address } from "../../components/Address/andressList";

export function Adresses() {
  return (
    <VStack align="center" justify="center">
      <Flex direction="column"  w={["100%","50%"]} h="100vh">
        <Flex align="center" justify="space-between" mt={["20", "24"]} mb="8" >
            <Text as="h2" fontWeight="bold" fontSize="25px">
            Meus Endereços
            </Text>
            <Button size="md" variant="outline" colorScheme="red">Adicionar Endereços</Button>
        </Flex>

        <VStack>
            {
                [1, 2, 3].map(address => {
                    return (
                        <Address />
                    )
                })
            }
        </VStack>
      </Flex>
    </VStack>
  );
}
