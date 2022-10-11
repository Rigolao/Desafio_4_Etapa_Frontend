import React from 'react';
import Login from "./layout/Login";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Perfil from "./layout/Perfil";
import Card from "./componente/Card";
import LandingPage from "./layout/LandingPage";
import Cadastro from "./layout/Cadastro";
import LoginPage from "./layout/Login"



function App() {

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/'>
                            <Route path='' element={<LandingPage/>} index />
                            <Route path='cadastro' element={<Cadastro/>}/>
                            <Route path='entrar' element={<LoginPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter> 
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
}


export default App;
