import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, CardContent, DialogTitle, Grid, Paper, Stack, TextField} from "@mui/material";
import Header from "../../componentes/Header";
import Add from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CardAvatar from "../../componentes/CardAvatar";
import CardProject from "../../componentes/CardProject";


export default () => {

  const [open, setOpen] = useState(false);
  const [cientistas, setCientistas] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      axios
        .get("http://localhost:8081/cientistas/todosCientistas", {
          withCredentials: true,
          headers: {
            Authorization: sessionStorage.getItem('user')
          }
        })
        .then((response) => setCientistas(response.data))
        .catch((error) => console.log(error));
    }
    doFetch();
  }, []);



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
          {
            cientistas.map((cientista) => {
              return (
                <Grid item key={cientista.id}>
                  <CardAvatar
                    nome={cientista.nome}
                    email={cientista.email}
                    areaAtuacaoCientista={cientista.areaAtuacaoCientista}
                    lattes={cientista.lattes}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Stack>
    </>
  );
}