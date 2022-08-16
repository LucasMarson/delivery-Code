import { Flex, HStack, VStack, Image, Text, Container } from "@chakra-ui/react";

export function ListProduct () {
    return (
        <Flex mb="4" p="4" _hover={{bg: "gray.100"}} borderRadius='8'>
            <Flex as="a" href="#">
                <Flex 
                    direction={["column", "column", "column", "row"]} 
                    p="3" 
                    gap="6" 
                    pl="0" 
                    borderBottom="1px"
                    borderColor="gray.200"
                >
                    <Flex >
                        <Image 
                            src="https://veja.abril.com.br/wp-content/uploads/2016/07/big-mac-mc-donalds.jpg" 
                            alt="Produto"
                            borderRadius="8"
                            w="44"
                        />
                    </Flex>
                
                    <VStack align="left">
                        <Text as="h2" fontWeight="bold">Big Mac</Text>
                        <Container as="span" p="0">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum eveniet provident quia corporis aperiam doloremque eum deserunt, obcaecati nam? 
                        </Container>

                        <HStack spacing="10">
                            <Text as="span" color="green.600">R$ 45,00</Text>
                            <Text as="span" textDecoration="line-through" color="gray.400">R$ 60,00</Text>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    )   
}