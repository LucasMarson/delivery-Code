import {
  Badge,

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

export function ProductItemRadio(props: ItensTableProps) {
  return (
    <TableContainer w="100%" >
      <Table>
        <Thead bg="gray.50" w="100%">
          <Tr>
            <Th>
              <Flex justify="space-between">
                {props.title}
                {props.obrigatorio ? <Badge>Obrigatório</Badge> : null}
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody w="auto">
          <RadioGroup defaultValue="normal">
            <Tr>
              <Td fontSize="15px" fontWeight="semibold" w="100vw">
                <Flex gap="4" w="100%">
                  <Radio colorScheme="red" value="normal" />
                  <Text>Normal</Text>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="15px" fontWeight="semibold" w="100vw">
                <Flex gap="4">
                  <Radio colorScheme="red" value="duplo" />
                  <Text>Duplo</Text>
                </Flex>
              </Td>
            </Tr>
          </RadioGroup>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
