import { VStack, Text, Grid, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Establishment } from "../../components/Establishment";
import { api } from "../../services/api";


export function Search() {

  const location = useLocation();
  const [searchParams] = useSearchParams()
  const [resultado, setResultado] = useState<any[]>([]);
  const [mais, setMais] = useState(true);
  const [processando, setProcessando] = useState(false);
  const [pagina, setPagina] = useState(1);

  const id_categoria = searchParams.get('id_cat');
  const id_banner = searchParams.get('id_banner');
  const descricao = searchParams.get('descr') ?? "Busca";
  const busca = searchParams.get('q') ?? "";
  var pg = 0;

  function listarEstabelecimentos(indReset: any) {

    setProcessando(true);

    pg = indReset ? 1 : pagina + 1;

    api.get('/v1/estabelecimentos', {
      params: {
        cod_cidade: localStorage.getItem('sessionCodCidade'),
        nome: busca,
        id_categoria: id_categoria,
        id_banner: id_banner,
        pagina: pg
      }
    })
    .then( response => {
      if (indReset) {
        setResultado(response.data);
        setPagina(1)
      } else {
        setResultado((oldArray) => [...oldArray, ...response.data]);
        setPagina(pagina + 1)
      }
      setProcessando(false);
      setMais(response.data.length >= 10)
    })
    .catch(err => {
      console.log(err);
      setProcessando(false);
    })
  }

  useEffect(() => {
    listarEstabelecimentos(true)
  },[location])

  return (
    <VStack pb="6">
      <Flex mt="24" direction="column" w="100%" >
        <Text as="span" mx="4" fontSize="25px" fontWeight="semibold">{descricao}</Text>
        {busca.length > 0 ? <Text as="span" mx="4" fontSize="16px" color="gray.500">Pesquisando por : {busca}</Text> : null}
      </Flex>

      <Grid 
        templateColumns={["none", "repeat(3, 1fr)", "repeat(3, 1fr)","repeat(4, 1fr)"]} 
        w="100%"
        gap="4"
        mt="4"
      >
        {resultado.map((establishment) => {
          return (
            <Establishment
              key={establishment.id_estabelecimento}
              image={establishment.url_logo}
              name={establishment.nome}
              avaliacao={establishment.avaliacao}
              category={establishment.categoria}
              id_estabelecimento={establishment.id_estabelecimento}
              buttonRemoveFavorites = {false}
            />
          );
        })}
      </Grid>
      {
        mais ?
          <Button 
            onClick={(e) => listarEstabelecimentos(false)} 
            colorScheme="red" 
            w={["60%","20%"]}
            isLoading={processando}
          >
            Ver mais
          </Button>
        :null
      }
    </VStack>
  );
}
