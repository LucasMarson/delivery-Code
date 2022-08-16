import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface ListBagProps {
    name: string;
    value: string;
    amount: string;
    price: string;
}

export function ListBag (props: ListBagProps) {
    return (
        <HStack borderBottom="1px" p="2" borderColor="gray.100" align="center">
            <Flex>
                <Image borderRadius="12" w="48"  src="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/03/80-2.jpg" alt="Produto" />
            </Flex>

            <VStack align="left" w="100%">
                <HStack justify="space-between" fontWeight="bold" >
                    <Text as="span">{props.name}</Text>
                    <Text as="span">R${props.price}</Text>
                </HStack>
                <Text as="span" fontSize="14px">{props.amount} x R${props.value}</Text>
                <Button colorScheme="red" variant="outline" size="sm" w="40%">Remover</Button>
            </VStack>
        </HStack>
    )
}