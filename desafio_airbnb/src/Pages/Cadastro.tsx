import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";
import { Schema, model } from 'mongoose'

export interface Cadastro {
    nome: string;
    email: string;
    telefone: number;
    endereco: string;

}

export const CadastroSchema = new Schema<Cadastro>({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    telefone: {type: Number, required: true, min: 0},
    email: String
});

export const CadastroModel = model<Cadastro>(Cadastro, CadastroSchema, 'cadastros')

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


