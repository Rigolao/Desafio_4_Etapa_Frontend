import React from 'react'
import {Stack, Paper, TextField} from "@mui/material";
import Header from "../../componentes/Header";
import Tabela from "../../componentes/Tabela";

const Projetos = () => {
    return (
        <>
            <Stack marginLeft='30px' marginTop='20px'>
                <Header titulo='Projetos'/>
            </Stack>
            <Tabela/>
        </>
    );
}


export default Projetos