// import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";


export default function Cadastro(){

    return(
        <form action="">
            <>
                <h1>Faça seu Cadastro</h1>
                <label>Nome:</label>
                <input type="text" className="nome" placeholder="Nome e Sobrenome"/>
                <label>Email:</label>
                <input type="email" className="email" placeholder="exemplo@exemplo.com"/>
                <label>Telefone:</label>
                <input type="phone" className="telefone" placeholder="xx-xxxxxxxx" />
                <label>Endereço:</label>
                <input type="text" className="endereco" placeholder="r. exemplo nº xx" />
                <button> Entra </button>
                <label>senha:</label>
                <input type="text" className="senha" placeholder="Abcdsf01234" />
                <Link to="/Login"><input type="submit" value="Enviar" /></Link>
                
            </>
        </form>

        
    )

    
}


