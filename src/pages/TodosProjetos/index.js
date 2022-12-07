import React, {useEffect, useState} from 'react'
import {
  Autocomplete,
  Button,
  DialogTitle, FormControlLabel, FormLabel,
  Grid, InputAdornment,
  Paper, Radio, RadioGroup,
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
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";

const TodosProjetos = () => {

  const [projetos, setProjetos] = useState([])
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(true);
  const [busca, setBusca] = useState('')

  const handleAtivo = (event, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
    }
    console.log(status);
  }

  useEffect(() => {
    const doFetch = async () => {
      axios
        .get("http://localhost:8081/projetos/todosProjetos", {
          withCredentials: true,
          headers: {
            Authorization: sessionStorage.getItem('user')
          }
        })
        .then((response) => setProjetos(response.data))
        .catch((error) => console.log(error));
    }
    doFetch();
  }, []);

  const projetosFiltrados = projetos.filter((projeto) => projeto.titulo.startsWith(busca))


  return (
    <>
      <Stack marginLeft='30px' marginTop='20px'>
        <Header titulo='Todos Projetos'/>
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
            label="Pesquisar por titulo"
            InputProps={{
              endAdornment: <InputAdornment position='end'><SearchIcon/></InputAdornment>
            }}
            values={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </Stack>

        <Grid container spacing={6}>
          {
            projetosFiltrados.map((projeto) => {
              return (
                <Grid item key={projeto.idProjeto}>
                  <CardProject
                    titulo={projeto.titulo}
                    nome={projeto.nome}
                    sobre={projeto.sobre}
                    idProjeto={projeto.idProjeto}
                    publico={projeto.publico}
                    dataTermino={projeto.dataTermino}
                    dataInicio={projeto.dataInicio}
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