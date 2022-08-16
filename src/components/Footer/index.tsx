import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
    const year = new Date().getFullYear();
  return (
    <Flex>
      <Flex mt="4" p="1" h="60px"  w="100%" borderTop="1px" borderColor="gray.300" justify="center" align="center" >
        <Text as="span">
          Copyright &copy; {year} CodeWay - All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
}
