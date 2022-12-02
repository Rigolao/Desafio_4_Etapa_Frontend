import axios from "axios"
import authHeader from "./authHeader"

const ApiUrl = "http://localhost:8081/projetos";

const getAllProjets = () => {
    return axios.get(ApiUrl + "/todosProjetos")
}

const getMyProjets = () => {
    return axios.get(ApiUrl + "/meusProjetos", {headers: authHeader()})
}

const postService ={
    getAllProjets,
    getMyProjets,
}

export default postService;