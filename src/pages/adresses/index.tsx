import { Button, Flex, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Address } from "../../components/Address/andressList";
import { EnderecoModal } from "../../components/Address/modal";
import { useModalOpen } from "../../context/ModalOpenContext";
import { api } from "../../services/api";

export function Adresses() {

  const [enderecos, setEnderecos] = useState<any[]>([])
  const [EnderecoOpen, setEnderecoOpen] = useState(false)

  function ListarEnderecos() {
    api.get('v1/usuarios/enderecos')
    .then(res => setEnderecos(res.data))
    .catch(err => console.log(err))
  }
  
  useEffect(() => ListarEnderecos(), []);

  return (
    <>
    <EnderecoModal />

    <VStack align="center" justify="center">
      <Flex direction="column"  w={["100%","60%"]} h="100vh">
        <Flex align="center" justify="space-between" mt={["20", "24"]} mb="8" >
            <Text as="h2" fontWeight="bold" fontSize="25px">
            Meus Endereços
            </Text>
            <Button size="md" variant="outline" colorScheme="red">Adicionar Endereços</Button>
        </Flex>

        <VStack>
            {
                enderecos.map(endereco => {
                    return (
                        <Address 
                          key={endereco.id_endereco}
                          id_endereco={endereco.id_endereco}
                          endereco={endereco.endereco}
                          complemento={endereco.complemento}
                          bairro={endereco.bairro}
                          cidade={endereco.cidade}
                          uf={endereco.uf}
                          cep={endereco.cep}
                          ind_padrao={endereco.ind_padrao}
                        />
                    )
                })
            }
        </VStack>
      </Flex>
    </VStack>
    </>
  );
}
