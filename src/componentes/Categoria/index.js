import React from "react";
import "./Categoria.css";
import logoFisica from "../../imagens/logo_fisica.svg";
import logoMatematica from "../../imagens/logo_matematica.svg";
import logoQuimica from "../../imagens/logo_quimic.svg";
import logoIA from "../../imagens/logo_IA.svg";
import logoPortugues from "../../imagens/logo_portugues.svg";
import logoEconomia from "../../imagens/logo_economia.svg";

const Categorias = () => {
  return (
    <div className="categoriasFundo">
      <ul className="categoriasPassagem">
        <div>
          <img src={logoFisica} alt="logo de âtomos" />
          <li>Física</li>
        </div>
        <div>
          <img src={logoMatematica} alt="logo de âtomos" />
          <li>Matemática</li>
        </div>
        <div>
          <img src={logoQuimica} alt="logo de âtomos" />
          <li>Química</li>
        </div>
        <img src={logoIA} alt="logo de âtomos" />
        <li>Inteligencia Artificial</li>
        <img src={logoPortugues} alt="logo de âtomos" />
        <li>Português</li>
        <img src={logoEconomia} alt="logo de âtomos" />
        <li>Econômia</li>
      </ul>
    </div>
  );
};

export default Categorias;
