import { Image, HStack, VStack, Text, Icon, Flex, Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai"

interface EstablishmentProps {
    name: string;
    evaluation: string;
    category: string;
    image: string;
    buttonRemoveFavorites: boolean;
}

export function Establishment(props: EstablishmentProps) {

    return (
        <Flex direction="row" _hover={{bg: "gray.100"}} borderRadius='8' p="3" textDecoration="none">
            <Flex as="a" href="#">
                <HStack >
                    <Image src={props.image} alt="mcdonalds" maxWidth="16"/>
                    <VStack align="left">
                        <Text as="span">{props.name}</Text>
                        <HStack>
                            <Icon as={AiFillStar} color="yellow.400"/>
                            <Text as="span">{props.evaluation} - {props.category}</Text>
                        </HStack>

                        {
                            props.buttonRemoveFavorites
                            ? <Button size="sm" position="static" variant="outline" colorScheme="red">Remover</Button>
                            : null
                        }
                    </VStack>
                </HStack>
            </Flex>
        </Flex>
    )
}