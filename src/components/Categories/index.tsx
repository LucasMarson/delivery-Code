import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CategoriesProps {
  src: string;
}

export function Categories(props: CategoriesProps) {
  return (
    <Link to="/search">
      <Flex direction="column" align="center" _hover={{color: "red.500"}}>
        <Image src={props.src} alt="categoria" w="80px" />
        <Text as="span" fontSize="13px">
          Categoria
        </Text>
      </Flex>
    </Link>
  );
}
