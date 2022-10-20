import React from "react";
import NavBar from "../../componentes/NavBar";
import Fundo from "../../componentes/Fundo";
import Categoria from "../../componentes/Categoria";
import MoreInfos from "../../componentes/MoreInfos";

const LandingPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Fundo></Fundo>
      <Categoria></Categoria>
      <MoreInfos></MoreInfos>
    </>
  );
};

export default LandingPage;
