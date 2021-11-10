import React from 'react';
import logoAirbnb from './logoAirbnb.png';
import './App.css';

function App() {
  return (
   
    <>

      
        <img src= {logoAirbnb} alt="imagem logo Airbnb" className="img"/>
      
      <div className="container">
        <input type="button" value="Localização" />
        <input type="button" value="Check-in" />
        <input type="button" value="Check-out" />
      </div>
    </>
   
  );
}

export default App;
