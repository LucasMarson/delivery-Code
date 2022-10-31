import {
  Badge,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface ItensTableProps {
  title: string;
  obrigatorio?: boolean;
}

export function ProductItemCheckbox(props: ItensTableProps) {
  return (
    <TableContainer w="100%">
      <Table>
        <Thead bg="gray.50">
          <Tr>
            <Th>
              <Flex justify="space-between">
                {props.title}
              </Flex>
            </Th>
            <Th>{props.obrigatorio ? <Badge>Obrigatório</Badge> : null}</Th>
          </Tr>
        </Thead>
        <Tbody w="auto">
          <Tr>
              <Td fontSize="15px" fontWeight="semibold" w="100vw">
                <Text as="span" align="center">
                  <Checkbox colorScheme="red" value="Borda fina" mr="4" />
                  Bacon
                </Text>
              </Td>
              <Td>
                <Badge colorScheme="red">+ R$5.00</Badge>
              </Td>
          </Tr>
          <Tr>
              <Td fontSize="15px" fontWeight="semibold" w="100vw">
                <Text as="span" align="center">
                  <Checkbox colorScheme="red" value="Borda fina" mr="4" />
                  Alface
                </Text>
              </Td>
              <Td>
                <Badge colorScheme="red">+ R$2.00</Badge>
              </Td>
          </Tr>
          <Tr>
              <Td fontSize="15px" fontWeight="semibold" w="100vw">
                <Text as="span" align="center">
                  <Checkbox colorScheme="red" value="Borda fina" mr="4" />
                  Tomate
                </Text>
              </Td>
              <Td>
                <Badge colorScheme="red">+ R$3.00</Badge>
              </Td>
          </Tr>
          <Tr>
              <Td fontSize="15px" fontWeight="semibold" w="100vw">
                <Text as="span" align="center">
                  <Checkbox colorScheme="red" value="Borda fina" mr="4" />
                  Maionese
                </Text>
              </Td>
              <Td>
                <Badge colorScheme="red">+ R$3.00</Badge>
              </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
