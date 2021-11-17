import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { isRedirect } from 'node-fetch';


const Fundo = styled.div`
  background: #eee;
`;

const BoxInicial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 68vh;
  background-image: url("https://a.cdn-hotels.com/cos/heroimage/homepage/BRAZIL__189089055.jpg?impolicy=fcrop&w=1900&h=425&q=high");

`;

const TituloInicial =  styled.h1`
  display: flex;
  color: #d32f2f;
  font-family: inherit;
  /* border-style: solid ; */
  position: relative;
  margin-top: 564px;
  top: 28px;
`;

const Label =  styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 68px;
  background-color: #270570;
  padding: 10px 50px;
  margin-top: -35px;
  border: 1px solid black;
  border-radius: 60px;
`;

const DivLocalizacao =  styled.div`
  display: flex;
  flex-direction: column;
  
`;

const TituloLocalizacao =  styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #d32f2f;
  font-family: inherit;
`;

const LocalizacaoSelect =  styled.select`
  font-family: Arial, Helvetica, sans-serif ;
  color: blue;
  padding: 5px 25px;
  margin: -2px 8px 0px 0px;
 
`;

const DivCkeck =  styled.div`
  display: flex;
  flex-direction: column;
  
`;

const TituloCkeck =  styled.h2`
  display: flex;
  color: #d32f2f;
  font-family: inherit;
  
`;

const DateCkeck =  styled.input`
  padding: 2px 25px;
  box-sizing: border-box;
  color: blue;
  
`;

const DivCkeckout =  styled.div`
  display: flex;
  flex-direction: column;
  
`;

const DateCkeckout =  styled.input`
  padding: 2px 25px;
  color: blue;
  
`;

const TituloCkeckout =  styled.h2`
  display: flex;
  color: #d32f2f;
  font-family: inherit;
  
`;

const DivHospede =  styled.div`
  display: flex;
  flex-direction: column;
  
`;

const TituloHospede =  styled.h2`
  color: #d32f2f;
  font-family: inherit;
  
`;

const SelectHospede =  styled.select`
  padding: 5px 35px;
  margin: 4px -1px 4px 7px;
  color: blue;
`;

const DivButtonBuscar =  styled.div`
  padding: 1mm;
  margin-top: 66px;
  
`;

const ButtonBuscar =  styled.button`
  padding: 0px 10px;
  border-radius: 12px;
  margin-top: 8px;
`;


const Hospedagens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  position: relative;
  flex-direction: row;
`;

const BlocoUm = styled.div`
  padding: 0px 0px;
  background: #fff;
  -webkit-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  border: 1px solid #000000;
  border-radius: 10px;
  margin-top: 30px;
  margin: 10px;
  height: 450px;
`;

const BlocoDois = styled.div`
  padding: 0px 0px;
  background: #fff;
  -webkit-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  border: 1px solid #000000;
  border-radius: 10px;
  margin-top: 256px;
  margin-left: -1279px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; 
  position: absolute;
  height: 505px;
`;
const BlocoTres = styled.div`
  padding: 0px 0px;
  background: #fff;
  -webkit-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  border: 1px solid #000000;
  border-radius: 10px;
  margin-top: 256px;
  margin-left: -955px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; 
  position: absolute;
  height: 505px;
`;
const BlocoQuatro = styled.div`
  padding: 0px 0px;
  background: #fff;
  -webkit-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  border: 1px solid #000000;
  border-radius: 10px;
  margin-top: 256px;
  margin-left: -634px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; 
  position: absolute;
  height: 505px;
`;

const BlocoCinco = styled.div`
  padding: 0px 0px;
  background: #fff;
  -webkit-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  box-shadow: 11px 14px 14px -4px rgba(0,0,0,0.75);
  border: 1px solid #000000;
  border-radius: 10px;
  margin-top: 256px;
  margin-left: -311px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; 
  position: absolute;
  height: 505px;
`;

const ImagemBlocoUM  = styled.img`
  border-radius: 10px 10px 0px 0px;
  
`;

interface MyState {
  localizacao: string,
  checkin: string,
  checkout: string,
  hospedes: string,
  lista: any
}

class NameForm extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      localizacao: '',
      checkin: '',
      checkout: '',
      hospedes: '',
      lista: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleHospedes = this.handleHospedes.bind(this);
    this.sendFormBusca = this.sendFormBusca.bind(this);
    this.getDados = this.getDados.bind(this);
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

  sendFormBusca(event: any) { // função responsavel para enviar os dados ao mongo quando enviar
    fetch(`http://localhost:8080/busca?localizacao=${this.state.localizacao}&checkin=${this.state.checkin}&checkout=${this.state.checkout}&hospedes=${this.state.hospedes}`,
    { 
        method: "POST",
        mode: 'cors'
    })
    .then(() => { 
        this.setState({ 
            ...this.state,
            localizacao: '',
            checkin: '',
            checkout: '',
            hospedes: ''
        });
    })
    .catch(() => {

    })
  }

  getDados() {
    fetch(`http://localhost:8080/busca`,
    {
        method: "GET",  
        mode: 'cors'
    })
    .then(response => response.json())
    .then((res) => { 
      this.setState({...this.state, lista: res});
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidMount(){
    this.getDados()
  }

  render() {
    return (
      <Fundo>
        <BoxInicial>
          <TituloInicial>Vai para Onde?</TituloInicial>
          <Label>
            <DivLocalizacao>
            <TituloLocalizacao>Localização:</TituloLocalizacao>
            <LocalizacaoSelect onChange={this.handleChange} value={this.state.localizacao}>
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
            </LocalizacaoSelect>
            </DivLocalizacao>
            <DivCkeck>
              <TituloCkeck>Check-in:</TituloCkeck>
              <DateCkeck type="date"
              value={this.state.checkin}
              onChange={this.handleCheck}/>
            </DivCkeck>
            <DivCkeckout>
              <TituloCkeckout>Checkout:</TituloCkeckout>
              <DateCkeckout type="date"
              value={this.state.checkout}
              onChange={this.handleCheckout} />
            </DivCkeckout>
              <DivHospede>
                <TituloHospede>Hóspedes:</TituloHospede>
                  <SelectHospede
                    value={this.state.hospedes}
                    onChange={this.handleHospedes}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </SelectHospede>
              </DivHospede>
              <DivButtonBuscar>
                <ButtonBuscar onClick={this.sendFormBusca} type="submit" >
                    <img  src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="" />
                  </ButtonBuscar>
              </DivButtonBuscar>
        
          </Label>
          <Hospedagens>
                <div>
                  {this.state.lista.slice(0,1).map(function(item: any) {
                    return <BlocoUm>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/1000000/930000/922200/922101/24896972_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                    </BlocoUm>
                  })}
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(1,2).map(function(item: any) {
                      return <BlocoUm>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/1000000/530000/525800/525783/799ab1f0_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoUm>
                    })}
                  </nav>
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(2,3).map(function(item: any) {
                      return <BlocoUm>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/35000000/34630000/34629600/34629558/8c3de922_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoUm>
                    })}
                  </nav>
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(3,4).map(function(item: any) {
                      return <BlocoUm>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/17000000/16440000/16436200/16436185/2ca1d0e9_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoUm>
                    })}
                  </nav>
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(4,5).map(function(item: any) {
                      return <BlocoDois>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/10000000/9750000/9749700/9749665/f0bfe8e8_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoDois>
                    })}
                  </nav>
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(5,6).map(function(item: any) {
                      return <BlocoTres>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/19000000/18370000/18369700/18369677/3fec9953_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoTres>
                    })}
                  </nav>
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(6,7).map(function(item: any) {
                      return <BlocoQuatro>
                        <ImagemBlocoUM src="https://media.staticontent.com/media/pictures/2012bbfc-9011-4313-a851-6e6a46417114/300x200" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoQuatro>
                    })}
                  </nav>
                </div>
                <div>
                  <nav>
                    {this.state.lista.slice(7,8).map(function(item: any) {
                      return <BlocoCinco>
                        <ImagemBlocoUM src="https://exp.cdn-hotels.com/hotels/11000000/10420000/10412400/10412384/1819da34_z.jpg?impolicy=fcrop&w=300&h=200&q=medium" />
                        <p>Casas/Hoteis</p>
                        <p>{item?.localizacao}</p>
                        <p>data de ida e volta</p>
                        <p>{item?.checkin} - {item?.checkout}</p>
                        <p>hospedes</p>
                        <p>{item?.hospedes}</p>
                      </BlocoCinco>
                    })}
                  </nav>
                </div>
                
              </Hospedagens>
        </BoxInicial>
      </Fundo>
    );
  }
}


export default NameForm;