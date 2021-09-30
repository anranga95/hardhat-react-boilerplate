import * as React from "react"
import {
  ChakraProvider,
  theme,
  Center
} from "@chakra-ui/react"
import { Symfoni } from "./hardhat/SymfoniContext";

import { Greeter } from './components/Greeter';
import { Navbar } from './components/Navbar';

function App() {

  return (

    <Symfoni autoInit={false} loadingComponent={<h1>LOADING...</h1>}>
      <ChakraProvider theme={theme}>
        <Navbar></Navbar>
        <Center>
          <Greeter></Greeter>
        </Center>
      </ChakraProvider>
    </Symfoni>
  );
}

export default App;
