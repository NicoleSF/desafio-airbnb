// import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";


export default function Cadastro(){

    return(
        <form action="" method="post">
            <>
                <h1>Faça seu Cadastro</h1>
                <label>Name:</label>
                <input type="text" className="name" placeholder="Nome e Sobrenome"/>
                <label>User:</label>
                <input type="text" className="user" placeholder="exemplo@exemplo.com"/>
                <label>Telefone:</label>
                <input type="text" className="telefone" placeholder="xx-xxxxxxxx" />
                <label>Passwd:</label>
                <input type="text" className="passwd" placeholder="Abcdsf01234" />
                <Link to="/Login"><input type="submit" value="Enviar" /></Link>
                
            </>
        </form>

        
    )

    
}


