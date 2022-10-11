import React from 'react';
import Login from "./layout/Login";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import Perfil from "./layout/Perfil";
import Card from "./componente/Card";
import Cadastro from "./layout/Cadastro";

function App() {

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <BrowserRouter>
                        <Cadastro/>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
}


export default App;
