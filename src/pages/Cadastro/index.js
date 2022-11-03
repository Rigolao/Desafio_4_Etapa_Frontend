import React, {useState} from "react";
import "./Cadastro.css";
import imagem from "../../imagens/cadastro.svg";
import Center from "../../componentes/Center";
import {Button, TextField} from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function Cadastro() {
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

    const  aoSalvar = (e) => {
        e.preventDefault();

        var regexText = /[^a-zà-ú]/gi; //regex de validacao de campo type text
        var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g // regex de valicao de campo type email
        console.log(regexText.test(form.nome) || form.nome.length<2)
        if(regexText.test(form.nome) || form.nome.length<2 || !form.nome){
            setError({nome: true});
        }
        console.log({...error, nome: true})

        console.log(!regexEmail.test(form.email))
        if(!regexEmail.test(form.email)){ //se nao for um email valido
            setError({...error, email: true})
        }
        console.log({...error, email: true})
        if(form.email != form.confirmarEmail){
            setError({...error, confirmarEmail: true})
        }
        console.log(!form.cpf)
        if(!form.cpf || form.cpf.length == 14) {
            setError({...error, cpf: true})
        }
        console.log(form.senha != form.confirmarSenha)
        if(form.senha != form.confirmarSenha){
            setError({...error, confirmarSenha: true})
        }
        console.log(form)



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
                    <TextField
                        fullWidth
                        label="Nome"
                        value={form.nome}
                        onChange={(e) => setForm({nome: e.target.value})}
                        variant='filled'
                        error={error.nome}
                        helperText={ error.nome ? "Tente": ""}
                    />
                    <TextField
                        label="Sobrenome"
                        value={form.sobrenome}
                        onChange={(e) => setForm({...form, sobrenome: e.target.value})}
                        variant='filled'
                        error={error.sobrenome}
                    />
                    <TextField
                        label="E-mail"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        variant='filled'
                        error={error.email}
                    />
                    <TextField
                        label="Confirmar e-mail"
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
                    />
                    <TextField
                        label="Senha"
                        value={form.senha}
                        onChange={(e) => setForm({...form, senha: e.target.value})}
                        variant='filled'
                        error={error.senha}
                    />
                    <TextField
                        label="Confirmar senha"
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
                    <Button type="submit">Enviar</Button>
                </form>
            </section>
            <aside className="aside">
                <div className="background">
                    <Center>
                        <img src={imagem} style={{width: "80%", height: "auto"}}/>
                    </Center>
                </div>
            </aside>
        </main>
    );
}
