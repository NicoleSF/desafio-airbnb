let express = require("express");
let app = express();

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

app.post('/login', function(req: any, res: any){
    res.send({
        user: req.query.user,
        passwd: req.query.passwd,
    }); 
});

app.post('/cadastro', function(req: any, res: any){
    res.send({
        name: req.query.name,
        user: req.query.user,
        telefone: req.query.telefone,
        passwd: req.query.passwd,
    }); 
});

app.listen(8080);

module.exports = app;