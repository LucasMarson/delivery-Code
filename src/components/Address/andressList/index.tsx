import { Flex, VStack, Text, HStack, Button } from "@chakra-ui/react";

export function Address() {
  return (
    <VStack p="2" borderBottom="1px" borderColor="gray.200" w="100%">
      <HStack justify="space-between" align="center" w="100%">
        <VStack align="left" lineHeight="1">
          <Text as="span" fontWeight="bold">
            Av. Paulista, 1500 - Ap 65
          </Text>
          <Text as="span" fontSize="13px" color="gray.600">
            Centro - São Paulo - SP
          </Text>
          <Flex
            direction={["column", "row"]}
            gap={["1", "4"]}
            align={["left", "center"]}
          >
            <Text as="span" fontSize="13px" color="gray.600">
              CEP: 13920-000
            </Text>
            <Text as="span" color="red" fontSize="14px">
              Endereço Pricipal
            </Text>
          </Flex>
        </VStack>

        <Flex gap="2" direction={["column", "row"]}>
          <Button variant="outline" colorScheme="red">
            Editar
          </Button>
          <Button colorScheme="red">Excluir</Button>
        </Flex>
      </HStack>
    </VStack>
  );
}
