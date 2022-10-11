import React from 'react'
import NavBar from '../componente/landingPaging/navBar/NavBar'
import Fundo from '../componente/landingPaging/fundo/Fundo'
import Categoria from '../componente/landingPaging/categoria/Categoria';
import MoreInfos from '../componente/landingPaging/moreInfos/MoreInfos';

const LandingPage = () => {
  return (
    <>
        <NavBar></NavBar>
        <Fundo></Fundo>
        <Categoria></Categoria>
        <MoreInfos></MoreInfos>
    </>
  )
}

export default LandingPage