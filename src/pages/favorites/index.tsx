import { HStack, VStack, Text, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Establishment } from "../../components/Establishment";
import { api } from "../../services/api";

export function Favorites() {

  const [favotiros, setFavoritos] = useState<any[]>([])

  function ListarFavoritos() {
    api.get("v1/estabelecimentos/favoritos")
    .then(res => {
      setFavoritos(res.data)
    })
    .catch(err => {
      console.log(err); 
    })
  }

  function DeleteFavorito(id: number) {
    api.delete(`v1/estabelecimentos/favoritos/${id}`)
    .then(res => {
      ListarFavoritos()
    })
    .catch(err => {
      console.log(err); 
    })
  }

  useEffect(() => ListarFavoritos(),[]);

  return (
    <VStack justify="center" align={["left","center"]}>
      <Flex direction="column">
        <HStack mt="24" w="100%" fontSize="25px" fontWeight="semibold">
          <Text as="span" mx="4">
            Meus Favoritos
          </Text>
        </HStack>

        <Grid 
          templateColumns={["none", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={["4","10" ]}
          mt="4"
        >
          {favotiros.map((estabelecimento) => {
            return (
              <Establishment
                key={estabelecimento.id_estabelecimento}
                image={estabelecimento.url_logo}
                name={estabelecimento.nome}
                avaliacao={estabelecimento.avaliacao}
                category={estabelecimento.categoria}
                id_estabelecimento={estabelecimento.id_estabelecimento}
                id_favorito={estabelecimento.id_favorito}
                buttonRemoveFavorites
                onClickRemoverFavorito={DeleteFavorito}
              />
            );
          })}
        </Grid>
      </Flex>
    </VStack>
  );
}
