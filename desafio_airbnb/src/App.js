import React from 'react';
import logoAirbnb from './logoAirbnb.png';
import AppCss from './App.css';

function App() {
  return (
   
    <>

      
        <img src= {logoAirbnb} alt="imagem logo Airbnb"/>
      
      <div>
        <input type="button" value="Localização" />
        <input type="button" value="Check-in" />
        <input type="button" value="Check-out" />
      </div>
    </>
   
  );
}

export default App;
