import { Image, HStack, Text, Icon, Flex, Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface EstablishmentProps {
  name: string;
  avaliacao: string;
  category: string;
  image: string;
  id_estabelecimento: string;
  buttonRemoveFavorites: boolean;
  onClickRemoverFavorito?: any;
  id_favorito?: number;
}

export function Establishment(props: EstablishmentProps) {
  return (
    <Flex
      direction="column"
      _hover={{ bg: "gray.100" }}
      borderRadius="8"
      p="4"
      textDecoration="none"
      align="center"
    >
      <Link to={`/cardapio/${props.id_estabelecimento}`}>
        <Flex gap="3">
          <Image
            src={props.image}
            alt="mcdonalds"
            w="16"
            maxWidth="32"
            borderRadius="40px"
          />
          <Flex direction="column" align="left">
            <Text as="span">{props.name}</Text>
            <HStack>
              <Icon as={AiFillStar} color="yellow.400" />
              <Text as="span">
                {parseFloat(props.avaliacao).toFixed(1)} - {props.category}
              </Text>
            </HStack>
          </Flex>
        </Flex>
      </Link>
      {props.buttonRemoveFavorites ? (
        <Button
          size="sm"
          position="static"
          variant="outline"
          colorScheme="red"
          onClick={(e) => props.onClickRemoverFavorito(props.id_favorito)}
        >
          Remover
        </Button>
      ) : null}
    </Flex>
  );
}
