import React from 'react';
import Formulario from "./components/Formulario";
import Cadastro from "./components/Cadastro";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from "./theme";

function App() {

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Cadastro/>
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
}


export default App;
