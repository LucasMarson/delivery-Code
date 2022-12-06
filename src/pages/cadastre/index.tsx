import {
  Flex,
  VStack,
  Text,
  Input,
  Button,
  Image,
  Grid,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api";
import SaltPassword from "../../services/md5";

type CreateUserFormData = {
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string,
  endereco: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  cod_cidade: string,
  cep: string,
}

const createUserFormSchema = yup.object().shape({
  nome: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("E-mail obrigatorio").email('E-mail invalido'),
  senha: yup.string().required("Senha obrigatoria").min(6, ('No minimo 6 caracteres')),
  confirmarSenha: yup.string().oneOf([
    null, yup.ref("senha")
  ], 'As senhas precisam ser iguais'),
  endereco: yup.string().required("Endereço obrigatorio"),
  complemento: yup.string().required("Complemento obrigatorio"),
  bairro: yup.string().required("Bairro obrigatorio"),
  cidade: yup.string().required("Cidade obrigatorio"),
  uf: yup.string().required("Estado obrigatorio, apenas 2 digitos"),
  cep: yup.string().required("CEP obrigatorio"),
})

export function Cadastre() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  });

  const { errors } = formState;
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const handleClicks = () => {
    setShows(!shows);
  };

  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cod_cidade, setCodCidade] = useState('');
  const [cep, setCep] = useState('');

  async function onSubmit() {
    await new Promise (resolve => setTimeout(resolve, 2000))

    api.post('v1/usuarios/registro', {
      nome, 
      email, 
      senha: SaltPassword(senha),
      confirmarSenha: SaltPassword(confirmarSenha),
      endereco, 
      complemento, 
      bairro,
      cidade,
      uf,
      cod_cidade,
      cep
    }).then (response => {
      localStorage.setItem('sessionToken', response.data.token)
      localStorage.setItem('sessionId', response.data.id_usuario)
      localStorage.setItem('sessionEmail', email)
      localStorage.setItem('sessionCodCidade', cod_cidade)
      localStorage.setItem('sessionCidade', cidade)
      localStorage.setItem('sessionUf', uf)
      navigate('/home')
    }).catch(err => console.error(err))
  }
  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
      <VStack mt="24" mx="auto" align="center">
          <Flex direction="column">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <Text
                as="h3"
                w="64"
                textAlign="center"
                fontSize="28px"
                fontWeight="semibold"
              >
                Crie sua conta e faça seu pedido.
              </Text>
              <Text as="span">Informe os dados abaixo</Text>
            </VStack>
            <VStack align="left" mb="3">
              <Text as="span">Nome</Text>
              <Input
                {...register('nome')}
                onChange={(event) => setNome(event.target.value)}
                focusBorderColor="red.500"
                position="inherit"
              />
              <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.nome?.message}</Text>

              <Text as="span">E-mail</Text>
              <Input
                {...register('email')}
                onChange={(event) => setEmail(event.target.value)}
                focusBorderColor="red.500"
                position="inherit"
              />
              <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.email?.message}</Text>
            </VStack>

            <Flex
              direction={["column", "column", "column", "row"]}
              gap="2"
              mb="5"
            >
              <VStack align="left">
                <Text as="span">Senha</Text>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    {...register("senha")}
                    onChange={(event) => setSenha(event.target.value)}
                    focusBorderColor="red.500"
                  />
                  <InputRightElement>
                    <Button variant="none" size="normal" onClick={handleClick}>
                      {show ? <FiEyeOff /> : <FiEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.senha?.message}</Text>
              </VStack>

              <VStack align="left">
                <Text as="span">Confirme sua senha</Text>
                <InputGroup>
                  <Input
                    type={shows ? "text" : "password"}
                    {...register('confirmarSenha')}
                    onChange={(event) => setConfirmarSenha(event.target.value)}
                    focusBorderColor="red.500"
                  />
                  <InputRightElement>
                    <Button variant="none" size="normal" onClick={handleClicks}>
                      {shows ? <FiEyeOff /> : <FiEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.confirmarSenha?.message}</Text>
              </VStack>
            </Flex>

            <Flex
              direction={["column", "column", "column", "row"]}
              gap="2"
              mb="5"
            >
              <VStack align="left" w={["100%", "80%"]}>
                <Text as="span">Endereço</Text>
                <Input
                  {...register("endereco")}
                  onChange={(event) => setEndereco(event.target.value)}
                  focusBorderColor="red.500"
                  position="inherit"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.endereco?.message}</Text>
              </VStack>

              <VStack align="left">
                <Text as="span">Compl.</Text>
                <Input
                  {...register('complemento')}
                  onChange={(event) => setComplemento(event.target.value)}
                  focusBorderColor="red.500"
                  position="inherit"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.complemento?.message}</Text>
              </VStack>
            </Flex>

            <Flex
              direction={["column", "column", "column", "row"]}
              gap="2"
              mb="5"
            >
              <VStack align="left" w={["100%", "100%", "100%", "70%"]}>
                <Text as="span">Bairro</Text>
                <Input
                  {...register('bairro')}
                  onChange={(event) => setBairro(event.target.value)}
                  focusBorderColor="red.500"
                  position="inherit"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.bairro?.message}</Text>
              </VStack>

              <VStack align="left">
                <Text as="span">Cidade</Text>
                  <Input
                    {...register('cidade')}
                    onChange={(event) => setCidade(event.target.value)}
                    focusBorderColor="red.500"
                  />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.cidade?.message}</Text>
              </VStack>
            </Flex>

            <Flex
              direction={["column", "column", "column", "row"]}
              gap="2"
              mb="5"
            >
              <VStack align="left">
                <Text as="span">Estado</Text>
                <Input
                  {...register('uf')}
                  onChange={(event) => setUf(event.target.value)}
                  focusBorderColor="red.500"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.uf?.message}</Text>
              </VStack>
              <VStack align="left"  w="50%">
                <Text as="span">Cod.Cidade</Text>
                <Input
                  {...register('cod_cidade')}
                  onChange={(event) => setCodCidade(event.target.value)}
                  focusBorderColor="red.500"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.cod_cidade?.message}</Text>
              </VStack>
            </Flex>
            <VStack align="left"  w="100%">
                <Text as="span">CEP</Text>
                <Input
                  {...register('cep')}
                  onChange={(event) => setCep(event.target.value)}
                  focusBorderColor="red.500"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.cep?.message}</Text>
              </VStack>
            <Button type="submit" size="lg" colorScheme="red" w="100%" mt="6" isLoading={formState.isSubmitting}>
              Criar conta
            </Button>

            <VStack
              mt="5"
              align="center"
              justify="center"
              _hover={{ color: "red.500" }}
            >
              <Link to="/login">Já tenho uma conta. Fazer login!</Link>
            </VStack>

            <Flex align="center" justify="center">
              <Image
                src="../../assets/logo-pb.png"
                alt="Delivery Mais"
                mt="5"
              />
            </Flex>
          </form>
          </Flex>
      </VStack>

      {isWideVersion && (
        <Image
          src="../../assets/fundo-login.jpg"
          alt="Delivery Mais"
          h="100%"
          w="100%"
          display="block"
          fit="cover"
        />
      )}
    </Grid>
  );
}
