import { Button } from "@mui/material";
import React from "react";
import "./CardProject.css";

const CardProject = (props) => {
  return (
    <div className="card-container">
      <div className="card-top"></div>

      <div className="card-bottom">
        <h3>Matematica aplicada na medicina medicina medicina.</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. piece of classical piece of classical Contrary
          to popular belief, Lorem Ipsum is not.
        </p>
        <div className="card-info-autor">
          <a>
            <h4>João Marques</h4>
          </a>
          <span>Autor(a)</span>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
