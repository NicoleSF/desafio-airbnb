// import { Schema, model } from 'mongoose';
// const mongoose = require('mongoose')

// export interface Cadastro {
//     name: string;
//     user: string;
//     telefone: number;
//     passwd: string

// }

// export const CadastroSchema = new Schema<Cadastro>({
//     name: {type: String, required: true, minlength: 1, maxlength: 50},
//     user: {type: String, required: true, minlength: 1, maxlength: 50},
//     telefone: {type: Number, required: true, min: 0, maxlength: 20},
//     passwd: {type: String, required: true, minlength: 0, maxlength: 20}
// });

// export const CadastroModel = mongoose.model('Cadastro', CadastroSchema)
// module.exports = CadastroModel