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
  value: string,
}

class NameForm extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.value});
  }

  handleCheck(event: any) {
    this.setState({value: event.value});
  }

  handleCheckout(event: any) {
    this.setState({value: event.value});
  }

  handleHospedes(event: any) {
    this.setState({value: event.value});
  }

  
  render() {
    return (
      <form  className="busca">
        <label>
          Localização:

          <select>                           
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
          value={this.state.value} 
          onChange={this.handleCheck}/>

          Checkout:
          <input type="date" 
          placeholder={"Quando?"}
          value={this.state.value} 
          onChange={this.handleCheckout} />
          
          Hóspedes:
          <input type="text" 
          placeholder={"Quantos?"}
          value={this.state.value} 
          onChange={this.handleHospedes} />
        </label>
        <button >
          <img className="Lupa" src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="" />
          </button>
      </form>
    );
  }
}


export default NameForm;