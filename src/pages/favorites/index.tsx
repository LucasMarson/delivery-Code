import { HStack, VStack, Text, Flex, Grid } from "@chakra-ui/react";
import { Establishment } from "../../components/Establishment";

export function Favorites() {
  return (
    <VStack justify="center" align={["left","center"]}>
      <Flex direction="column">
        <HStack mt="24" w="100%" fontSize="25px" fontWeight="semibold">
          <Text as="span" mx="4">
            Meus Favoritos
          </Text>
        </HStack>

        <Grid 
          templateColumns={["none", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={["4","10" ]}
          mt="4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((establishment) => {
            return (
              <Establishment
                key={establishment}
                image="https://play-lh.googleusercontent.com/AH4U0T2bZa4vAILaBR1KjC5l3BSiNQdUfT_iJGhvtXIupFOVrjQM1XENejyl96Wmdb4"
                name="McDonald's"
                evaluation="4.5"
                category="Lanches"
                buttonRemoveFavorites
              />
            );
          })}
        </Grid>
      </Flex>
    </VStack>
  );
}
