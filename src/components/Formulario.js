import React from "react";
import {Box, Stack} from "@mui/material";
import {Button, TextField} from "@mui/material";


function Formulario (){

    return (
        <Box sx={{width: "50vw", height: "100vh", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "flex-end"}}>
            <Box sx={{width: "368px",height:"472px",margin: "0 auto"}}>
                <Stack spacing={2}>
                    <h1 style={{fontSize: "34px", fontWeight: "bold", textAlign: "left"}}>Faça seu login</h1>
                    <TextField label="CPF" required variant="filled"/>
                    <TextField label="Senha" type="password" required variant="filled"/>

                    <Stack direction="row" justifyContent="space-between" spacing={2} >
                        <Button sx={{backgroundColor: "#6C63FF", widht: "100px", height: "55px"}} variant="contained">Entrar</Button>
                        <a style={{color: "#6C63FF", curso: "pointer", fontSize: "12px", lineHeight: "55px", fontWeight: "semibold"}}>Esqueci minha senha</a>
                    </Stack>
                    <Stack spacing={6}>
                        <p style={{fontSize: "12px", textAlign: "left"}}><strong>Não tem uma conta? </strong><a style={{color: "#6C63FF"}}>Cadastra-se</a></p>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}
export default Formulario;