import React, {useState} from "react";
import "./Cadastro.css";
import imagem from "../../imagens/cadastro.svg";
import Center from "../../componentes/Center";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import ButtonLoading from "../../componentes/ButtonLoading";
import * as yup from "yup";
import {useFormik} from "formik";
import axios from "axios";
import moment from "moment";


const validationSchema = yup.object({
  nome: yup.string().required("Esse campo é obrigatório").min(2, "Nome inválido"),
  email: yup.string().required("Esse campo é obrigatório"),
  emailAlternativo: yup.string().required("Esse campo é obrigatório"),
  cpf: yup.string().min(11, "CPF inválido"),
  snh: yup.string().required("Esse campo é obrigatório"),
})

export default function Cadastro() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      nome: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      emailAlternativo: '',
      lattes: '',
      snh: '',
      telefones: [
        {
          ddd: "16",
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
          tipoRede: "G"
        },
        {
          endereco: "",
          tipoRede: "L"
        }
      ]
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values.dataNascimento = moment(values.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.formacoes[0].dataInicio = moment(values.formacoes[0].dataInicio, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.formacoes[1].dataInicio = moment(values.formacoes[0].dataInicio, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.formacoes[0].dataTermino = moment(values.formacoes[0].dataTermino, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.formacoes[1].dataTermino = moment(values.formacoes[0].dataTermino, 'YYYY-MM-DD').format('DD/MM/YYYY')


      await axios.post("http://localhost:8081/autorizacao/cadastro",
        values
      ).then(res => console.log("deu certo")).catch(err => console.log(err))
    },

  })

  return (
    <main className="cadastro-container">
      <section>
        <h1>Dados pessoais</h1>
        <h3>Preencha os campos do(a) cientista que irá usar a plataforma</h3>
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

            <Typography sx={{display: 'flex', justifyContent:'start', fontWeight: 600, fontSize: '1em'}}>Especialização</Typography>
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
              sx={{position: 'relative'}}
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
      </section>
      <Box className="aside" display={{xs: 'none', sm: 'none', md: 'block'}}>
        <div className="background">
          <Center>
            <img src={imagem} style={{width: "80%", height: "auto"}}
                 alt="Ilustração de um personagem caminhando"/>
          </Center>
        </div>
      </Box>
    </main>
  );
}
