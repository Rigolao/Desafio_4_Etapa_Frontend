import React from 'react';
import Login from "./layout/Login";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import Perfil from "./layout/Perfil";
import Card from "./componente/Card";
import Tela from "./layout/Tela";

function App() {

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <BrowserRouter>
                        <Tela/>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
}


export default App;
