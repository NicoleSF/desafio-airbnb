import { isRedirect } from 'node-fetch';
import React from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";


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
            <h1>Faça seu Cadastro</h1>
            <label>Name:</label>
            <input value={this.state.name} onChange={this.handleName} type="text" className="name" placeholder="Nome e Sobrenome"/>
            <label>User:</label>
            <input value={this.state.user} onChange={this.handleUser} type="text" className="user" placeholder="exemplo@exemplo.com"/>
            <label>Telefone:</label>
            <input value={this.state.telefone} onChange={this.handleTelefone} type="text" className="telefone" placeholder="xx-xxxxxxxx" />
            <label>Passwd:</label>
            <input value={this.state.passwd} onChange={this.handlePasswd} type="text" className="passwd" placeholder="Abcdsf01234" />
            <input onClick={this.sendForm} type="submit" value="Enviar" />
            </>
        );
    }
}


export default CadastroForm;





