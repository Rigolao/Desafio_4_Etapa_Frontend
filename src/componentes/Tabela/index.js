import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";
import axios from 'axios';


export default function Tabela() {

    const [projetos, setProjetos]=useState([]);

    const deletarProjeto = (id) => {
      axios
        .delete("http://localhost:8081/projetos/deletarProjeto/" + id, {
          headers: {
            Authorization: sessionStorage.getItem('user')
          }
        })
        .then(() => setProjetos(projetos.filter((projeto) => projeto.id !== id)))
    }

    useEffect(() => {
        const doFetch = async () => {
            axios
              .get("http://localhost:8081/projetos/meusProjetos", {
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


    return (
        <TableContainer component={Paper} sx = {{marginLeft: '30px', maxWidth: 800}}>
            <Table sx={{ /*minWidth: 600*/ }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Titulo</TableCell>
                        <TableCell align="right">Sobre</TableCell>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Lattes</TableCell>
                        <TableCell align="right">Data Inicio</TableCell>
                        <TableCell align="right">Data Fim</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projetos.map((projeto, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell component="th" scope="row">
                                {projeto.titulo}
                            </TableCell>
                            <TableCell align="right">{projeto.sobre}</TableCell>
                            <TableCell align="right">{projeto.nome}</TableCell>
                            <TableCell align="right">{projeto.email}</TableCell>
                            <TableCell align="right">{projeto.lattes}</TableCell>
                            <TableCell align="right">{projeto.dataInicio}</TableCell>
                            <TableCell align="right">{projeto.dataTermino}</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => deletarProjeto(projeto.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}