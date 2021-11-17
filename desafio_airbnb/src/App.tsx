import React from 'react';
import Routes from "./Router";
import Home from "./Pages/Home"



export default function App() {
   return (
       <Routes />
   
       
)}

// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
// import Routes from "./Router";
// import Home from "./Pages/Home"
// import { useState, useEffect } from "react";
// import NameForm from './Pages/Home';



// export default function App() {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const [localizacao, setlocalizacao] = useState<NameForm>();
//     const [checkin, setCheckin] = useState('');
//     const [checkout, setCheckout] = useState('http://localhost:3001/home');
//     const [hospedes, setHospedes] = useState(false);
//     const [erro, setErro] = useState(false);
  
//     useEffect(() => {
//       async function App() {
//         setHospedes(true);
//         try {
//           const resultado = await fetch(checkout);
//           if (resultado.ok) {
//             const localizacao: NameForm = await resultado.json();
//             setlocalizacao(localizacao);
//           } else {
//             setErro(true);
//           }
//         } catch (error) {
//           setErro(true);
//         }
//         setHospedes(false);
//       }
//       localizacaoHome();
//     }, [checkout]);
//    return (
//        <>
//        <Routes />
//        {/* setItem */}
//        {/* http://localhost:8080/cadastro?name=${this.state.name}&user=${this.state.user}&telefone=${this.state.telefone}&passwd=${this.state.passwd} */}
//        <form onSubmit={event => {
//          setCheckout(`http://localhost:8080/home?localizacao=${localizacao}&checkin=${checkin}&checkout=${checkout}&hospedes=${hospedes}`);
//          event.preventDefault();
//        }}>
//          <fieldset>
//            <legend>Teste</legend>
//            <input type="text" value={checkin} onChange={event => setCheckin(event.target.value)}/>
//            <button type="submit">Buscar</button>
//          </fieldset>
//        </form>
//        {erro && <div>Ocorreu um erro!</div>}
//        {hospedes ? (
//          <div>Carregando...</div>
//        ) : (
//          localizacao && (
//            <div>
//              <p>Localizacao: {localizacao.localizacao}</p>
//              <p>checkin: {localizacao.checkin}</p>
//              <p>checkout: {localizacao.checkout}</p>
//              <p>Hospedes: {localizacao.Hospedes}</p>
//            </div>
//          )
//        )}
//      </>
   
       
// )}

// function localizacaoHome() {
//     throw new Error('Function not implemented.');
// }
