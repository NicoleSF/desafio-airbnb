import { Schema, model } from 'mongoose';
import internal from 'stream';
const mongoose = require('mongoose')

export interface Home {

    
    localizacao: string;
    checkin: string;
    checkout: string;
    hospedes: string
    
}

export const HomeSchema = new Schema<Home>({
    
    localizacao: {type: String, required: true, minlength: 1, maxlength: 100},
    checkin: {type: String, required: true},
    checkout: {type: String, required: true},
    hospedes: {type: String, required: true, minlength: 1, maxlength: 25 }
    
    
});

export const HomeModel = mongoose.model('Home', HomeSchema);
module.exports = HomeModel;
