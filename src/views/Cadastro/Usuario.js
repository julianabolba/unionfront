import React, { Component } from 'react';
import './index.css'

class Usuario extends Component {

    render() {
  
  
  
  
      return (
          <main>
             
          <form classNameName="form">
                  <br></br>
                  <div className="form-group col-md-6 mb-2">
                      <label for="inputAddress">Nome</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder=""></input>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="inputAddress">Com qual gênero você se identifica?</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder=""></input>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="inputAddress">CPF</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder=""></input>
                  </div>

                  <div className="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input type="email" className="form-control"  placeholder=""></input>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="inputAddress">Telefone (com DDD)</label>
                      <input type="text" className="form-control"  placeholder="(xx) xxxxxxxxx"></input>
                  </div>


                  <div className="form-group col-md-6">
                      <label for="inputAddress">Cidade e estado</label>
                      <input type="text" className="form-control"  placeholder=""></input>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="inputAddress2">Que tipo de ajuda que você procura?
                      </label>
                      <input type="text" className="form-control"  placeholder=""></input>
                  </div>


                  <div className="form-group col-md-6">
                      <label for="inputPassword4">Crie uma senha</label>
                      <input type="password" className="form-control"  placeholder="Mínimo 8 caracteres"></input>
                  </div>

                  <div className="form-group">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                          <label className="form-check-label" for="gridCheck">
                              Estou ciente de que esse é um passinho rumo à felicidade! 💜
                          </label>
                      </div>
                  </div>
                  <button type="submit" className="btn btn-primary">CADASTRAR</button>
              </form>

              </main>
)
  }

}

export default Usuario;