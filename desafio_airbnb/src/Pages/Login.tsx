import React from 'react';
import { Link } from "react-router-dom";

<form >
  <label>
    <input type="text" value="user" />
    <input type="text" value="passwd" />
  </label>
</form>

interface MyState {
    user: string,
    passwd: string
}

class LoginForm extends React.Component<any, MyState> {
    [x: string]: any;
    constructor(props: any) {
        super(props);
        this.state = {
            user: '',
            passwd: ''
        };

        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handlePasswdLogin = this.handlePasswdLogin.bind(this);
        this.sendFormLogin = this.sendFormLogin.bind(this);
    }

    handleUserLogin(event: any) {
        this.setState({...this.state, user: event.target.value});
    }

    handlePasswdLogin(event: any) {
        this.setState({...this.state, passwd: event.target.value});
    }

    sendFormLogin() { // função responsavel para enviar os dados ao mongo quando enviar
        fetch(`http://localhost:8080/login?user=${this.state.user}&passwd=${this.state.passwd}`,
        { // nova função do chrome evita erro no cors
            method: "POST",  
            mode: 'no-cors'
        })
        .then((res) => { // responsavel por limpa os dados depois de enviar eles
            this.setState({ 
                user: '',
                passwd: ''
            });
            window.location.href="http://localhost:3000/home"
        })
        .catch(() => {

        })
    }
  
    render() {
        return (
            <>
            <h1>Faça seu Login</h1>
            <label>User:</label>
            <input value={this.state.user} onChange={this.handleUserLogin} type="text" className="User" placeholder="exemplo@exemplo.com"/>

            <label>Passwd:</label>
            <input value={this.state.passwd} onChange={this.handlePasswdLogin} type="text" className="passwd" placeholder="sua senha" />
            <input onClick={this.sendFormLogin} type="submit" value="login" /> 
            </>
        );
    }
}


export default LoginForm;

