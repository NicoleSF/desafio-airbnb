import { connect, disconnect } from 'mongoose';
//import { MongoClient } from 'mongodb';
import { Cadastro } from './mongo';
import { CadastroModel } from './mongo';
import { HospedagemModel } from './mongo';


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

        
 /* const documentoInserido = await CadastroModel.create({
             nome: 'John Doe',
             email: 'jd@gmail.com', 
             telefone: 99999999,
             endereco: 'Rua John 55',
             senha: 'dbserver'
         });
         console.log('Inserido: ');
         console.log(documentoInserido);*/

         await HospedagemModel.create({
             nome: 'Casa da Colina',
             resumo: 'Uma casa linda e aconchegante localizada nas colinas da serra gaúcha. Ambiente calmo e tranquilo, sons de pássaros e natureza',
             caracteristica: 'Acesso ao lago, wi-fi, permitido animais, quintal, cozinha, pátio ou varanda, lareira interna'
         },
         {
             nome: 'Apartamento de frente para o Mar',
             resumo: 'Um belo apartamento bem localizado com todo o equipamento necessário para passar uma temporada na praia',
             caracteristica: 'cozinha, wi-fi, garagem, permitido animais, máquina de lavar roupa, netflix'
         }, {
             nome: 'Loft no centro da Cidade',
             resumo: 'Loft com 200m²m localizado no coração da cidade. Possui padaria, supermercado, farmácia, tudo perto',
             caracteristica: 'wi-fi, cozinha, máquina de lavar, netflix, garagem, permite animais,'
         });

         
        

         /*const basededados = conectCadastro.db('Projetobd');
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