import { Flex, Wrap, Text, Grid } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Categories } from "../../components/Categories";
import { Establishment } from "../../components/Establishment";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Flex direction="column" mx="4">
      <Wrap justify="center" align="center" spacing={["3", "12"]} mt="24">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((categorie) => {
          return (
            <Categories src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/grocery.png" />
          );
        })}
      </Wrap>

      <Wrap justify="center" align="center" spacing={["3", "6"]} mt="6">
        {[1, 2, 3].map((banner) => {
          return (
            <Banner src="https://static-images.ifood.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-2.png" />
          );
        })}
      </Wrap>

      {[1, 2, 3].map((destaque) => {
        return (
          <Flex justify={["left", "center"]} align="center">
            <Flex direction="column" w="100%">
              <Text as="span" mt="8" fontSize="25px" fontWeight="semibold">
                Destaques: entrega gratis
              </Text>
              <Grid
                templateColumns={["none", "repeat(3, 1fr)", "repeat(3, 1fr)","repeat(5, 1fr)"]}
                mt="4"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((establishment) => {
                  return (
                    <Establishment
                      image="https://static-images.ifood.com.br/image/upload/t_high/logosgde/a46086fe-f27e-48d8-84be-77033520d8de/202105201017_V0xh_i.png"
                      name="McDonald's"
                      evaluation="4.5"
                      category="Lanches"
                      buttonRemoveFavorites={false}
                    />
                  );
                })}
              </Grid>
            </Flex>
          </Flex>
        );
      })}

      <Footer />
    </Flex>
  );
}
