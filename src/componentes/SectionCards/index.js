import React from "react";
import CardProject from "../CardProject";
import "./SectionCards.css";

const SectionCards = () => {
    const pesquisas = [{
        id: 1,
        titulo: "Matematica Discreta",
        conteudo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration" +
                   "in some form, by injected humour, or randomised words which don't look even slightly believable ",
        autor: "João Marques"
    },
        {
            id: 2,
            titulo: "Sistemas Embarcados",
            conteudo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration" +
                "in some form, by injected humour, or randomised words which don't look even slightly believable ",
            autor: "Nelson"
        },
        {
            id: 3,
            titulo: "Banco de Dados e IA",
            conteudo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration" +
                "in some form, by injected humour, or randomised words which don't look even slightly believable ",
            autor: "Edilson Carita"
        },]
  return (
    <section className="section-container">
            { pesquisas.map((pesquisa) => <CardProject key={pesquisa.id} titulo={pesquisa.titulo}
                                                           conteudo={pesquisa.conteudo}
                                                           autor={pesquisa.autor}/>)}
    </section>
  );
};

export default SectionCards;
