import React from 'react';
import { Link } from "react-router-dom";

export default function Cadastro(){
    return(
        <div>
            <h1>Faça seu Login</h1>
            <label>Email:</label>
            <input type="email" className="email" placeholder="exemplo@exemplo.com"/>

            <label>Senha:</label>
            <input type="text" className="senha" placeholder="sua senha" />
            <Link to="/Home"><input type="submit" value="login" /></Link>

        </div>

        
    )

    
}