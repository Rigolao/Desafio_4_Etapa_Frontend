import React from 'react'
import {Stack, Paper, TextField, Typography, Box, Divider, Grid, Button, Alert} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Header from "../../componentes/Header";

const Perfil = () => {
    const aluno = {
        nome: 'João',
        sobrenome: 'Marques',
        email: 'joao@gmail.com',
        emailOpcional: 'joaocontato@gmail.com',
    }

    return (
        <>
            <Stack marginLeft='30px' marginTop='20px'>
                <Header titulo='Perfil de João Marques'/>
                <Alert severity="success" sx={{marginBottom: '15px'}}>This is a success alert — check it out!</Alert>

                <Stack component={Paper}>
                    <Typography variant='h6' textAlign='start' fontWeight='bold' padding='20px'>Edição</Typography>

                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        padding: '0 0 20px 20px'
                    }}>
                        <Grid container  maxWidth='700px' spacing={2} direction='row' columnSpacing={{ xs: 1, sm: 2 }}>
                            <Grid item>
                                <TextField label='Nome' value={aluno.nome}/>
                            </Grid>
                            <Grid item>
                                <TextField label='Sobrenome' value={aluno.sobrenome}/>
                            </Grid>
                            <Grid item>
                                <TextField label='Email' value={aluno.email}/>
                            </Grid>
                            <Grid item>
                                <TextField label='Email opcional' value={aluno.emailOpcional}/>
                            </Grid>
                            <Grid item>
                                <TextField label='Redes Sociais' value={aluno.nome}/>
                            </Grid>
                            <Grid item>
                                <TextField label='Sobrenome' value={aluno.sobrenome}/>
                            </Grid>
                            <Grid item>
                                <TextField label='Email'/>
                            </Grid>
                            <Grid item>
                                <TextField label='Area de atuacao' value={aluno.sobrenome}/>
                            </Grid>
                        </Grid>
                        <Stack direction='row'>
                            <Button variant="outlined" startIcon={<ArrowBack/>}
                                    sx={{width: '120px', marginTop: '20px', marginRight: '20px'}}>Voltar</Button>
                            <Button variant="contained" startIcon={<SaveIcon/>}
                                    sx={{width: '120px', marginTop: '20px'}}>Salvar</Button>
                        </Stack>
                    </form>
                </Stack>
            </Stack>
        </>
    )
        ;
}


export default Perfil