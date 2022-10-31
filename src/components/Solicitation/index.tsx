import {
  HStack,
  Flex,
  VStack,
  Image,
  Text,
  Icon,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { api } from "../../services/api";

interface SolicitationProps {
  name: string;
  id_pedido: string;
  qtd_item: number;
  vl_total: number;
  dt_pedido: number;
  id_estabelecimento?: string;
  status: string;
  avaliacao: any;
  image: string;
}

export function Solicitation(props: SolicitationProps) {

  const dt_ped = new Date(props.dt_pedido);
  const [avaliar, setAvaliar] = useState(false)
  const [avaliacao, setAvaliacao] = useState(props.avaliacao)

  function Status(st: string) {
    switch (st) {
      case "P":
        return "Pedido em produção";
      case "E":
        return "Saiu para entrega";
      case "A":
        return "Aguardando ...";
      default:
        return "Finalizado";
    }
  }

  function Avaliar(avaliacao: number) {
    api.patch(`v1/pedidos/avaliacao/${props.id_pedido}`, {
      avaliacao
    })
    .then(res => {
      setAvaliar(false)
      setAvaliacao(avaliacao)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Flex w="100%" borderBottom="1px" borderColor="gray.300">
      <Flex
        direction={["column", "row"]}
        align="center"
        w="100%"
        alignItems="center"
        pb="3"
        gap={["3", "0"]}
      >
        <Flex gap="10" align="center" w="100%">
          <Image borderRadius="12" w="80px" src={props.image} alt="Produto" />
          <VStack align="left" lineHeight="1">
            <Text as="span" fontWeight="bold">
              {props.name}
            </Text>
            <Text as="span" fontSize="14px" color="red.500">
              Pedido Nº {props.id_pedido}
            </Text>
            <Text as="span" fontSize="14px">
              {props.qtd_item}
              {props.qtd_item > 1 ? " itens" : " item"} -
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.vl_total)}{" "}
              -{new Intl.DateTimeFormat("pt-BR").format(dt_ped)}
            </Text>
            <HStack>
              {
              !['A','P','E'].includes(props.status)?
              <>
                {avaliacao > 0 ? (
                  <Icon as={AiFillStar} color="yellow.400" boxSize="4" />
                ) : (
                  <Icon as={AiFillStar} boxSize="4" />
                )}
                {avaliacao > 1 ? (
                  <Icon as={AiFillStar} color="yellow.400" boxSize="4" />
                ) : (
                  <Icon as={AiFillStar} boxSize="4" />
                )}
                {avaliacao > 2 ? (
                  <Icon as={AiFillStar} color="yellow.400" boxSize="4" />
                ) : (
                  <Icon as={AiFillStar} boxSize="4" />
                )}
                {avaliacao > 3 ? (
                  <Icon as={AiFillStar} color="yellow.400" boxSize="4" />
                ) : (
                  <Icon as={AiFillStar} boxSize="4" />
                )}
                {avaliacao > 4 ? (
                  <Icon as={AiFillStar} color="yellow.400" boxSize="4" />
                ) : (
                  <Icon as={AiFillStar} boxSize="4" />
                )}
              </> : null
              }
            </HStack>
            <Text>
              <Badge colorScheme="gray" color="gray.600" py="2">
                {Status(props.status)}
              </Badge>
            </Text>
          </VStack>
        </Flex>
        <Flex>
          {
            !['A','P','E'].includes(props.status) && !avaliar?
            <Button 
              colorScheme="red" 
              variant="outline" 
              position="static"
              onClick={(e) => setAvaliar(true)}
            >
              Avaliar
            </Button> : null
          }

          {
            avaliar ? 
            <Flex cursor="pointer">
              <Icon as={AiFillStar} boxSize="4" onClick={(e) => Avaliar(1)}/>
              <Icon as={AiFillStar} boxSize="4" onClick={(e) => Avaliar(2)}/>
              <Icon as={AiFillStar} boxSize="4" onClick={(e) => Avaliar(3)}/>
              <Icon as={AiFillStar} boxSize="4" onClick={(e) => Avaliar(4)}/>
              <Icon as={AiFillStar} boxSize="4" onClick={(e) => Avaliar(5)}/>
            </Flex>
            : null
          }
        </Flex>
      </Flex>
    </Flex>
  );
}
