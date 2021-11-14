const express = require('express')
const mongoose = require('mongoose')
const path = require('path') // backend com nodeJs e MongoDb Parte 3 (5:00)
import cors from 'cors';

const routes = require('./src/Routes/routes')

const app = express();

console.log('Conectando no Mongo')
mongoose.connect('mongodb://projetoMongo:dbserver@cluster0-shard-00-00.a1fww.mongodb.net:27017,cluster0-shard-00-01.a1fww.mongodb.net:27017,cluster0-shard-00-02.a1fww.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-p1jav0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err: any) {
    if(err) {
        console.log(err)
    } else {
        console.log('Mongo Db Conectado!')
    }
})

app.set('port', 8080);
app.use(cors());
app.use(express.json());
app.use(routes); 
export default app;