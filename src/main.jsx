import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider , ColorModeScript } from '@chakra-ui/react'
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <ColorModeScript initialColorMode='light' />
          <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
