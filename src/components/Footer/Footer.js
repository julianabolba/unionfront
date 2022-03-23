

import React, { Component } from 'react';


class Footer extends Component {

  render() {
    
   
    return <footer className="bd-footer py-5 mt-5">
      {/* <img src="img/handsmenor.png"></img> */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
             
              <span className="fs-5 px-2"></span>
            </a>
            
          </div>
          <div className="col-6 col-lg-4 offset-lg-1 mb-3">
          
            <h5>Links:</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2"><a href="#">Sobre nós</a></li>
              <li className="mb-2"><a href="#">Seus Direitos</a></li>
              <li className="mb-2"><a href="#">Cadastro usuário</a></li>
              <li className="mb-2"><a href="#">Cadastro profissional</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-4 mb-3">
            <h4>Nossos contatos:</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">(11)9999-9999</a></li>
              <li className="mb-2"><a href="#">contato@unionlgbtqia.com</a></li>
              <li className="mb-2"><a href="#">Rua da Diversidade, 1234</a></li>
              <li className="mb-2"><a href="#">São Paulo - SP</a></li>
            </ul>
          </div>
          
         
        </div>
      
      </div>
    </footer>
  }
}

export default Footer;
