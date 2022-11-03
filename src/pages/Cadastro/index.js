import React, {useEffect, useState} from "react";
import "./Cadastro.css";
import imagem from "../../imagens/cadastro.svg";
import Center from "../../componentes/Center";
import {Box, Button, CircularProgress, Stack, TextField} from "@mui/material";
import ButtonLoading from "../../componentes/ButtonLoading";


export default function Cadastro() {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(
        {
            nome: '',
            sobrenome: '',
            email: '',
            confirmarEmail: '',
            cpf: '',
            senha: '',
            confirmarSenha: '',
            dataNascimento: ''
        });

    const [error, setError] = useState(
        {
            nome: false,
            sobrenome: false,
            email: false,
            confirmarEmail: false,
            cpf: false,
            senha: false,
            confirmarSenha: false,
            dataNascimento: false
        }
    );

    useEffect(() => {
        console.log(error)
    }, [error])

    const aoSalvar = (e) => {
        e.preventDefault();

        var regexText = /[^a-zà-ú]/gi; //regex de validacao de campo type text
        var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g // regex de valicao de campo type email


        if (regexText.test(form.nome) || form.nome.length < 2 || !form.nome) {
            console.log("error nome: " + error.nome)
            setError((prevState) => ({...prevState, nome: true}));
        }
        if (!regexEmail.test(form.email)) { //se nao for um email valido
            setError((prevState) => ({...prevState, email: true}));
            console.log(error)
        }
        if (form.email !== form.confirmarEmail) {
            setError((prevState) => ({...prevState, confirmarEmail: true}));
        }
        if (form.senha !== form.confirmarSenha) {
            setError((prevState) => ({...prevState, confirmarSenha: true}));
        }

        setForm({
            nome: '',
            sobrenome: '',
            email: '',
            confirmarEmail: '',
            cpf: '',
            senha: '',
            confirmarSenha: '',
            dataNascimento: ''
        })
    }

    return (
        <main className="cadastro-container">
            <section>
                <h1>Dados pessoais</h1>
                <h3>Preencha os campos do(a) aluno(a) que irá usar a plataforma</h3>
                <form onSubmit={aoSalvar}>
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
                                type="text"
                                value={form.nome}
                                onChange={(e) => setForm({...form, nome: e.target.value})}
                                variant='filled'
                                error={error.nome}
                                helperText={error.nome ? "Psiu, insira um nome válido" : ""}
                            />
                            <TextField
                                fullWidth
                                label="Sobrenome"
                                type="text"
                                value={form.sobrenome}
                                onChange={(e) => setForm({...form, sobrenome: e.target.value})}
                                variant='filled'
                                error={error.sobrenome}
                            />
                        </Stack>
                        <TextField
                            label="E-mail"
                            type="text"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            variant='filled'
                            error={error.email}
                        />
                        <TextField
                            label="Confirmar e-mail"
                            type="text"
                            value={form.confirmarEmail}
                            onChange={(e) => setForm({...form, confirmarEmail: e.target.value})}
                            variant='filled'
                            error={error.confirmarEmail}
                        />
                        <TextField
                            label="CPF"
                            value={form.cpf}
                            onChange={(e) => setForm({...form, cpf: e.target.value})}
                            variant='filled'
                            error={error.cpf}
                            inputProps={{ maxLength: 14 }}

                        />
                        <TextField
                            label="Senha"
                            type='password'
                            value={form.senha}
                            onChange={(e) => setForm({...form, senha: e.target.value})}
                            variant='filled'
                            error={error.senha}
                        />
                        <TextField
                            label="Confirmar senha"
                            type='password'
                            value={form.confirmarSenha}
                            onChange={(e) => setForm({...form, confirmarSenha: e.target.value})}
                            variant='filled'
                            error={error.confirmarSenha}
                        />
                        <TextField
                            label="Data de Nascimento"
                            value={form.dataNascimento}
                            onChange={(e) => setForm({...form, dataNascimento: e.target.value})}
                            variant='filled'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={error.dataNascimento}
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
