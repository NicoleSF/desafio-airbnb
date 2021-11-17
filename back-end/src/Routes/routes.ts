let express = require("express");
let app = express();

const CadastroController = require('../controller/UsuarioController')
const HomeController = require('../controller/HomeController')

app.get('/', function(req: any, res: any){
    res.send('Bem vindo a api!'); 
});

app.post('/cadastro', CadastroController.cadastro);

app.post('/login', CadastroController.login);

app.post('/home', HomeController.home);

app.post('/busca', HomeController.homer);

app.get('/busca', HomeController.endPoint);


app.listen(8080);

module.exports = app;