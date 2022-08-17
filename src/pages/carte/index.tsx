import {
  Flex,
  VStack,
  Image,
  Text,
  HStack,
  Icon,
  Wrap,
  SimpleGrid,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Footer } from "../../components/Footer";
import { ListProduct } from "../../components/Product/ListProduct";

export function Carte() {
  return (
    <Flex direction="column">
      <VStack justify="center" align="center" gap="10" mt="24">
        <Flex direction="column" gap="6" >
            <Image
              src="https://portaljnn.com/images/noticias/16515/capa_f0d843f731fcc7e811.png"
              borderRadius="10"
              alt="Estabelecimento"
              h="365px"
            />
          <VStack align="left" justify="left">
            <Text as="h2" fontSize="26" fontWeight="bold">
              Big Mac
            </Text>
            <Text as="span" fontSize="15" color="gray.700">
              R. Jorge Ricardo Fernandes - Pedreira - SP
            </Text>

            <HStack align="center" fontSize="15" color="gray.700">
              <Icon as={AiFillStar} color="yellow.400" boxSize="1.5rem" />
              <Text as="span">4.0</Text>
              <Text as="span">18 avaliações</Text>
            </HStack>

            <HStack align="center" mt="4" spacing="16">
              <Text as="span">
                <b>Taxa de entrega:</b> R$ 5,00
              </Text>
              <Text as="span">
                <b>Pedido minimo:</b> R$ 50,00
              </Text>
            </HStack>
          </VStack>
        

        {[1, 2, 3].map((category) => {
          return (
            <Flex key={category} direction="column">
                <Stack>
                    <Text as="h3" fontWeight="bold" fontSize="2xl">Destaques</Text>
                </Stack>

                <Grid
                    templateColumns={["none", "repeat(2, 1fr)"]}
                    alignItems="center"
                >
                    {[1, 2, 3, 4, 5, 6].map((product) => {
                    return <ListProduct key={product} />;
                    })}
                </Grid>
            </Flex>
          );
        })}
        </Flex>
      </VStack>
      <Footer />
    </Flex>
  );
}
