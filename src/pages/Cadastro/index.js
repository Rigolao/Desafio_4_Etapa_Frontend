import React, { useState } from "react";
import "./Cadastro.css";
import imagem from "../../imagens/cadastro.svg";
import Center from "../../componentes/Center";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Collapse,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import axios from "axios";
import moment from "moment/moment";
import { useFormik } from "formik";
import * as Yup from 'yup';



export default function Cadastro() {

  const [erro, setErro] = useState(false);
  const [open, setOpen] = useState(false);
  const [tipoSeveridade, setTipoSeveridade] = useState("error");
  const [tipoMsg, setTipoMsg] = useState("");

  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: 'http://localhost:8081/autorizacao'
  });

  const validationSchema = Yup.object().shape({

    nome: Yup.string("Insira seu nome")
      .max(10, "Insira um nome com 50 caracteres ou menos")
      .required("É necessário preencher"),

    email: Yup.string("Insira seu email")
      .email("Insira um email válido")
      .required("Insira seu email"),

    cpf: Yup.string()
      .max(11, "Insira um CPF válido")
      .required("É necessário preencher"),

    snh: Yup.string()
      .min(2, "A senha precisa ter entre 2 e 10 caracteres")
      .max(10, "A senha precisa ter entre 2 e 10 caracteres")
      .required("É necessário preencher"),

    dataNascimento: Yup.string()
      .required("Insira uma data"),

    lattes: Yup.string()
      .max(50, "O tamanho máximo é de 50 caracteres")
      .required("É necessário preencher"),

    emailAlternativo: Yup.string("Insira seu email")
      .email("Insira um email válido")
      .required("É necessário preencher"),

  });

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
      ],
      areaAtuacaoCientista: [

      ],
      formacoes: [

      ],
      redesSociais: [

      ]
    },
    validationSchema,

    onSubmit: (values) => {

      values.dataNascimento = moment(values.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')

      instance.post("/cadastro", values)
        .then((res) => {
          console.log(res)
          navigate("/Entrar");
        })
        .catch((error) => {
          console.log(error);
          setErro(true);
          setOpen(true);
          setTipoMsg(error.response.data.message);
          setTipoSeveridade("error");
        })

    }
  })

  return (
    <main className="gridMain">
      <section className="section">
        <h1>Dados pessoais</h1>
        <h3>Preencha os campos com suas informações para criar uma conta</h3>

        <form onSubmit={formik.handleSubmit}>

          <div className="input-single">
            <TextField label="Nome"
              style={{ width: "100%" }}
              required
              type="text"
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome && formik.errors.nome}
            />
          </div>

          <div className="input-single">
            <TextField label="Email"
              style={{ width: "100%" }}
              required
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          <div className="input-single">
            <TextField
              label="CPF"
              style={{ width: "100%" }}
              required
              name="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cpf && Boolean(formik.errors.cpf)}
              helperText={formik.touched.cpf && formik.errors.cpf}
              inputProps={{ maxLength: 11 }}
            />
          </div>

          <div className="input-single">
            <TextField label="Senha"
              style={{ width: "100%" }}
              required
              name="snh"
              value={formik.values.snh}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.snh && Boolean(formik.errors.snh)}
              helperText={formik.touched.snh && formik.errors.snh}
              inputProps={{ maxLength: 10 }}
            />
          </div>

          <div className="input-duplo">
            <TextField
              required
              type="date"
              name="dataNascimento"
              value={formik.values.dataNascimento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />

            <TextField label="Lattes ID"
              required
              type="text"
              name="lattes"
              value={formik.values.lattes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lattes && Boolean(formik.errors.lattes)}
              helperText={formik.touched.lattes && formik.errors.lattes}
            />
          </div>

          <div className="input-single">
            <TextField label="E-mail alternativo"
              style={{ width: "100%" }}
              name="emailAlternativo"
              value={formik.values.emailAlternativo}
              onChange={formik.handleChange}
              lattes
              onBlur={formik.handleBlur}
              error={formik.touched.emailAlternativo && Boolean(formik.errors.emailAlternativo)}
              helperText={formik.touched.emailAlternativo && formik.errors.emailAlternativo}
            />

          </div>

          <div className="botao-row">
            <Button
              sx={{
                width: "138px",
                height: "55px",
              }}
              variant="outlined"
            onClick={()=>navigate("/")}
            >
              Voltar
            </Button>
            <Button
              sx={{
                backgroundColor: "#6C63FF",
                width: "208px",
                height: "55px",
              }}
              variant="contained"
              type="submit"
              onSubmit={() => formik}

            >
              Cadastrar
            </Button>
          </div>
        </form>
        <Stack>
          <Collapse in={open}>
            <Alert
              severity={tipoSeveridade}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onSubmit={() => {
                    setOpen(false);
                  }}
                >
                  <Close />
                </IconButton>
              }
            >
              {tipoMsg}
            </Alert>
          </Collapse>
        </Stack>
      </section>
      <aside className="aside">
        <div className="background">
          <Center>
            <img alt="decoracao" src={imagem} style={{ width: "80%", height: "auto" }} />
          </Center>
        </div>
      </aside>
    </main>
  );
}
