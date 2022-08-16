import { HStack, VStack, Text, Wrap } from "@chakra-ui/react";
import { Establishment } from "../../components/Establishment";

export function Search() {
  return (
    <VStack>
      <HStack mt="24"  w="100%" fontSize="25px" fontWeight="semibold">
        <Text as="span" mx="4">Lanches</Text>
      </HStack>

      <Wrap spacing={["3", "6"]} mt="4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((establishment) => {
          return (
            <Establishment
              image="https://play-lh.googleusercontent.com/AH4U0T2bZa4vAILaBR1KjC5l3BSiNQdUfT_iJGhvtXIupFOVrjQM1XENejyl96Wmdb4"
              name="McDonald's"
              evaluation="4.5"
              category="Lanches"
              buttonRemoveFavorites = {false}
            />
          );
        })}
      </Wrap>
    </VStack>
  );
}
