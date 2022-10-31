import { VStack, Flex, Text, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Solicitation } from "../../components/Solicitation";
import { api } from "../../services/api";

export function Solicitations () {

    const [pedidos, setPedidos] = useState<any[]>([]);

    useEffect(() => {
        api.get("v1/pedidos")
        .then(response => {
            setPedidos(response.data)
        })
        .catch(error => {

        })
    },[])

    return (
        <VStack align="center" justify="center" mx={["0","32"]}>
          <Flex direction="column">
            <Flex align="center" mt={["20", "24"]} mb="8" >
                <Text as="h2" fontWeight="bold" fontSize="25px">
                Meus Pedidos
                </Text>
            </Flex>
    
            <Wrap spacing="10" >
                {
                    pedidos.map(pedido => {
                        return (
                            <Solicitation
                                key= {pedido.id_pedido}
                                name= {pedido.nome}
                                image= {pedido.url_logo}
                                avaliacao= {pedido.avaliacao}
                                qtd_item= {pedido.qtd_item}
                                id_pedido= {pedido.id_pedido}
                                vl_total= {pedido.vl_total}
                                dt_pedido= {pedido.dt_pedido}
                                id_estabelecimento= {pedido.id_estabelecimento}
                                status= {pedido.status}
                            />
                        )
                    })
                }
            </Wrap>
          </Flex>
        </VStack>
      );
}