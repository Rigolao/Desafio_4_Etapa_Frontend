import React from 'react';
import Login from "./layout/Login";
import Cadastro from "./layout/Cadastro";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import Perfil from "./layout/Perfil";
import Card from "./componente/Card";

function App() {

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <BrowserRouter>
                        <Login/>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
}


export default App;
