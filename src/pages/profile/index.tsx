import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Profile() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [menssagem, setMenssagem] = useState("");
  const [erro, setErro] = useState("");

  function exibirMenssagem() {
    setMenssagem("Dados alterado com sucesso");
    setTimeout(() => setMenssagem(""), 3000);
  }

  function exibirErro(str: string) {
    setErro("Ocorreu um erro na requisicao.");
    setTimeout(() => setErro(""), 3000);
  }

  function SalvarDados() {
    api
      .patch(`v1/usuarios`, {
        nome,
        email,
      })
      .then((response) => {
        exibirMenssagem();
      })
      .catch((err) => {
        if (err.response) {
          exibirErro(err.response.data.erro);
        } else {
          exibirErro("");
        }
      });
  }

  useEffect(() => {
    api
      .get(`v1/usuarios/${localStorage.getItem("sessionId")}`)
      .then((response) => {
        setNome(response.data.nome);
        setEmail(response.data.email);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <VStack>
      <Flex direction="column" w="100%" align="center" justify="center" mt="24">
        <FormControl maxWidth={["80%", "50%"]} mt="10">
          <Flex mb="10">
            <Text as="span" fontSize="25px" fontWeight="semibold">
              Meu Perfil
            </Text>
          </Flex>
          <VStack align="left" mb="4">
            <Text as="span">Nome</Text>
            <Input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              focusBorderColor="red.500"
            />
          </VStack>
          <VStack align="left">
            <Text as="span">E-mail</Text>
            <Input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              focusBorderColor="red.500"
            />
          </VStack>

          <Flex align="right" justify="right" mt="10">
            <Button colorScheme="red" size="md" onClick={SalvarDados}>
              Salvar Dados
            </Button>
          </Flex>
          
          {erro.length > 0 ? (
            <Flex mt="2">
              <Alert status="error">
                <AlertIcon />
                {erro}
              </Alert>
            </Flex>
          ) : null}
        </FormControl>
      </Flex>
    </VStack>
  );
}
