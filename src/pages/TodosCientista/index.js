import React, {useEffect, useState} from 'react'
import {
  Autocomplete,
  Button, Card,
  DialogTitle,
  Grid,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import Header from "../../componentes/Header";
import CardProject from "../../componentes/CardProject";
import Add from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import * as yup from 'yup';
import axios from "axios";
import {useFormik} from "formik";
import CardAvatar from "../../componentes/CardAvatar";


const validationSchema = yup.object({
  titulo: yup.string().required("Esse campo é obrigatório"),
  sobre: yup.string().required("Esse campo é obrigatório").max(250, "O máximo 250 caracteres"),
  dataInicio: yup.string().required("Esse campo é obrigatório"),
  dataTermino: yup.string().required("Esse campo é obrigatório")
})

const TodosProjetos = () => {

  const [cientistas, setCientistas] = useState([])

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

  return (
    <>
      <Stack marginLeft='30px' marginTop='20px'>
        <Header titulo='Todos Cientista'/>
        <Stack component={Paper}
               width='100%'
               height='80px'
               justifyContent='space-between'
               alignItems='center'
               direction='row'
               marginBottom='20px'
               padding='20px'
        >
          <TextField
            id="combo-box-demo"
            label="Pesquisar"
          />

        </Stack>

        <Grid container spacing={6}>
          <Grid item>
            <CardAvatar
            nome="João Marques"
            email="joao@unaerp.br"
            telefone="(16) 9988646382"
            areaAtuacaoCientista="Desenvolvedor Front-End"
            areaFormacao="Engenharia de Software"
            lattes="32132913"/>
          </Grid>
        </Grid>
      </Stack>
    </>
  )
    ;
}


export default TodosProjetos;