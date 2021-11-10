import React from 'react';
import logoAirbnb from './logoAirbnb.png';
import styled from 'styled-components';

const Butao = styled.button`
  margin: 20px 20px;
`;

function App() {
  return (
   
    <>

      
        <img src= {logoAirbnb} alt="imagem logo Airbnb" className="img"/>
      
      <div>
        <input type="sub" value="Localização" />
        <input type="sub" value="Check-in" />
        <input type="sub" value="Check-out" />
        <Butao type="button">Enviar</Butao>
        
      </div>
    </>
   
  );
}

export default App;
