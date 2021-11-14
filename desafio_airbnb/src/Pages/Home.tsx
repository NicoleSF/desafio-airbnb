import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import styled from 'styled-components';

<form >
  <label>
    <input type="" name="Localizacao" />
    <input type="text" value="check-in" />
    <input type="text" value="checkout" />
  </label>
</form>

interface MyState {
  localizacao: string,
  checkin: string,
  checkout: string,
  hospedes: string
}

class NameForm extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      localizacao: '',
      checkin: '',
      checkout: '',
      hospedes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleHospedes = this.handleHospedes.bind(this);
    this.sendFormBusca = this.sendFormBusca.bind(this);

  }

  handleChange(event: any) {
    this.setState({...this.state, localizacao: event.target.value});
  }

  handleCheck(event: any) {
    this.setState({...this.state, checkin: event.target.value});
  }

  handleCheckout(event: any) {
    this.setState({...this.state, checkout: event.target.value});
  }

  handleHospedes(event: any) {
    this.setState({...this.state, hospedes: event.target.value});
  }

  sendFormBusca() { // função responsavel para enviar os dados ao mongo quando enviar
    console.log(this.state);
    
    fetch(`http://localhost:8080/busca?localizacao=${this.state.localizacao}&checkin=${this.state.checkin}&checkout=${this.state.checkout}&hospedes=${this.state.hospedes}`,
    { // nova função do chrome evita erro no cors
        method: "POST",  
        mode: 'no-cors'
    })
    .then(() => { // responsavel por limpa os dados depois de enviar eles
        this.setState({ 
            localizacao: '',
            checkin: '',
            checkout: '',
            hospedes: ''
        });
    })
    .catch(() => {

    })
}

  render() {
    return (
      < >
         
        <label>
          Localização:

          <select onChange={this.handleChange} value={this.state.localizacao}>                           
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>

          Check-in:
          <input type="date"
          placeholder={"Quando?"} 
          value={this.state.checkin} 
          onChange={this.handleCheck}/>

          Checkout:
          <input type="date" 
          placeholder={"Quando?"}
          value={this.state.checkout} 
          onChange={this.handleCheckout} />

            Hóspedes:
              <select 
                value={this.state.hospedes} 
                onChange={this.handleHospedes}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>

        </label>

        
          <button onClick={this.sendFormBusca} type="submit" >
            <img className="Lupa" src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="" />
          </button>
        
      </>
    );
  }
}


export default NameForm;