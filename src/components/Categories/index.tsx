import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CategoriaProps {
  url_imagem: string;
  descricao: string;
  id_categoria: string;
}

export function Categoria(props: CategoriaProps) {
  return (
    <Link to={`/busca?id_cat=${props.id_categoria}&descr=${props.descricao}`}>
      <Flex direction="column" align="center" _hover={{ color: "red.500" }}>
        <Image src={props.url_imagem} alt="categoria" w="80px" />
        <Text as="span" fontSize="13px">
          {props.descricao}
        </Text>
      </Flex>
    </Link>
  );
}
