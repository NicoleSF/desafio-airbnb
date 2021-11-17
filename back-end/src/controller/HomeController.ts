const HomeModel = require('../model/home.model');

module.exports = {
    async home(req: any, res: any){
        const{ localizacao, checkin, checkout, hospedes } = req.query;

        let dataCreate = {}

        dataCreate = {
            localizacao: localizacao,
            checkin: checkin,
            checkout: checkout,
            hospedes: hospedes,
           

        }
        const home = await HomeModel.create(dataCreate);
        res.json(home)
    },

    async homer(req:any, res: any) {
        const { localizacao, checkin, checkout, hospedes } = req.query;
        
        const busca = await HomeModel.find({localizacao: localizacao, checkin: checkin, checkout: checkout, hospedes: hospedes,})
        if(busca.length){
            res.json(busca)
        } else {
            res.status(400).send('Pacote não encontrado!');
        }
    }, 

    async endPoint(req:any, res: any) {
        const busca = await HomeModel.find()
        res.header("Access-Control-Allow-Origin", "*");
        if(busca.length){
            res.json(busca)
        } else {
            res.status(400).send('Pacote não encontrado!');
        }
    } 
}  


