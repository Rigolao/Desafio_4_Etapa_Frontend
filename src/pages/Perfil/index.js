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
        },
        {
          nome: ""
        }
      ],
      formacoes: [
        {
          nome: "",
          dataInicio: "",
          dataTermino: ""
        },
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
        },
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
          <Grid sx={{width:'800px', marginLeft: '20px'}}>
            <form onSubmit={formik.handleSubmit}>
              <Stack
                spacing={2}
              >
                <TextField
                  fullWidth
                  label="Nome"
                  id="nome"
                  name="nome"
                  type="text"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  variant='outlined'
                  error={formik.touched.nome && Boolean(formik.errors.nome)}
                  helperText={formik.touched.nome && formik.errors.nome}
                />
                <TextField
                  label="E-mail"
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  variant='outlined'
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  label="E-mail alternativo"
                  type="text"
                  id="emailAlternativo"
                  name="emailAlternativo"
                  value={formik.values.emailAlternativo}
                  onChange={formik.handleChange}
                  variant='outlined'
                  error={formik.touched.emailAlternativo && Boolean(formik.errors.emailAlternativo)}
                  helperText={formik.touched.emailAlternativo && formik.errors.emailAlternativo}
                />


                <Stack
                  direction={{sm: 'column', md: 'row'}}
                  spacing={{xs: 2, sm: 2, md: 2}}
                >
                  <TextField
                    fullWidth
                    label="CPF"
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    variant='outlined'
                    error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                    helperText={formik.touched.cpf && formik.errors.cpf}
                    inputProps={{maxLength: 14}}

                  />
                  <TextField
                    fullWidth
                    label="Data de Nascimento"
                    id="dataNascimento"
                    name="dataNascimento"
                    value={formik.values.dataNascimento}
                    onChange={formik.handleChange}
                    variant='outlined'
                    type='date'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={formik.touched.dataNascimento && Boolean(formik.errors.dataNascimento)}
                    helperText={formik.touched.dataNascimento && formik.errors.dataNascimento}
                  />
                </Stack>

                <Stack
                  direction={{sm: 'column', md: 'row'}}
                  spacing={{xs: 2, sm: 2, md: 2}}
                >
                  <TextField
                    fullWidth
                    label="Telefone"
                    type="text"
                    id="telefones"
                    name="telefones.0.numero"
                    value={formik.values.telefones[0].numero}
                    onChange={formik.handleChange}
                    variant='outlined'
                  />

                  <TextField
                    fullWidth
                    label="Lattes ID"
                    name="lattes"
                    value={formik.values.lattes}
                    onChange={formik.handleChange}
                    variant='outlined'
                    error={formik.touched.lattes && Boolean(formik.errors.lattes)}
                    helperText={formik.touched.lattes && formik.errors.lattes}
                  />
                </Stack>
                <TextField
                  label="Senha"
                  type='password'
                  id="snh"
                  name="snh"
                  value={formik.values.snh}
                  onChange={formik.handleChange}
                  variant='outlined'
                  error={formik.touched.snh && Boolean(formik.errors.snh)}
                  helperText={formik.touched.snh && formik.errors.snh}
                />

                <Typography sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  fontWeight: 600,
                  fontSize: '1em'
                }}>Especialização</Typography>
                <TextField
                  fullWidth
                  label="Área de Atuação"
                  id="areaAtuacaoCientista.0.nome"
                  name="areaAtuacaoCientista.0.nome"
                  value={formik.values.areaAtuacaoCientista[0].nome}
                  onChange={formik.handleChange}
                  variant='outlined'
                />
                <TextField
                  fullWidth
                  label="Área de Atuação (opcional)"
                  id="areaAtuacaoCientista.1.nome"
                  name="areaAtuacaoCientista.1.nome"
                  value={formik.values.areaAtuacaoCientista[1].nome}
                  onChange={formik.handleChange}
                  variant='outlined'
                />
                <Stack
                  direction={{sm: 'column', md: 'row'}}
                  spacing={{xs: 2, sm: 2, md: 2}}
                >
                  <TextField
                    fullWidth
                    label="Área de Formação"
                    name="formacoes.0.nome"
                    value={formik.values.formacoes[0].nome}
                    onChange={formik.handleChange}
                    variant='outlined'
                  />
                  <TextField
                    fullWidth
                    label="Data de Inicio"
                    name="formacoes.0.dataInicio"
                    value={formik.values.formacoes[0].dataInicio}
                    onChange={formik.handleChange}
                    variant='outlined'
                    type='date'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Data de Termino"
                    name="formacoes.0.dataTermino"
                    value={formik.values.formacoes[0].dataTermino}
                    onChange={formik.handleChange}
                    variant='outlined'
                    type='date'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
                <Stack
                  direction={{sm: 'column', md: 'row'}}
                  spacing={{xs: 2, sm: 2, md: 2}}
                >
                  <TextField
                    fullWidth
                    label="Área de Formação (opcional)"
                    name="formacoes.1.nome"
                    value={formik.values.formacoes[1].nome}
                    onChange={formik.handleChange}
                    variant='outlined'
                  />
                  <TextField
                    fullWidth
                    label="Data de Inicio"
                    name="formacoes.1.dataInicio"
                    value={formik.values.formacoes[1].dataInicio}
                    onChange={formik.handleChange}
                    variant='outlined'
                    type='date'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Data de Termino"
                    name="formacoes.1.dataTermino"
                    value={formik.values.formacoes[1].dataTermino}
                    onChange={formik.handleChange}
                    variant='outlined'
                    type='date'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
                <Typography sx={{display: 'flex', justifyContent: 'start', fontWeight: 600, fontSize: '1em'}}>Redes
                  Sociais</Typography>
                <TextField
                  label="Github"
                  type="text"
                  name="redesSociais.0.endereco"
                  value={formik.values.redesSociais[0].endereco}
                  onChange={formik.handleChange}
                  variant='outlined'
                />
                <TextField
                  label="Linkedin"
                  type="text"
                  name="redesSociais.1.endereco"
                  value={formik.values.redesSociais[1].endereco}
                  onChange={formik.handleChange}
                  variant='outlined'
                />
                <Stack
                  sx={{position: 'relative', marginBottom: '10px'}}
                  direction={{sm: 'column', md: 'row'}}
                  spacing={{xs: 1, sm: 2}}
                  justifyContent="space-between"
                >
                  <Button variant="outlined"> Voltar</Button>
                  <Button type="submit" variant="contained">
                    Cadastrar
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Grid>
        </Stack>
      </Stack>
    </>
  )
    ;
}


export default Perfil