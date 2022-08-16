import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <Flex direction="column" mx="4">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Flex>
  );
}

export default App;
