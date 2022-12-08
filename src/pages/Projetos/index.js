import React, {useEffect, useState} from 'react'
import {
  Alert,
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
import {postProjeto} from "../../componentes/Services/postProjeto";
import moment from "moment/moment";
import SearchIcon from '@mui/icons-material/Search';
import {getProjeto} from "../../componentes/Services/getProjeto";


const validationSchema = yup.object({
  titulo: yup.string().required("Esse campo é obrigatório"),
  sobre: yup.string().required("Esse campo é obrigatório").max(250, "O máximo 250 caracteres"),
  dataInicio: yup.string().required("Esse campo é obrigatório"),
  dataTermino: yup.string().required("Esse campo é obrigatório")
})

const Projetos = () => {

  const [projetos, setProjetos] = useState([])
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false)
  const [busca, setBusca] = useState('')
  const [apagar, setApagar] = useState(false)
  const [edit, setEdit] = useState(false)


  useEffect(() => {

    const doFetch = async () => {
      axios
        .get("http://localhost:8081/projetos/meusProjetos", {
          headers: {
            Authorization: sessionStorage.getItem('user')
          }
        })
        .then((response) => setProjetos(response.data))
        .catch((error) => console.log(error));
    }
    doFetch();
  }, []);


  const formik = useFormik({

    initialValues: {
      titulo: '',
      sobre: '',
      dataInicio: '',
      dataTermino: '',
      publico: false,
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.dataInicio = moment(values.dataInicio, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.dataTermino = moment(values.dataTermino, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.publico = Boolean(values.publico)

      FetchProjeto(values)
      handleClose()
      const doFetch = async () => {
        axios
          .get("http://localhost:8081/projetos/meusProjetos", {
            headers: {
              Authorization: sessionStorage.getItem('user')
            }
          })
          .then((response) => setProjetos(response.data))
          .catch((error) => console.log(error));
      }
      doFetch();
    }
  })

  const handleClose = () => {
    formik.resetForm();
    setOpen(false)
  }

  const FetchProjeto = async (values) => {
    await postProjeto (values).then(() => {
      setAlert(true)
    })
      .catch(() => {
        setError(true)
      })
  }

  const handClickOpen = () => {
    setOpen(true)
  }

  const projetosFiltrados = projetos.filter((projeto) => projeto.titulo.startsWith(busca))

  const projetoDeletado = (evet) => {
    setApagar(evet)
  }
  const projetoEditado = (evet) => {
    setEdit(evet)
  }
  const atualizarPagina = () => {
    const doFetch = async () => {
      axios
        .get("http://localhost:8081/projetos/meusProjetos", {
          headers: {
            Authorization: sessionStorage.getItem('user')
          }
        })
        .then((response) => setProjetos(response.data))
        .catch((error) => console.log(error));
    }
    doFetch();
  }

  return (
    <>
      <Stack marginLeft='30px' marginTop='20px'>
        <Header titulo='Meus Projetos'/>
        {alert && <Alert onClose={() => { setAlert(false)
        }}>Projeto cadastrado com sucesso!</Alert>}
        {error && <Alert severity="error" onClose={() => { setError(false)}}>Houve erro, tente cadastrar novamente mais tarde! </Alert> }
        {apagar && <Alert onClose={() => { setApagar(false)}}> Projeto apagado com sucesso!</Alert>}
        {edit && <Alert onClose={() => { setEdit(false)}}> Projeto editado com sucesso!</Alert>}
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

            <Paper
              sx={{width: '600px', height: 'auto'}}>
              <form
                onSubmit={formik.handleSubmit}
              >
                <DialogTitle id="alert-dialog-title">
                  {"Cadastrar Projeto"}

                </DialogTitle>
                <DialogContent>
                  <Stack mt={1} spacing={2}>
                    <TextField
                      autoFocus
                      label="Titulo"
                      id="titulo"
                      name="titulo"
                      value={formik.values.titulo}
                      onChange={formik.handleChange}
                      error={formik.touched.titulo && Boolean(formik.errors.titulo)}
                      helperText={formik.touched.titulo && formik.errors.titulo}
                    />
                    <TextField
                      label="Sobre"
                      id="sobre"
                      name="sobre"
                      multiline
                      rows={4}
                      onChange={formik.handleChange}
                      error={formik.touched.sobre && Boolean(formik.errors.sobre)}
                      helperText={formik.touched.sobre && formik.errors.sobre}
                    />
                    <TextField
                      label="Data Inicio"
                      id="dataInicio"
                      name="dataInicio"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={formik.handleChange}
                      error={formik.touched.dataInicio && Boolean(formik.errors.dataInicio)}
                      helperText={formik.touched.dataInicio && formik.errors.dataInicio}
                    />
                    <TextField
                      label="Data Termino"
                      id="dataTermino"
                      name="dataTermino"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={formik.handleChange}
                      error={formik.touched.dataTermino && Boolean(formik.errors.dataTermino)}
                      helperText={formik.touched.dataTermino && formik.errors.dataTermino}
                    />
                    <FormLabel id="demo-controlled-radio-buttons-group">Público</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="publico"
                      value={formik.values.publico}
                      onChange={formik.handleChange}
                    >
                      <FormControlLabel value={true} control={<Radio />} label="Ativo" />
                      <FormControlLabel value={false} control={<Radio />} label="Inativo" />
                    </RadioGroup>
                  </Stack>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancelar</Button>
                  <Button type="submit" variant="contained">
                    Cadastrar
                  </Button>
                </DialogActions>
              </form>
            </Paper>
          </Dialog>
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
                    apagarCallBack={projetoDeletado}
                    atualizarPagina={atualizarPagina}
                    projetoEditado = {projetoEditado}


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


export default Projetos