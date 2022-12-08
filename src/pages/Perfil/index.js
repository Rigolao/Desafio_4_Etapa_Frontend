import React, {useEffect, useState} from 'react'
import {Stack, Paper, TextField, Typography, Box, Divider, Grid, Button, Alert} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Header from "../../componentes/Header";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import FormularioPerfil from "../../componentes/FormularioPerfil";



const Perfil = () => {

  const [cientista, setCientista] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      axios
        .get("http://localhost:8081/cientistas/retornaPerfil/" + sessionStorage.getItem("cpf"), {
          withCredentials: true,
          headers: {
            Authorization: sessionStorage.getItem('user')
          }
        })
        .then((response) => setCientista(response.data))
        .catch((error) => console.log(error));
    }
    doFetch();
  }, []);


  return (
    <>
      <Stack marginLeft='30px' marginTop='20px'>
        <Header titulo='Perfil de ' autor={cientista.nome}/>

        <Stack component={Paper}>
          <Typography variant='h6' textAlign='start' fontWeight='bold' padding='20px'>Edição</Typography>
          <Grid sx={{width:'800px', marginLeft: '20px'}}>
              <FormularioPerfil/>
          </Grid>
        </Stack>
      </Stack>
    </>
  )
    ;
}


export default Perfil