const CadastroModel = require('../model/cadastro.model')


module.exports = {    
    async cadastro(req:any, res: any) {
        const { name, user, telefone, passwd } = req.query;
        
        let dataCreate = {}
    
        dataCreate = {
            name: name, 
            user: user, 
            telefone: telefone, 
            passwd: passwd
        }
        const cadastro = await CadastroModel.create(dataCreate);
        res.json(cadastro)
    },

    async login(req:any, res: any) {
        const { user, passwd } = req.query;
        
        const usuario = await CadastroModel.find({user: user, passwd: passwd})
        if(usuario.length > 0){
            res.json(usuario)
        } else {
            res.status(500).send('Usuário não encontrado!');
        }
    }
}     