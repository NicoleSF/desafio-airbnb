import { connect, disconnect } from 'mongoose';
//import { MongoClient } from 'mongodb';
import { Cadastro } from './mongo';
import { CadastroModel } from './mongo';


//const uri='mongodb+srv://ProjetoDB:Dbserver@cluster0.tqbkf.mongodb.net/ProjetoDB?retryWrites=true&w=majority';
const uri = 'mongodb+srv://projetoMongo:dbserver@cluster0.a1fww.mongodb.net/projetoMongo?retryWrites=true&w=majority';
const urilocal = 'mongodb://localhost:27017';
//const conectCadastro = new MongoClient (uri);


async function main() {
    try {
        await connect(uri);
        //await conectCadastro.connect();
        console.log('Conectado ao MongoDb Atlas');

        /*const basededados = conectCadastro.db('meudb');
        const colecao = basededados.collection<Cadastro>('cadastro');

        const cadastro:Cadastro =  {
            nome: 'Maria',
            email: 'maria@mail.com',
            telefone: 999999999,
            endereco: 'Rua Maria 55',
            senha: '12344'
        
        }

        const resultado = await colecao.insertOne(cadastro);
        console.log(`Inserido: ${resultado.insertedId}`);*/

        
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
            await disconnect();
            //await conectCadastro.close();
        
        }
}

main()