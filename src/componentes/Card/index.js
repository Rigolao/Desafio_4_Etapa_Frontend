import { Button } from "@mui/material";
import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-bg"></div>
        <div className="card-conteudo">
          <div className="card-avatar">
            <img src="https://github.com/JoaaoM.png" />
          </div>
          <h4>Matemática Aplicada</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Button variant="contained">Ler Mais</Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
