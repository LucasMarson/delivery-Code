import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface ModalOpenProviderProps {
    children: ReactNode
}

type ModalOpenContextData = UseDisclosureReturn

const ModalOpenContext = createContext({} as ModalOpenContextData)

export function ModalProvider({children}: ModalOpenProviderProps) {
    const disclosure = useDisclosure()

    return (
        <ModalOpenContext.Provider value={disclosure}>
            {children}
        </ModalOpenContext.Provider>
    )
}

export const useModalOpen = () => useContext(ModalOpenContext)