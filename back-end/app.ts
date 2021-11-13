const express = require('express')
const mongoose = require('mongoose')
const path = require('path') // backend com nodeJs e MongoDb Parte 3 (5:00)
import cors from 'cors';
import { Mongoose } from 'mongoose';

const routes = require('./src/Routes/routes')



const app = express();
app.set('port', 8080);
app.use(cors());
app.use(express.json());
app.use(routes); 
export default app;