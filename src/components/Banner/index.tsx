import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BannerProps {
    src: string;
  }

export function Banner ({src}: BannerProps) {
    return (
        <Link to="/">
            <Image src={src} alt="Banner" maxWidth="100%" borderRadius="40px"/>
        </Link>
    )
}