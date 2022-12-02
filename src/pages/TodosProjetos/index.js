import React, {useEffect, useState} from 'react'
import {
  Autocomplete,
  Button,
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


const validationSchema = yup.object({
  titulo: yup.string().required("Esse campo é obrigatório"),
  sobre: yup.string().required("Esse campo é obrigatório").max(250, "O máximo 250 caracteres"),
  dataInicio: yup.string().required("Esse campo é obrigatório"),
  dataTermino: yup.string().required("Esse campo é obrigatório")
})

const TodosProjetos = () => {

  const [projetos, setProjetos] = useState([])
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(true);

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


  const formik = useFormik({
    initialValues: {
      titulo: '',
      sobre: '',
      dataInicio: '',
      dataTermino: '',
      publico: true,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => (
      axios
        .post("http://localhost:8081/projetos/cadastrarProjeto",values, {
          withCredentials: true,
          headers: {
            Authorization: sessionStorage.getItem('user')
          },
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    )
  })

  const handleClose = () => {
    formik.resetForm();
    setOpen(false)
  }
  const handClickOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Stack marginLeft='30px' marginTop='20px'>
        <Header titulo='Meus Projetos'/>
        <Stack component={Paper}
               width='100%'
               height='80px'
               justifyContent='space-between'
               alignItems='center'
               direction='row'
               marginBottom='20px'
               padding='20px'
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: 300, color: 'tomato'}}
            renderInput={(params) => <TextField {...params}  label="Pesquisar" />}
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
                    <Typography component='span' sx={{
                      color:"rgba(0, 0, 0, 0.5)" }}>Público</Typography>
                    <ToggleButtonGroup
                      value={status}
                      exclusive
                      onChange={handleAtivo}
                    >
                      <ToggleButton value={true}>Ativo</ToggleButton>
                      <ToggleButton value={false}>Inativo</ToggleButton>
                    </ToggleButtonGroup>
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
            projetos.map((projeto) => {
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