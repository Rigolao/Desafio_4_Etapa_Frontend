import React from 'react'
import {Stack, Paper, TextField, Typography, Box, Divider, Grid, Button, Alert} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Header from "../../componentes/Header";
import {useFormik} from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  cpf: yup.string().required("Esse campo é obrigatório").min(11, "CPF inválido"),
  senha: yup.string().required("Esse campo é obrigatório")
})

const Perfil = () => {

  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      emailAlternativo: "",
      lattes: "",
      snh: "",
      telefones: [
        {
          ddd: "",
          numero: ""
        }
      ],
      areaAtuacaoCientista: [
        {
          nome: ""
        }
      ],
      formacoes: [
        {
          nome: "",
          dataInicio: "",
          dataTermino: ""
        }
      ],
      redesSociais: [
        {
          endereco: "",
          tipoRede: ""
        }
      ]
    },
    onSubmit: (values) => (
      console.log(values)
    ),
    validationSchema: validationSchema

  })
  const aluno = {}

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
          }}
                onSubmit={formik.handleSubmit}
          >
            <Grid container maxWidth='700px' spacing={2} direction='column' columnSpacing={{xs: 1, sm: 2}} component={Stack} display='flex'>
              <Grid item container spacing={2} direction='row' columnSpacing={{xs: 1, sm: 2}}>
                <Grid item>
                  <TextField label='Nome' value={formik.values.nome}/>
                </Grid>
                <Grid item>
                  <TextField label='CPF' value={formik.values.cpf}/>
                </Grid>
                <Grid item>
                  <TextField label='Data Nascimento' value={formik.values.dataNascimento}/>
                </Grid>
                <Grid item>
                  <TextField label='Email opcional' value={formik.values.emailAlternativo}/>
                </Grid>
                <Grid item>
                  <TextField label='Lattes' value={formik.values.lattes}/>
                </Grid>
                <Grid item>
                  <TextField label='Senha' value={formik.values.snh}/>
                </Grid>
                <Grid item>
                  <TextField label='Telefone' value={formik.values.nome}/>
                </Grid>
              </Grid>
              <Grid item container direction='row'>
                <Grid item>
                  <TextField label='Area de atuacao' value={formik.values.areaAtuacaoCientista}/>
                </Grid>
                {formik.values.formacoes[0] !== null &&
                  <Grid item>
                    <TextField label='Formações' value={formik.values.formacoes[0].nome}/>
                  </Grid>
                }
                {formik.values.formacoes[1] !== null &&
                  <Grid item>
                    <TextField label='Formações' value={formik.values.formacoes[0].dataInicio}/>
                  </Grid>
                }
                <Grid item>
                  <TextField label='Redes Sociais' value={formik.values.redesSociais}/>
                </Grid>

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