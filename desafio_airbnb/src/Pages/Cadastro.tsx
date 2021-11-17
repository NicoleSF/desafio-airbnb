import { isRedirect } from 'node-fetch';
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

    sendForm() { 
        fetch(`http://localhost:8080/cadastro?name=${this.state.name}&user=${this.state.user}&telefone=${this.state.telefone}&passwd=${this.state.passwd}`,
        { 
            method: "POST",  
            mode: 'no-cors'
        })
        .then(() => { 
            this.setState({ 
                name: '',
                user: '',
                telefone: '',
                passwd: '',
            });
            window.location.href="http://localhost:3000/login" 
        })
        .catch(() => {

        })
    }
  
    render() {
        return (
            
            <>
            <div className="containerDiv">
                
                    <form className="containerForm">
                    <h1 className="tituloForm">Bem vindo(a) ao aluguel de casas!</h1>
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





