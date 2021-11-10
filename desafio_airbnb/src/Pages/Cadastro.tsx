import React from 'react';
export default function Cadastro(){
    return(
        <div>
            <label>Nome:</label>
            <input type="text" className="nome" placeholder="Nome e Sobrenome"/>

            <label>Email:</label>
            <input type="email" className="email" placeholder="exemplo@exemplo.com"/>

            <label>Telefone:</label>
            <input type="phone" className="telefone" placeholder="xx-xxxxxxxx" />

            <label>Endereço:</label>
            <input type="text" className="endereço" placeholder="r. exemplo nº xx" />

        </div>

        
    )

    
}