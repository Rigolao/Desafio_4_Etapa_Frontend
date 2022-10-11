import React from 'react';
import "./Tela.css";
import {Button, TextField} from "@mui/material";
import SvgCadastro from "../imagens/cadastro.svg"

export default function Cadastro() {
    return (
        <main className="gridMain">
            <section className="section">
                <h1>Dados pessoais</h1>
                <h3>Preencha os campos do(a) aluno(a) que irá usar a plataforma</h3>
                <form className="formulario">
                    <div className="input-duplo">
                        <TextField label="Nome" required/>
                        <TextField label="Sobrenome" required/>
                    </div>
                    <div className="input-single">
                        <TextField label="Email" style={{width: "100%"}} required/>
                    </div>
                    <div className="input-single">
                        <TextField label="Confirmar email" style={{width: "100%"}} required/>
                    </div>
                    <div className="input-single">
                        <TextField label="CPF" style={{width: "100%"}} required/>
                    </div>
                    <div className="input-single">
                        <TextField label="Senha" style={{width: "100%"}} required/>
                    </div>
                    <div className="input-single">
                        <TextField label="Confirmar senha" style={{width: "100%"}} required/>
                    </div>
                    <div className="input-duplo">
                        <TextField label="Data de nascimento" required/>
                        <TextField label="Lattes ID" required/>
                    </div>
                    <div className="input-single">
                        <TextField label="E-mail alternativo" style={{width: "100%"}}/>
                    </div>
                    <div className="botao-row">
                        <Button sx={{
                            width: "138px",
                            height: "55px"
                        }}
                                variant="outlined">Voltar</Button>
                        <Button sx={{
                            backgroundColor: "#6C63FF",
                            width: "208px",
                            height: "55px"
                        }}
                                variant="contained">Entrar</Button>
                    </div>

                </form>
            </section>
            <aside className="aside">
                <div className="background">
                    <img src={SvgCadastro}/>
                </div>
            </aside>
        </main>
    );
}