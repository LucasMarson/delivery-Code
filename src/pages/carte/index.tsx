import {
  Flex,
  VStack,
  Image,
  Text,
  HStack,
  Icon,
  Grid,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ListProduct } from "../../components/Product/ListProduct";
import { ProductItemCheckbox } from "../../components/Product/Product-item-checkbox";
import { ProductItemRadio } from "../../components/Product/Product-item-radio";
import { api } from "../../services/api";

export function Carte() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [foto, setFoto] = useState("");
  const [entrega, setEntrega] = useState(0);
  const [minimo, setMinimo] = useState(0);
  const [qtd, setQtd] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [idFavorito, setIdFavorito] = useState(0);

  const [categorias, setCategorias] = useState<any[]>([]);
  const [produtos, setProdutos] = useState<any[]>([]);

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    api
      .get(`v1/estabelecimentos/${id}`)
      .then((response) => {
        setNome(response.data[0].nome);
        setEndereco(response.data[0].endereco);
        setComplemento(response.data[0].complemento);
        setBairro(response.data[0].bairro);
        setCidade(response.data[0].cidade);
        setUf(response.data[0].uf);
        setAvaliacao(response.data[0].avaliacao);
        setFoto(response.data[0].url_foto);
        setEntrega(response.data[0].vl_taxa_entrega);
        setMinimo(response.data[0].vl_min_pedido);
        setQtd(response.data[0].qtd_avaliacao);
        setFavorito(response.data[0].id_favorito > 0);
        setIdFavorito(response.data[0].id_favorito)
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get(`v1/cardapios/${id}`)
      .then((response) => {
        var categoriaUnica = response.data.map((item: any) => {
          return item.categoria;
        });

        categoriaUnica = categoriaUnica.filter(
          (itemArray: any, i: any, arrayCompleto: any) => {
            return arrayCompleto.indexOf(itemArray) === i;
          }
        );

        setCategorias(categoriaUnica);
        setProdutos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Favoritar() {
    api.post("/v1/estabelecimentos/favoritos", {
      id_estabelecimento: id
    })
    .then((response) => {
      setFavorito(true)
      setIdFavorito(response.data.id_favorito)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function removerFavorito() {
    api.delete(`/v1/estabelecimentos/favoritos/${idFavorito}`)
    .then((response) => {
      setFavorito(false)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <Flex direction="column" w="100%">
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap="6" w="100%">
              <Image
                src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/86eb4a19-2d27-4ebe-9e0f-676a1a9d3cf2/202205301145_31II_i.jpg"
                w="100%"
                align="center"
              />
              <Flex direction="column" gap="4" h="100%" maxWidth="100vw">
                <Flex direction="column" w="100%" gap="2">
                  <Text as="h4" fontWeight="bold" fontSize="25px">
                    Big Mac
                  </Text>
                  <Text as="span">
                    Dois hambúrgueres, alface, queijo e molho especial, cebola e
                    picles num pão com gergelim, McFritas média e bebida.
                  </Text>
                </Flex>
                <Flex gap="4">
                  <Text as="span" color="green">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(45)}
                  </Text>
                  <Text
                    as="span"
                    textDecoration="line-through"
                    color="gray.400"
                  >
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(60)}
                  </Text>
                </Flex>
                  <VStack fontWeight="bold" h="100%" overflow="auto">
                    <ProductItemRadio title="Escola o hambúrguer" obrigatorio />
                    <ProductItemCheckbox title="Turbine sua lanche" />
                  </VStack>
              </Flex>
            </Grid>
          </ModalBody>

          <ModalFooter gap="4">
            <Button>
              <Flex>{<AiOutlineMinus />}</Flex>
            </Button>
            <Text as="span">01</Text>
            <Button>
              <Flex>{<AiOutlinePlus />}</Flex>
            </Button>
            <Button colorScheme="red" mr={3}>
              Adicionar a Sacola (R$ 50,00)
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack justify="center" align="center" gap="10" mt="24" mx="32" w="auto">
        <Flex direction="column" gap="6">
          <Image
            src={foto}
            borderRadius="10"
            alt="Estabelecimento"
            w="100%"
            h="365px"
          />
          <VStack align="left" justify="left">
            <Flex justify="space-between">
              <Text as="h2" fontSize="26" fontWeight="bold">
                {nome}
              </Text>
              <Flex cursor="pointer">
                {
                  favorito ? 
                  <Icon as={FaHeart} color="red" boxSize="1.5rem" onClick={removerFavorito}/> 
                  : <Icon as={FiHeart} color="red" boxSize="1.5rem" onClick={Favoritar}/> 
                }
              </Flex>
            </Flex>
            <Text as="span" fontSize="15" color="gray.700">
              {endereco} {complemento.length > 0 ? " - " + complemento : null} -{" "}
              {bairro} - {cidade} - {uf}
            </Text>

            <HStack align="center" fontSize="15" color="gray.700">
              <Icon as={AiFillStar} color="yellow.400" boxSize="1.5rem" />
              <Text as="span">{parseFloat(avaliacao).toFixed(1)}</Text>
              <Text as="span">{qtd} avaliações</Text>
            </HStack>

            <HStack align="center" mt="4" spacing="16">
              <Text as="span">
                <b>Taxa de entrega:</b>{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(entrega)}
              </Text>
              <Text as="span">
                <b>Pedido minimo:</b>{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(minimo)}
              </Text>
            </HStack>
          </VStack>

          {categorias.map((categoria) => {
            return (
              <Flex key={categoria} direction="column">
                <Stack>
                  <Text as="h3" fontWeight="bold" fontSize="2xl">
                    {categoria}
                  </Text>
                </Stack>

                <Grid
                  templateColumns={["none", "repeat(2, 1fr)"]}
                  alignItems="center"
                >
                  {produtos.map((produto) => {
                    return produto.categoria === categoria ? (
                      <ListProduct
                        key={produto.id_produto}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        vl_produto={produto.vl_produto}
                        vl_promocao={produto.vl_promocao}
                        image={produto.url_foto}
                        onClickProduto={onOpen}
                      />
                    ) : null;
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
