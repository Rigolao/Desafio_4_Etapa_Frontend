import React from 'react';
import Login from "./layout/Login";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./layout/LandingPage";
import Cadastro from "./layout/Cadastro";
import Perfil from "./componente/MenuLateral";



function App() {

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <div className="App">

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/'>
                            <Route path='' element={<LandingPage/>} index />
                            <Route path='cadastro' element={<Cadastro/>}/>
                            <Route path='entrar' element={<Login/>}/>
                            <Route path='perfil' element={<Perfil/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter> 
                </div>
            </ThemeProvider>
        </CssBaseline>
    );
}


export default App;
