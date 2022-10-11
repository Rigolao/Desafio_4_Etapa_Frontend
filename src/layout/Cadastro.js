import React from "react";
import {Box, Button, Grid, Stack, TextField, Typography} from "@mui/material";
import {GridLayout, LeftColor} from "./Login";
import Center from "../componente/Center";

function Cadastro() {
    return (
        <GridLayout>
            <Grid xs={8} sx={{width: "468px"}}>
                <Typography variant="h3">Dados pessoais</Typography>
                <Typography color="#5C5959" fontSize="14px" fontWeight="semibold">Preencha os campos do(a) cientista que
                    irá usar a plataforma</Typography>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    spacing={2}
                    sx={{
                        marginTop: "20px"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <TextField label="Nome" required/>
                        <TextField label="Sobrenome" required/>
                    </Stack>
                    <TextField label="E-mail" required/>
                    <TextField label="Confirmar e-mail" required/>
                    <TextField label="CPF" required/>
                    <TextField label="Senha" required/>
                    <TextField label="Confirmar senha" required/>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <TextField label="Data de nascimento" required/>
                        <TextField label="Lattes ID" required/>
                    </Stack>
                    <TextField label="E-mail alternativo" required/>
                </Stack>
                <Stack
                    sx={{
                        marginTop: "20px"
                    }}
                    direction="row"
                    justifyContent="space-between">
                <Button sx={{
                    width: "138px",
                    height: "55px"
                }}
                        variant="outlined">Voltar</Button>
                <Button sx={{
                    backgroundColor: "#6C63FF",
                    width: "208px",
                    height: "55px"}}
                        variant="contained">Entrar</Button>
                </Stack>
            </Grid>
            <Center>
                <LeftColor/>
            </Center>
        </GridLayout>);
}

export default Cadastro;