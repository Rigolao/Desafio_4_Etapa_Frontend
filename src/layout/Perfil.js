import React from 'react';
import "../styles/Perfil.css"

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
        </div>
    );
}