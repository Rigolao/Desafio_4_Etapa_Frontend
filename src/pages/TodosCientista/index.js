import React, {useEffect, useState} from 'react'
import {
  Autocomplete,
  Button, Card,
  DialogTitle,
  Grid, InputAdornment,
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
import SearchIcon from "@mui/icons-material/Search";


const validationSchema = yup.object({
  titulo: yup.string().required("Esse campo é obrigatório"),
  sobre: yup.string().required("Esse campo é obrigatório").max(250, "O máximo 250 caracteres"),
  dataInicio: yup.string().required("Esse campo é obrigatório"),
  dataTermino: yup.string().required("Esse campo é obrigatório")
})

const TodosProjetos = () => {

  const [cientistas, setCientistas] = useState([])
  const [busca, setBusca] = useState('')

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

  const cientistasFiltrados = cientistas.filter((cientista) => cientista.nome.startsWith(busca))

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
            label="Pesquisar por cientista"
            InputProps={{
              endAdornment: <InputAdornment position='end'><SearchIcon/></InputAdornment>
            }}
            values={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />


        </Stack>

        <Grid container spacing={6}>
          {
            cientistasFiltrados.map((cientista) => {
              const areaAtuacaoCientista = cientista.areaAtuacaoCientista != null ? cientista.areaAtuacaoCientista.map((nome) => nome.nome) : ''
              const formacao = cientista.formacoes != null ? cientista.formacoes.map((formacoes) => formacoes.nome) : ''
              const ddd = cientista.telefones != null ? cientista.telefones.map((telefone) => telefone.ddd) : ''
              const telefone = cientista.telefones != null ? cientista.telefones.map((telefone) => telefone.numero) : ''
              const redeSociais = cientista.redesSociais != null ? cientista.redesSociais.map((redeSociais) => redeSociais.tipoRede) : ''
              return (
                <Grid item key={cientista.id}>
                  <CardAvatar
                    avatar={cientista.nome.substr(0,1)}
                    nome={cientista.nome}
                    email={cientista.email}
                    ddd = {ddd == '' ? 'Nenhuma' : ddd == 1 ? ddd : ddd.join(", ")}
                    telefone={telefone == '' ? 'Nenhuma' : telefone == 1 ? telefone : telefone.join(", ")}
                    areaAtuacaoCientista={areaAtuacaoCientista == '' ? 'Nenhuma' : areaAtuacaoCientista == 1 ? areaAtuacaoCientista : areaAtuacaoCientista.join(", ")}
                    areaFormacao={formacao == '' ? 'Nenhuma' : formacao == 1 ? formacao : formacao.join(", ")}
                    lattes={cientista.lattes}
                    redesSociais={redeSociais == '' ? 'Nenhuma' : redeSociais == 1 ? redeSociais : redeSociais.join(", ")}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Stack>
    </>
  )
    ;
}


export default TodosProjetos;