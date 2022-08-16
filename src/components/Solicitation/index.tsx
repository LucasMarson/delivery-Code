import {
  HStack,
  Flex,
  VStack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

interface SolicitationProps {
    evaluation: string;
    image: string;
}

export function Solicitation(props: SolicitationProps) {
  return (
    <HStack spacing="6" align="center">
      <Flex>
        <Image
          borderRadius="12"
          w="32"
          src={props.image}
          alt="Produto"
        />
      </Flex>

      <VStack align="left" lineHeight="1">
        <Text as="span" fontWeight="bold">McDonals's</Text>
        <Text as="span" fontSize="14px" color="red.500">Pedido Nº 44558</Text>
        <Text as="span" fontSize="14px">2 itens - R$90,00 - 22/05/2022</Text>
        <HStack>
          {[1, 2, 3, 4, 5].map(icon => {return (<Icon as={AiFillStar}  color="yellow.400" boxSize="4"/>)})}
        </HStack>
      </VStack>
    </HStack>
  );
}
