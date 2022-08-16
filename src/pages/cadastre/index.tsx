import {
  Flex,
  FormControl,
  VStack,
  Text,
  Input,
  Button,
  Image,
  Grid,
  useBreakpointValue,
  FormLabel,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api";

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirm: string,
  adresse: string,
  complement: string,
  district: string,
  city: string,
  zipCode: string,
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("E-mail obrigatorio").email('E-mail invalido'),
  password: yup.string().required("Senha obrigatoria").min(6, ('No minimo 6 caracteres')),
  password_confirm: yup.string().oneOf([
    null, yup.ref("password")
  ], 'As senhas precisam ser iguais'),
  adresse: yup.string().required("Endereço obrigatorio"),
  complement: yup.string().required("Complemento obrigatorio"),
  district: yup.string().required("Bairro obrigatorio"),
  city: yup.string().required("Cidade obrigatorio"),
  zipCode: yup.string().required("CEP obrigatorio"),
})

export function Cadastre() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  enum CityEnum {
    pedreira = "Pedreira - SP",
    campinas = "Campinas - SP",
    saoPaulo = "SaoPaulo - SP"
  }

  interface CityProps {
    city: CityEnum
  }

  const { register, handleSubmit, formState } = useForm<CreateUserFormData, CityProps>({
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');

  async function onSubmit() {
    await new Promise (resolve => setTimeout(resolve, 2000))

    api.post('/cadastre', {
      name, 
      email, 
      password, 
      confirmPassword, 
      adresse, complement, 
      district, 
      zipCode
    }).then (response => (
      console.log(response),
      navigate('/')
    )).catch(err => console.error(err))
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
                {...register('name')}
                onChange={(event) => setName(event.target.value)}
                focusBorderColor="red.500"
                position="inherit"
              />
              <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.name?.message}</Text>

              <Text as="span">E-mail</Text>
              <Input
                type="email"
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
                    {...register("password")}
                    onChange={(event) => setPassword(event.target.value)}
                    focusBorderColor="red.500"
                  />
                  <InputRightElement>
                    <Button variant="none" size="normal" onClick={handleClick}>
                      {show ? <FiEyeOff /> : <FiEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.password?.message}</Text>
              </VStack>

              <VStack align="left">
                <Text as="span">Confirme sua senha</Text>
                <InputGroup>
                  <Input
                    type={shows ? "text" : "password"}
                    {...register('password_confirm')}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    focusBorderColor="red.500"
                  />
                  <InputRightElement>
                    <Button variant="none" size="normal" onClick={handleClicks}>
                      {shows ? <FiEyeOff /> : <FiEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.password_confirm?.message}</Text>
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
                  type="text"
                  {...register("adresse")}
                  onChange={(event) => setAdresse(event.target.value)}
                  focusBorderColor="red.500"
                  position="inherit"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.adresse?.message}</Text>
              </VStack>

              <VStack align="left">
                <Text as="span">Compl.</Text>
                <Input
                  type="text"
                  {...register('complement')}
                  onChange={(event) => setComplement(event.target.value)}
                  focusBorderColor="red.500"
                  position="inherit"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.complement?.message}</Text>
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
                  type="text"
                  {...register('district')}
                  onChange={(event) => setDistrict(event.target.value)}
                  focusBorderColor="red.500"
                  position="inherit"
                />
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.district?.message}</Text>
              </VStack>

              <VStack align="left">
                <FormControl>
                  <FormLabel>Cidade</FormLabel>
                  <Select
                    placeholder="Cidade"
                    focusBorderColor="red.500"
                    {...register('city')}
                  >
                    <option value="Pedreira - SP">Pedreira - SP</option>
                    <option value="São Paulo - SP">São Paulo - SP</option>
                    <option value="Campinas - SP">Campinas - SP</option>
                  </Select>
                </FormControl>
                <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.city?.message}</Text>
              </VStack>
            </Flex>

            <VStack align="left">
              <Text as="span">CEP</Text>
              <Input
                type="text"
                {...register('zipCode')}
                onChange={(event) => setZipCode(event.target.value)}
                focusBorderColor="red.500"
              />
              <Text as="span" color="red.500" fontSize="sm" lineHeight="1">{errors.zipCode?.message}</Text>
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
          h="100vh"
          w="100%"
          display="block"
          fit="cover"
        />
      )}
    </Grid>
  );
}
