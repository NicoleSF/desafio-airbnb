import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"
import Login from "./Pages/Login";


const Rout = () => {
   return(
        <BrowserRouter>
           <Routes>
                 <Route path="Home" element={<App />} />
                <Route path="/" element={<Cadastro />} />
                <Route path="login" element={<Login />} />
           </Routes>
        </BrowserRouter>
   )
}

export default Rout;