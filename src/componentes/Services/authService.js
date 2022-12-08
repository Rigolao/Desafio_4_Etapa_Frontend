import React, {useCallback} from 'react'
import axios from 'axios'

const APIUrl = "http://localhost:8081/autorizacao"

const login = ({cpf, senha}, callBack) => {
  return axios
    .post(APIUrl + "/autenticar", {
      cpf,
      senha
    })
    .then((response) => {
      sessionStorage.setItem("user", response.data);
      sessionStorage.setItem("cpf", cpf)
      callBack()

    })
    .catch(error => {
      console.log(error.response.status)
    })
}

const logout = () => {
  sessionStorage.removeItem("user")
  sessionStorage.removeItem("cpf")
}

export {login, logout};