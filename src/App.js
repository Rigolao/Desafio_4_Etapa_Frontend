import "./App.css";
import React from "react";
import Login from "./pages/Login";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import Projetos from "./pages/Projetos";
import Filter from './componentes/Filter'
import TodosCientista from "./pages/TodosCientista";
import TodosProjetos from "./pages/TodosProjetos";


function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <div className="App" style={{width: "100vw", height: '100vh', overflowX: 'hidden'}}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="" element={<LandingPage/>} index/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="entrar" element={<Login/>}/>
                <Route path="dashboard" element={<Filter><Dashboard/></Filter>}>
                  <Route path="meusProjetos" element={<Projetos/>}/>
                  <Route path="perfil" element={<Perfil/>}/>
                  <Route path="todosProjetos" element={<TodosProjetos/>}/>
                  <Route path="todosCientista" element={<TodosCientista/>}/>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
