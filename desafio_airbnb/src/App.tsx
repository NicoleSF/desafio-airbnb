import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';

<form>
  <label>
    Localização
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

  
  render() {
    return (
      <form >
        <label>
          Localização:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Check-in:
          <input type="text" value={this.state.value} onChange={this.handleCheck} />
          Checkout:
          <input type="text" value={this.state.value} onChange={this.handleCheckout} />
        </label>
        <input type="submit" value="Cadastro" />
      </form>
    );
  }
}


export default NameForm;
