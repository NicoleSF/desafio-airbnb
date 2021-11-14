let express = require("express");
let app = express();

const CadastroController = require('../controller/UsuarioController')

app.get('/', function(req: any, res: any){
    res.send('Bem vindo a api!'); 
});

app.post('/home', function(req: any, res: any){
    res.send({
        localizacao: req.query.localizacao,
        checkin: req.query.checkin,
        checkout: req.query.checkout,
        hospede: req.query.hospede
    }); 
});

app.post('/cadastro', CadastroController.cadastro);

app.post('/login', CadastroController.login);

app.listen(8080);

module.exports = app;