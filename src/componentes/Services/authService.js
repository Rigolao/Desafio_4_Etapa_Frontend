import React from 'react'
import axios from 'axios'
import {Navigate} from "react-router-dom";

const APIUrl = "http://localhost:8081/autorizacao"
const navigate = Navigate
const login = ({cpf, senha}) => {
    return axios
        .post(APIUrl + "/autenticar", {
            cpf,
            senha
        })
        .then((response) => {
            if (response.data) {
                sessionStorage.setItem("user", response.data);
                navigate("/dashboard")
            }
            return response.data
        })
        .catch(error => {
            console.log(error.response.data.message)
        })
}

const logout = () => {
    sessionStorage.removeItem("user")
}

export {login, logout};