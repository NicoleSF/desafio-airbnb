//import { connect, disconnect } from 'mongoose';
import { MongoClient } from 'mongodb';
//import { PessoaModel } from './mongo';

//const uri='mongodb+srv://ProjetoDB:Dbserver@cluster0.tqbkf.mongodb.net/ProjetoDB?retryWrites=true&w=majority';
const uri = 'mongodb+srv://projetoMongo:dbserver@cluster0.a1fww.mongodb.net/projetoMongo?retryWrites=true&w=majority';
const conectCadastro = new MongoClient (uri);




async function main() {
    try {
        //await connect(uri);
        await conectCadastro.connect();
        console.log('Conectado ao MongoDb Atlas');

        

         /*const documentoInserido = await CadastroModel.create({
             nome: 'John Doe',
             idade: 25,
             email: 'jd@gmail.com'
         });
        

         const basededados = conectCadastro.db('Projetobd');
         const colecao = basededados.collection<Cadastro>('cadastros');*/
    }
        catch (error) {
            console.log('Falha de acesso ao BD:');
            console.error(error);
            
        } finally {
            //await disconnect();
            await conectCadastro.close();
        }
}

main()