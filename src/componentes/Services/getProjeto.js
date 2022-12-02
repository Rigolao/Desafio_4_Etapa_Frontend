import React from 'react'
import axios from "axios";

const getProjeto = (values) => {

  return axios
    .get("http://localhost:8081/projetos/meusProjetos", {
      headers: {
        Authorization: sessionStorage.getItem('user')
      }
    })
      .then((response) => setProjetos(response.data))
      .catch((error) => console.log(error));

}
export {getProjeto}