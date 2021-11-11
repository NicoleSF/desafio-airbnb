import { Schema, model } from 'mongoose'

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