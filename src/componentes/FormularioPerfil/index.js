import React, {useEffect} from 'react';
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import {getPerfil} from "../Services/editarPerfil";

const validationSchema = yup.object({
  cpf: yup.string().required("Esse campo é obrigatório").min(11, "CPF inválido"),
  senha: yup.string().required("Esse campo é obrigatório")
})

const FormularioPerfil = (props) => {

  const formik = useFormik({
    initialValues: {
      nome: (props.nome),
      cpf: (props.cpf),
      dataNascimento:  moment((props.dataNascimento),"DD/MM/YYYY").format("YYYY-MM-DD"),
      email: (props.email),
      emailAlternativo: (props.emailAlternativo),
      lattes: (props.lattes),
      snh: (props.senha),
      telefones: [
        {
          ddd: (props.ddd),
          numero: (props.numero)
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
    validationSchema: validationSchema,
    onSubmit: (values) => (
      console.log(values)
    ),
  })
  const { response, error, loading, fetchData } = useFetch(
    {
      method: "GET",
      url: "http://localhost:8080/cientistas/retornaPerfil/" + sessionStorage.getItem("cpf"),
      headers: {
        Authorization: sessionStorage.getItem('user'),
      },
    },
    true
  );

  useEffect(() => {
    getPerfil()
      .then((res) => {
        formik.setFieldValue("idCientista", res.data.idCientista.toString(), false);
        formik.setFieldValue("cpf", res.data.cpf, false);
        formik.setFieldValue("lattes", res.data.lattes, false);
        formik.setFieldValue("email", res.data.email, false);
        formik.setFieldValue(
          "emailAlternativo",
          res.data.emailAlternativo,
          false
        );
        formik.setFieldValue(
          "telefones.0",
          {
            ddd: res.data.telefones[0].ddd,
            numero: res.data.telefones[0].numero,
          },
          false
        );
        formik.setFieldValue("senha", res.data.senha, false);
        formik.setFieldValue("nome", res.data.nome, false);
        formik.setFieldValue(
          "dataNascimento",
          moment(res.data.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD"),
          false
        );
        formik.setFieldValue(
          "areasAtuacao",
          res.data.areasAtuacao.map((v) => (v = { nome: v.nome })),
          false
        );
        formik.setFieldValue(
          "formacoes",
          res.data.formacoes.map(
            (v) =>
              (v = {
                nome: v.nome,
                dataInicio: v.dataInicio,
                dataTermino: v.dataTermino,
              })
          ),
          false
        );
        if (res.data.redesSociais[0] != null)
          formik.setFieldValue(
            "redesSociais.0",
            {
              tipo: res.data.redesSociais[0].tipo,
              endereco: res.data.redesSociais[0].endereco,
            },
            false
          );
        if (res.data.redesSociais[1] != null)
          formik.setFieldValue(
            "redesSociais.1",
            {
              tipo: res.data.redesSociais[1].tipo,
              endereco: res.data.redesSociais[1].endereco,
            },
            false
          );
        if (res.data.redesSociais[2] != null)
          formik.setFieldValue(
            "redesSociais.2",
            {
              tipo: res.data.redesSociais[2].tipo,
              endereco: res.data.redesSociais[2].endereco,
            },
            false
          );
        if (res.data.redesSociais[3] != null)
          formik.setFieldValue(
            "redesSociais.3",
            {
              tipo: res.data.redesSociais[3].tipo,
              endereco: res.data.redesSociais[3].endereco,
            },            false
          );
        if (res.data.redesSociais[4] != null)
          formik.setFieldValue(
            "redesSociais.4",
            {
              tipo: res.data.redesSociais[4].tipo,
              endereco: res.data.redesSociais[4].endereco,
            },
            false
          );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return(
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
          sx={{ marginTop: '40px'}}
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
  )
}
export default FormularioPerfil;