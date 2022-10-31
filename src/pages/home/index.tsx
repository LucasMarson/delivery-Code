import { Flex, Wrap, Text, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Categoria } from "../../components/Categories";
import { Establishment } from "../../components/Establishment";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

export function Home() {

  const [categorias, setCategorias] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  const [grupos, setGrupos] = useState<any[]>([]);
  const [destaques, setDestaques] = useState<any[]>([]);

  useEffect(() => {
    api.get('v1/categorias?cod_cidade=' + localStorage.getItem('sessionCodCidade'))
    .then(response => {
      setCategorias(response.data);
    }).catch (err => {})

    api.get('v1/banners?cod_cidade=' + localStorage.getItem('sessionCodCidade'))
    .then(response => {
      setBanners(response.data);
    }).catch (err => {})

    api.get('v1/destaques?cod_cidade=' + localStorage.getItem('sessionCodCidade'))
    .then(response => {

      var gruposUnico = response.data.map((grupo: any) => { 
        return grupo.descricao
      })

      gruposUnico = gruposUnico.filter((itemArray: any, i: any, arrayCompleto: any) => {
        return arrayCompleto.indexOf(itemArray) === i;
      })

      setGrupos(gruposUnico)
      setDestaques(response.data)
    }).catch (err => {})
  },[])

  return (
    <Flex direction="column" mx="4">
      <Wrap justify="center" align="center" spacing={["3", "12"]} mt="24">
        {categorias.map((categoria) => {
          return (
            <Categoria 
              key={categoria.id_categoria}
              url_imagem={categoria.foto}
              descricao={categoria.categoria}
              id_categoria={categoria.id_categoria}
            />
          );
        })}
      </Wrap>

      <Wrap justify="center" align="center" spacing={["3", "6"]} mt="6">
        {banners.map((banner) => {
          return (
            <Banner 
              key={banner.id_banner} 
              url_imagem={banner.foto}
              descricao={banner.descricao}
              id_banner={banner.id_banner}
            />
          );
        })}
      </Wrap>

      {grupos.map((grupo) => {
        return (
          <Flex key={grupo.id_estabelecimento} justify={["left", "center"]} align="center">
            <Flex direction="column" w="100%">
              <Text as="span" mt="8" fontSize="25px" fontWeight="semibold">
                {grupo}
              </Text>
              <Grid
                templateColumns={["none", "repeat(3, 1fr)", "repeat(3, 1fr)","repeat(4, 1fr)"]}
                mt="4"
              >
                {destaques.map((destaque) => {
                  return (
                    destaque.descricao === grupo ?
                    <Establishment
                      key={destaque.id_estabelecimento}
                      image={destaque.url_logo}
                      name={destaque.nome}
                      avaliacao={destaque.avaliacao}
                      category={destaque.categoria}
                      id_estabelecimento={destaque.id_estabelecimento}
                      buttonRemoveFavorites={false}
                    /> : null
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
