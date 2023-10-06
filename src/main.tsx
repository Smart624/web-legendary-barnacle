import ReactDOM from 'react-dom';
import Routes from "./routes";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Routes />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


