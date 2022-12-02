import React from 'react'
import axios from 'axios'

const ApiUrl = "http://localhost:8081/autorizacao"

const login = (cpf, senha) => {

    return axios
        .post(ApiUrl + "/autenticar", {
            cpf,
            senha
        })
        .then((response) => {

            if (response.data.acessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem("user"))
}

const authServices = {
    login,
    logout,
    getCurrentUser,
}

export default authServices