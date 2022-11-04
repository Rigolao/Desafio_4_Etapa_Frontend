import "./App.css";
import React from "react";
import Login from "./pages/Login";
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="" element={<LandingPage />} index />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="entrar" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} >
                  <Route path="inicial" element={<h1>Pagina Inicial</h1>} />
                  <Route path="projetos" element={<h1>Projetos</h1>} />
                  <Route path="perfil" element={<Perfil/>} />
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
