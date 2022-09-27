import React from "react";
import {Box, Stack} from "@mui/material";
import {Button, TextField} from "@mui/material";


function Formulario() {

    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            width: "100%",
            height: "100vh",
            padding: "1rem"
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                background: "#6C63FF",
                borderRadius: "20px",

            }}>

            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <Box sx={{width: "368px", height: "472px", margin: "0 auto"}}>
                    <Stack spacing={2}>
                        <h1 style={{fontSize: "34px", fontWeight: "bold", textAlign: "left"}}>Faça seu login</h1>
                        <TextField label="CPF" required variant="filled"/>
                        <TextField label="Senha" type="password" required variant="filled"/>

                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                            <Button sx={{backgroundColor: "#6C63FF", widht: "100px", height: "55px"}}
                                    variant="contained">Entrar</Button>
                            <a style={{
                                color: "#6C63FF",
                                curso: "pointer",
                                fontSize: "12px",
                                lineHeight: "55px",
                                fontWeight: "semibold"
                            }}>Esqueci minha senha</a>
                        </Stack>
                        <Stack spacing={6}>
                            <p style={{fontSize: "12px", textAlign: "left"}}><strong>Não tem uma conta? </strong><a
                                style={{color: "#6C63FF"}}>Cadastra-se</a></p>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>

    )
        ;
}

export default Formulario;