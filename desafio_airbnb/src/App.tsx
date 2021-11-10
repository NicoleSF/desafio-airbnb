import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';

<form >
  <label>
    <input type="text" name="Localizacao" />
    <input type="text" value="check-in" />
    <input type="text" value="checkout" />
  </label>
</form>

interface MyState {
  value: string
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
          <input type="text" 
          placeholder={"Para onde você vai?"}  
          value={this.state.value} 
          onChange={this.handleChange} />

          Check-in:
          <input type="text" 
          placeholder={"Quando?"} 
          value={this.state.value} 
          onChange={this.handleCheck} />

          Checkout:
          <input type="text" 
          placeholder={"Quando?"}
          value={this.state.value} 
          onChange={this.handleCheckout} />

          Hóspedes:
          <input type="text" 
          placeholder={"Quantos?"}
          value={this.state.value} 
          onChange={this.handleHospedes} />
        </label>
        <button><img className="lupa" src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="" /></button>
      </form>
    );
  }
}
<input type="submit" value="Cadastro" />


export default NameForm;
