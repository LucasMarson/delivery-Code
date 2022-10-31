import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BannerProps {
    url_imagem: string;
    descricao: string;
    id_banner: string;
  }

export function Banner (props: BannerProps) {
    return (
        <Link to={`/busca?id_banner=${props.id_banner}&descr=${props.descricao}`}>
            <Image src={props.url_imagem} alt="Banner" w="400px" maxWidth="100%" borderRadius="15px"/>
        </Link>
    )
}