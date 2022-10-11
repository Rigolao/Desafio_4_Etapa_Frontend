import React from "react";
import "../styles/Perfil.css";
import Cartao from "../componente/Cartao.js";

export default () => {
  return (
    <div>
      <header className="Header">
        <h1>SciLink</h1>
        <div className="Opcao">
          <div className="foto">J</div>
          <span>João</span>
        </div>
      </header>
      <div className="SubHeader">
        <h2>Perfil de João Marques Oliveira</h2>
      </div>
      <Cartao />
    </div>
  );
};
