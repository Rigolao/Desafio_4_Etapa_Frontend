import React from 'react'
import {Alert, Button, Grid, Paper, Stack, TextField} from "@mui/material";
import Header from "../../componentes/Header";
import Add from '@mui/icons-material/Add';
import CardAvatar from "../../componentes/CardAvatar";


const PaginaInicial = () => {
    return (
        <>
            <Stack marginLeft='30px' marginTop='20px'>
                <Header titulo='Página Inicial'/>
                <Stack component={Paper}
                       width='100%'
                       height='80px'
                       justifyContent='space-between'
                       alignItems='center'
                       direction='row'
                       marginBottom='20px'
                       padding='20px'
                >
                    <TextField label='Pesquisar'/>
                    <Button
                        variant='contained'
                        sx={{height: '50px'}}
                        startIcon={<Add/>}
                    >
                        Cadastro
                    </Button>
                </Stack>
                <Grid container spacing={6}>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                    <Grid item>
                        <CardAvatar/>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export default PaginaInicial