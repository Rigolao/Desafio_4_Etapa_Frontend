import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";

export default (props) => {
    const navigate = useNavigate()

    useEffect( () => {
        console.log(sessionStorage.getItem("user"))
        if(sessionStorage.getItem("user") == null){
            navigate("/entrar")
        }
    }, [])
    return (
        props.children
    )
}
