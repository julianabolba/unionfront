import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../views/Home/Home'
import SobreNos from '../views/SobreNos/SobreNos'
import Contato from '../views/Contato'
import Login from '../components/Login/Login'
import Footer from '../components/Footer'



const Rotas = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                
                <Route  exact path="/" element={<Home/>} />                
                <Route path="/SobreNos"element={<SobreNos/>}/>
                <Route path="/Contato"element={<Contato/>}/>
                <Route path="/Login"element={<Login/>}/>

               
            </Routes>
            
        <Footer/>
        </BrowserRouter>

    );
}

export default Rotas;