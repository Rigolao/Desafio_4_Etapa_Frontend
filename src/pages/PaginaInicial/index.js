import React, {useState} from 'react'
import {Button, DialogTitle, Grid, Paper, Stack, TextField} from "@mui/material";
import Header from "../../componentes/Header";
import Add from '@mui/icons-material/Add';
import CardAvatar from "../../componentes/CardAvatar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";


const PaginaInicial = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }
    const handClickOpen = () => {
        setOpen(true)
    }

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
                        onClick={handClickOpen}
                        sx={{height: '50px'}}
                        startIcon={<Add/>}
                    >
                        Cadastro
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Cadastro Projeto"}
                        </DialogTitle>
                        <DialogContent>
                            <Stack m={1}>
                                <TextField
                                    autoFocus
                                    label="Nome do Projeto"
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    autoFocus
                                    label="Multiline"
                                    multiline
                                    rows={4}
                                />
                            </Stack>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>

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