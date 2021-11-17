// import { render } from '@testing-library/react';
import React from 'react';



<form >
  <label>
    <input type="text" name="name" />
    <input type="text" value="user" />
    <input type="text" value="telefone" />
    <input type="text" value="passwd" />
  </label>
</form>

interface MyState {
    name: string,
    user: string,
    telefone: string,
    passwd: string
}

class CadastroForm extends React.Component<any, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            user: '',
            telefone: '',
            passwd: ''
        };

        this.handleName = this.handleName.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleTelefone = this.handleTelefone.bind(this);
        this.handlePasswd = this.handlePasswd.bind(this);
        this.sendForm=this.sendForm.bind(this);
    }

    handleName(event: any) {
        this.setState({...this.state, name: event.target.value});
    }

    handleUser(event: any) {
        this.setState({...this.state, user: event.target.value});
    }

    handleTelefone(event: any) {
        this.setState({...this.state, telefone: event.target.value});
    }

    handlePasswd(event: any) {
        this.setState({...this.state, passwd: event.target.value});
    }

    sendForm() { // função responsavel para enviar os dados ao mongo quando enviar
        fetch(`http://localhost:8080/cadastro?name=${this.state.name}&user=${this.state.user}&telefone=${this.state.telefone}&passwd=${this.state.passwd}`,
        { // nova função do chrome evita erro no cors
            method: "POST",  
            mode: 'no-cors'
        })
        .then(() => { // responsavel por limpa os dados depois de enviar eles
            this.setState({ 
                name: '',
                user: '',
                telefone: '',
                passwd: '',
            });
            window.location.href="http://localhost:3000/login" // faz o redirecionamento
        })
        .catch(() => {

        })
    }
  
    render() {
        return (
            
            <>
            <div className="containerDiv">
                    <h1 className="tituloDiv">Bem vindo(a) ao aluguel de casas!</h1>

                    <form className="containerForm">
                    <h2 className="tituloForm">Realize seu Cadastro como Hóspede</h2>
                            
                            <input value={this.state.name} onChange={this.handleName} type="text" className="inputForm" placeholder="Nome e Sobrenome"/>
                    
                            
                            <input value={this.state.user} onChange={this.handleUser} type="text" className="inputForm" placeholder="Email"/>
                    
                            
                            <input value={this.state.telefone} onChange={this.handleTelefone} type="text" className="inputForm" placeholder="Telefone" />
                    
                            
                            <input value={this.state.passwd} onChange={this.handlePasswd} type="text" className="inputForm" placeholder="Senha" />
                    
                            
                            <input onClick={this.sendForm} className="inputBtn"type="submit" value="Enviar" /> 
                    </form>
                
            </div>
            </>
            

            
        );
    }
}


export default CadastroForm;



// export default function Cadastro(){

//     return(
//         <form action="" method="post">
//             <>
//                 <h1>Faça seu Cadastro</h1>
//                 <label>Name:</label>
//                 <input type="text" className="name" placeholder="Nome e Sobrenome"/>
//                 <label>User:</label>
//                 <input type="text" className="user" placeholder="exemplo@exemplo.com"/>
//                 <label>Telefone:</label>
//                 <input type="text" className="telefone" placeholder="xx-xxxxxxxx" />
//                 <label>Passwd:</label>
//                 <input type="text" className="passwd" placeholder="Abcdsf01234" />
//                 <Link to="/Login"><input type="submit" value="Enviar" /></Link>
                
//             </>
//         </form>

        
//     )

    
// }


