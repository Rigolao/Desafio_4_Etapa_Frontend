import { Button } from "@mui/material";
import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <div className="card-imagem-bg">
          <img src="https://github.com/JoaaoM.png" />
        </div>
      </div>

      <div className="card-bottom">
        <h3>João Marques</h3>
        <div className="card-info-container">
          <div className="card-info">
            <h4>Desenvolvedor</h4>
            <span>Area Atuação</span>
          </div>
          <div className="card-info">
            <h4>Desenvolvedor</h4>
            <span>Area Formação</span>
          </div>
        </div>
        <p>
          Minhas habilidades são em front end, trabalhando com frameworks como
          React, PrimeFaces
        </p>
        <Button variant="outlined">Perfil</Button>
      </div>
    </div>
  );
};
export default Card;
