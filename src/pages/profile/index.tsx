import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Profile() {
  return (
    <VStack>
      <Flex direction="column" w="100%" align="center" justify="center"  mt="24">
        <FormControl maxWidth={["80%", "50%"]} mt="10">
          <Flex mb="10">
            <Text as="span" fontSize="25px" fontWeight="semibold">
              Meu Perfil
            </Text>
          </Flex>
          <VStack align="left" mb="4">
            <Text as="span">Nome</Text>
            <Input type="text" focusBorderColor="red.500" />
          </VStack>
          <VStack align="left">
            <Text as="span">E-mail</Text>
            <Input type="text" focusBorderColor="red.500" />
          </VStack>

          <Flex align="right" justify="right" mt="10">
            <Button colorScheme="red" size="md">
              Salvar Dados
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </VStack>
  );
}
