import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const Primeiro = () => {

  const logo = 'SciLink';
  

  return (
    <div>      
        <ul>
            <a href='#inicio' className='logoNav'>{logo}</a>
            <li><Link to="cadastro" className='active'>Cadastrar-se</Link></li>
            <li><Link to="entrar">Entrar</Link></li>    
        </ul>
    </div>
  )
}

export default Primeiro