
import React, { Component } from 'react';
import './index.css'


class Seusdireitos extends Component {

    render() {
    
      return (
          <main><div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src="img/leilgbt.png" className="img-fluid rounded-start" alt="..."></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Quais as leis contra a LGBTfobia ?</h5>
          <p className="card-text">Por falta de legislação específica, o STF decidiu incluir provisoriamente a LGBTfobia
               nos crimes da Lei nº 7.716/1989. 
               A Lei nº 10.216/2001 protege os portadores de transtornos mentais da discriminação pela orientação sexual.</p>
         </div>
        </div>
      </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/direitos.jpg" className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">07 Direitos LGBTQIA+ para conhecer e respeitar:</h5>
              <div className="card-text">
                
                <ul> <li> União Estável.</li>
               <li> Casamento Civil.</li>
               <li> Detentas. </li> 
              <li>  Transfobia e homofobia. </li> 
              <li>  Identidade de gênero. </li> 
               <li> Doação de sangue. </li> 
              <li>  Adoção.</li>
              </ul>
             </div>
            </div>
          </div>
    </div>
  </div>
  

</main>
)
  }

}

export default Seusdireitos;