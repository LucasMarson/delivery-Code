import { Flex, HStack, VStack, Image, Text, Container, Badge, Button } from "@chakra-ui/react";
import React from "react";
interface ProductProps {
    nome: string;
    image: string;
    descricao: string;
    vl_produto: number;
    vl_promocao: number;
    onClickProduto: (ev: React.MouseEvent) => void;
}

export function ListProduct (props: ProductProps) {
    return (
        <Flex mb="4" p="4" _hover={{bg: "gray.100"}} borderRadius='8'>
            <Flex as='a' onClick={props.onClickProduto} cursor='pointer'>
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
                            src={props.image} 
                            alt="Produto"
                            borderRadius="8"
                            w="44"
                        />
                    </Flex>
                
                    <VStack align="left">
                        <Text as="h2" fontWeight="bold">{props.nome}</Text>
                        <Container as="span" p="0">
                            {props.descricao}
                        </Container>

                        <HStack spacing="10">
                            {
                                props.vl_promocao > 0 ? 
                                <>
                                    <Text as="span">
                                        <Badge colorScheme="green" variant="solid" fontSize="15px">
                                            {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                            }).format(props.vl_promocao)}
                                        </Badge>
                                    </Text>
                                    <Text as="span" textDecoration="line-through" color="gray.400">
                                        {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        }).format(props.vl_produto)}
                                    </Text>
                                </> :
                                    <Text as="span">
                                        {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        }).format(props.vl_produto)}
                                    </Text>
                            }
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    )   
}