import { Flex, VStack, Text, HStack, Button } from "@chakra-ui/react";

interface EndereçoProps {
  id_endereco: number;
  endereco: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  ind_padrao: string;
}

export function Address(props: EndereçoProps) {
  return (
    <VStack p="2" borderBottom="1px" borderColor="gray.200" w="100%">
      <HStack justify="space-between" align="center" w="100%">
        <VStack align="left" lineHeight="1">
          <Text as="span" fontWeight="bold">
            {props.endereco} {props.complemento ? '- ' + props.complemento : null}
          </Text>
          <Text as="span" fontSize="13px" color="gray.600">
            {props.bairro} - {props.cidade} - {props.uf}
          </Text>
          <Flex
            direction={["column", "row"]}
            gap={["1", "4"]}
            align={["left", "center"]}
          >
            <Text as="span" fontSize="13px" color="gray.600">
              CEP: {props.cep}
            </Text>
            {
              props.ind_padrao === "S" ?
              <Text as="span" color="red" fontSize="14px">
                Endereço Pricipal
              </Text> : null
            }
          </Flex>
        </VStack>

        <Flex gap="2" direction={["column", "row"]}>
          {
            props.ind_padrao != 'S' ?
            <Button variant="outline" colorScheme="gray">
              Padrão
            </Button> : null
          }
          <Button variant="outline" colorScheme="red">
            Editar
          </Button>
          <Button colorScheme="red">Excluir</Button>
        </Flex>
      </HStack>
    </VStack>
  );
}
