import React, {useState} from "react";
import "./Cadastro.css";
import imagem from "../../imagens/cadastro.svg";
import Center from "../../componentes/Center";
import {Box, Button, Stack, TextField} from "@mui/material";
import ButtonLoading from "../../componentes/ButtonLoading";
import * as yup from "yup";
import {useFormik} from "formik";
import axios from "axios";


const validationSchema = yup.object({
    nome: yup.string().required("Esse campo é obrigatório").min(2, "Nome inválido"),
    sobrenome: yup.string().required("Esse campo é obrigatório").min(2, "Sobrenome inválido"),
    email: yup.string().required("Esse campo é obrigatório"),
    confirmarEmail: yup.string().required("Esse campo é obrigatório"),
    cpf: yup.string().min(14, "CPF inválido"),
    senha: yup.string().required() ,
    confirmarSenha: yup.string().required(),
    dataNascimento: yup.date()
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
                    ddd: '',
                    numero: ''
                }
            ],
            areaAtuacaoCientista: [
                {
                    nome: '',
                }
            ],
            formacoes: [
                {
                    nome: '',
                    dataInicio: '',
                    dataTermino: ''
                }
            ],
            redesSociais: [
                {
                    endereco: '',
                    tipoRede: ''
                }
            ]
        },
        onSubmit: (values)=>(
            axios.post("http://localhost:8081/autorizacao/cadastro", {
                values
            }).then(res => console.log("deu certo")).catch(err=> console.log(err))
        ),
        validationSchema: validationSchema
    })

    return (
        <main className="cadastro-container">
            <section>
                <h1>Dados pessoais</h1>
                <h3>Preencha os campos do(a) aluno(a) que irá usar a plataforma</h3>
                <form onSubmit={formik.handleSubmit}>
                    <Stack
                        spacing={2}
                    >
                        <Stack
                            direction={{sm: 'column', md: 'row'}}
                            spacing={{xs: 2, sm: 2, md: 2}}
                        >
                            <TextField
                                fullWidth
                                label="Nome"
                                id="nome"
                                name="nome"
                                type="text"
                                value={formik.values.nome}
                                onChange={formik.handleChange}
                                variant='filled'
                                error={formik.touched.nome && Boolean(formik.errors.nome)}
                                helperText={formik.touched.nome && formik.errors.nome}
                            />
                            <TextField
                                fullWidth
                                label="Sobrenome"
                                id="sobrenome"
                                name="sobrenome"
                                type="text"
                                value={formik.values.sobrenome}
                                onChange={formik.handleChange}
                                variant='filled'
                                error={formik.touched.sobrenome && Boolean(formik.errors.sobrenome)}
                                helperText={formik.touched.sobrenome && formik.errors.sobrenome}
                            />
                        </Stack>
                        <TextField
                            label="E-mail"
                            type="text"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            variant='filled'
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            label="Confirmar e-mail"
                            type="text"
                            id="confirmarEmail"
                            name="confirmarEmail"
                            value={formik.values.confirmarEmail}
                            onChange={formik.handleChange}
                            variant='filled'
                            error={formik.touched.confirmarEmail && Boolean(formik.errors.confirmarEmail)}
                            helperText={formik.touched.confirmarEmail && formik.errors.confirmarEmail}
                        />
                        <TextField
                            label="CPF"
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            variant='filled'
                            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                            helperText={formik.touched.cpf && formik.errors.cpf}
                            inputProps={{ maxLength: 14 }}

                        />
                        <TextField
                            label="Senha"
                            type='password'
                            id="senha"
                            name="senha"
                            value={formik.values.senha}
                            onChange={formik.handleChange}
                            variant='filled'
                            error={formik.touched.senha && Boolean(formik.errors.senha)}
                            helperText={formik.touched.senha && formik.errors.senha}
                        />
                        <TextField
                            label="Confirmar senha"
                            type='password'
                            id="confirmarSenha"
                            name="confirmarSenha"
                            value={formik.values.confirmarSenha}
                            onChange={formik.handleChange}
                            variant='filled'
                            error={formik.touched.confirmarSenha && Boolean(formik.errors.confirmarSenha)}
                            helperText={formik.touched.confirmarSenha && formik.errors.confirmarSenha}
                        />
                        <TextField
                            label="Data de Nascimento"
                            id="dataNascimento"
                            name="dataNascimento"
                            value={formik.values.confirmarSenha}
                            onChange={formik.handleChange}
                            variant='filled'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={formik.touched.dataNascimento && Boolean(formik.errors.dataNascimento)}
                            helperText={formik.touched.dataNascimento && formik.errors.dataNascimento}
                        />
                        <Stack
                            sx={{position: 'relative'}}
                            direction={{sm: 'column', md: 'row'}}
                            spacing={{xs: 1, sm: 2}}
                            justifyContent="space-between"
                        >
                            <Button variant="outlined"> Voltar</Button>
                            <ButtonLoading type='submit' variant='contained' label="Cadastro" loading={loading}/>
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
