import userEvent from '@testing-library/user-event';
import React from 'react';



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

    sendFormLogin() { 
        fetch(`http://localhost:8080/login?user=${this.state.user}&passwd=${this.state.passwd}`,
        { 
            method: "POST",  
            mode: 'no-cors'
        })
        .then((res) => { 
            this.setState({ 
                user: '',
                passwd: ''
            });
            window.location.href="http://localhost:3000/home"
        })
        .catch(() => {
            ;
            
            
        })
    }

    
  
    render() {
        return (
            
            <>
            <div className="containerDiv">
                

                <form className="containerForm">
                    <h1 className="tituloForm">Realize seu Login</h1>
                    
                    <input value={this.state.user} onChange={this.handleUserLogin} type="text" className="inputForm" placeholder="email"/>

                    
                    <input value={this.state.passwd} onChange={this.handlePasswdLogin} type="text" className="inputForm" placeholder="senha" />
                    <input onClick={this.sendFormLogin} className="inputBtn" type="submit" value="Login" /> 
                </form>
            </div>
            </>
        );
    }
}


export default LoginForm;

