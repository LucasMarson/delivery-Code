import { Flex, FormControl, VStack, Text, Input, Button, Image, Grid, useBreakpointValue, InputGroup, InputRightElement, InputLeftElement, useFormErrorStyles } from "@chakra-ui/react";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdEmail} from "react-icons/md";
import { HiLockClosed} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface createUserFormData {
    id: number;
    email: string;
    password: string;
}

const createUserFormSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatorio").email('E-mail invalido'),
    password: yup.string().required("Senha obrigatoria").min(6, ('No minimo 6 caracteres'))
})


export function Login() {
    const isWideVersion = useBreakpointValue ({
        base: false,
        md: true,
        lg: true,
    })

    const { register, handleSubmit, formState} = useForm<createUserFormData>({
        resolver: yupResolver(createUserFormSchema)
    })
    const { errors } = formState
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);

    const handleClick = () => {setShow(!show)};
    const navigate = useNavigate()

    async function createUser() {
        await new Promise (resolve => setTimeout(resolve, 2000))

        api.post('login', {
            email,
            password,
        }).then((response) => {
            localStorage.setItem("sessionToken", response.data.token)
            localStorage.setItem("sessionId", response.data.id)
            localStorage.setItem("sessionEmail", email)
            localStorage.setItem("sessionzipCode", response.data.country)
            localStorage.setItem("sessionCity", response.data.city)
            console.log(response)
            navigate('/')
        }).catch((err) => {
            console.error(err)
        })
    }
    
    return (
        <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]}>
            <VStack mt={["24", "0"]} mx="auto" align="center" justify="center">
                <form onSubmit={handleSubmit(createUser)}>
                <FormControl>
                    <VStack>
                        <Text as="h3" w="64" textAlign="center" fontSize="28px" fontWeight="semibold">Peça seu delivery  agora mesmo.</Text>
                        <Text as="span" >Acesse sua conta</Text>
                    </VStack>

                    <VStack align="left" mb="5" >
                        <Text as="span">E-mail</Text>
                        <InputGroup>
                            <InputLeftElement children={<MdEmail/>} fontSize='1.2em'/>
                            <Input 
                                {...register('email')}
                                focusBorderColor="red.500"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputGroup>
                        <Text as="span" color="red.500">{errors.email?.message}</Text>

                        <Text as="span">Senha</Text>
                        <InputGroup>
                            <InputLeftElement children={<HiLockClosed/>} fontSize='1.2em'/>
                            <Input
                                type={show ? "text" : "password"}
                                {...register('password')}
                                onChange={(e) => setPassword(e.target.value)}
                                focusBorderColor="red.500"
                            />
                            <InputRightElement>
                                <Button variant="none" size="normal" onClick={handleClick} border="none">
                                    {show ? <FiEyeOff /> : <FiEye />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text as="span"  color="red.500">{errors.password?.message}</Text>
                    </VStack>

                    <Button type="submit" size="lg" colorScheme="red" w="100%" isLoading={formState.isSubmitting}>Acessar</Button>

                    <VStack mt="5" align="center" justify="center" _hover={{color: "red.500"}}>
                        <Link to="/cadastre" >Não tenho uma conta. Criar agora!</Link>
                    </VStack>

                    <Flex align="center" justify="center">
                        <Image src="../../assets/logo-pb.png" alt="Delivery Mais" mt="5"/>
                    </Flex>
                </FormControl>
                </form>
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
    )
}