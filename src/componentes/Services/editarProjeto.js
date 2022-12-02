import React from 'react'
import axios from "axios";

const editarProjeto = (id,values) => {

  return axios
    .put("http://localhost:8081/projetos/editarProjeto/" +id, {values}, {
      withCredentials: true,
      headers: {
        Authorization: sessionStorage.getItem('user')
      },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
}
export {editarProjeto}