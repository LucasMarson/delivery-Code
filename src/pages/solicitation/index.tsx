import { VStack, Flex, Text, Wrap } from "@chakra-ui/react";
import { Solicitation } from "../../components/Solicitation";



export function Solicitations () {
    return (
        <VStack align="center" justify="center">
          <Flex direction="column">
            <Flex align="center" mt={["20", "24"]} mb="8" >
                <Text as="h2" fontWeight="bold" fontSize="25px">
                Meus Pedidos
                </Text>
            </Flex>
    
            <Wrap spacing="10" >
                {
                    [1, 2, 3, 4].map(request => {
                        return (
                            <Solicitation
                                key={request}
                                image="https://play-lh.googleusercontent.com/AH4U0T2bZa4vAILaBR1KjC5l3BSiNQdUfT_iJGhvtXIupFOVrjQM1XENejyl96Wmdb4"
                                evaluation= "4.5"
                            />
                        )
                    })
                }
            </Wrap>
          </Flex>
        </VStack>
      );
}