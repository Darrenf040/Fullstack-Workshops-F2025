import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, Center } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Center minH="100vh" bg="gray.800">
      <App />
    </Center>
  </ChakraProvider>
);
