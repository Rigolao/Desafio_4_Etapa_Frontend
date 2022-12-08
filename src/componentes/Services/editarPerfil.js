import React from 'react'
import axios from "axios";

const getPerfil = async () => {

  await axios
    .get("http://localhost:8081/cientistas/retornaPerfil/" + sessionStorage.getItem("cpf"), {
      headers: {
        Authorization: sessionStorage.getItem('user')
      }
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

}
export {getPerfil}