import React from "react";
import "./Fundo.css";
import imgInicial1 from "../../imagens/community 1.svg";

const Fundo = () => {
  const mensagemInicio = "Venha colaborar com novas pesquisas,";

  return (
    <div className="corFundo">
      <div className="containerMensagens">
        <div>
          <div className="msgInicio">
            {mensagemInicio}
            <br></br>dê um
            <span>
              <i> Match</i>
            </span>
          </div>
          <div className="msgInicio2">
            SciLink é uma plataforma de apoio à atividade científica e
            tecnológica que tem como objetivo produzir ciência.
          </div>
          <div className="campoEbotao">
            <input
              className="inserirEmail"
              type="text"
              id="email"
              placeholder="Insira seu CPF"
            ></input>
            <button className="botaoCriar" href="#cadastrar" type="submit">
              Crie uma conta
            </button>
          </div>
        </div>

        <img src={imgInicial1} alt="Vetores de pessoas" class="imagemInicial" />
      </div>
    </div>
  );
};

export default Fundo;
