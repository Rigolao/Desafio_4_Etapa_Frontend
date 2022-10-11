import React from 'react'
import './MoreInfos.css'
import pessoa1 from '../../../imagens/pessoa1.svg'
import teamSvg from '../../../imagens/team 1.svg'

const MoreInfos = () => {
  return (
    <div>
        <div>
            <h3 className='titulo1'>Uma mão lava a outra</h3>
            <div className='blocoInfos'>
                <img src={pessoa1} alt='vetor de pessoa' className='imagemEsquerda'/>
                <div className='descricaoDireita'>
                <h5>DESAFOGUE SUAS ATIVIDADES</h5>
                <h2>COMPARTILHE SEU PROJETO DE PESQUISA</h2>
                <p>Na SciLink você alcança seus objetivos, 
                sem perde o foco, auxiliando<br></br> você a se concentrar no cerne do projeto.
                Não fique de fora dessa<br></br> comunidade incrível.
                </p>
                </div>
            </div>
        </div>

        <div>
            <div className='blocoInfos'>
                
                <div className='descricaoEsquerda'>
                <h5>ESCOLHA SEU TIME</h5>
                <h2>NAVEGUE NOS PERFIS DOS COLABORADORES</h2>
                <p>Na plataforma você pode realizar consulta nos perfis dos colaboradores,
                entender um<br></br> pouco sobre cada um, e visualizar seus post. 
                </p>
                </div>
                <img src={teamSvg} alt='vetor de pessoa' className='imagemDireita'/>
            </div>
        </div>
    </div>
  )
}

export default MoreInfos