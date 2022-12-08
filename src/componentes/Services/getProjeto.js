import React from 'react'
import axios from "axios";

const getProjeto = async () => {

  await axios
    .get("http://localhost:8081/projetos/meusProjetos", {
      headers: {
        Authorization: sessionStorage.getItem('user')
      }
    })
      .then()
      .catch((error) => console.log(error));

}
export {getProjeto}