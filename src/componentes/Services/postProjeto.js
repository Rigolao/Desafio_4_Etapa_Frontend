import React from 'react'
import axios from "axios";

const postProjeto = (values) => {

  return axios
    .post("http://localhost:8081/projetos/cadastrarProjeto", values, {
      withCredentials: true,
      headers: {
        Authorization: sessionStorage.getItem('user')
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
}

export {postProjeto}