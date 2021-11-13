import { Schema, model } from 'mongoose';

export interface Login {
    nome: string;
    senha: string

}

export const LoginSchema = new Schema<Login>({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    senha: {type: String, required: true, minlength: 7, maxlength: 8}
});

export const LoginModel = model<Login>('Login', LoginSchema, 'logins')

export interface Cadastro {
    nome: string;
    email: string;
    telefone: number;
    endereco: string;
    senha: string

}

export const CadastroSchema = new Schema<Cadastro>({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    email: String,
    telefone: {type: Number, required: true, min: 0},
    endereco: {type: String, required: true, minlength: 1, maxlength: 50},
    senha: {type: String, required: true, minlength: 7, maxlength: 8}
});

export const CadastroModel = model<Cadastro>('Cadastro', CadastroSchema, 'cadastros')

export interface Hospedagem{
    nome: string;
    resumo: string;
    caracteristica: string;
}

export const HospedagemSchema = new Schema<Hospedagem>({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    resumo: {type: String, required: true, minlength: 10, maxlength: 300},
    caracteristica: {type: String,  required: true, minlength: 10, maxlength: 300}
});

export const HospedagemModel = model<Hospedagem>('Hospedagem', HospedagemSchema, 'hospedagens');