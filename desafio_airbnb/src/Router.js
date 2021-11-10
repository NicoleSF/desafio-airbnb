import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"


const Rout = () => {
   return(
        <BrowserRouter>
           <Routes>
                 <Route path="/" element={<App />} />
                <Route path="cadastro" element={<Cadastro />} />
           </Routes>
        </BrowserRouter>
   )
}

export default Rout;