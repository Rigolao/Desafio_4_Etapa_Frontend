import React from 'react'
import axios from "axios";

const deletarProjeto = (id,values) => {

  return axios
    .delete("http://localhost:8081/projetos/deletarProjeto/" +id, {values}, {
      withCredentials: true,
      headers: {
        Authorization: sessionStorage.getItem('user')
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
}
export {deletarProjeto}