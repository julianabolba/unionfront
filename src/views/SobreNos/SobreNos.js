
import React, { Component } from 'react';
import './index.css';

class SobreNos extends Component {

    render() {


        return (<main>
    <link rel="shortcut icon" href="img/WhatsApp Image 2022-03-15 at 20.36.44.jpeg" type="image/x-icon"></link>
    {/* <!--Google fonts - lato--> */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>

  
  {/* <!--Bootstrap Icons--> */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>

      
   
            <div className="container" id="slider-container">

                <div className="container-fluid">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">

                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img/Estudante-LGBT.jpg" className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-md-block">
                                        <div className="sub">
                                            <h1>A HOMOFOBIA NO BRASIL</h1>
                                        </div>
                                        <div className="text">
                                            <p>A Constituição Federal de 1988 reresentou grande avanço na consolidação de direitos
                                                fundamentais de toda a sociedade. Entre tais direitos, estabeleceu-se o direito à igualdade, a liberdade
                                                e à segurança. Nesse cenário, é indispensável analisar se tais promessas de cidadania e dignidade
                                                se consubstanciam em mera exaltação retórica ou em verdade. Fala-se, em específico, de um segmento da população
                                                que historicamente tem sido alvo de todo tipo de preconceito e discriminação - o LGBTQIA.</p>
                                        </div>
                                        <br></br>
                                    </div>
                            </div>

                        </div>

                    </div>
                  
                   
                </div>
                </div>
                <br>
                </br>

                {/* MINI BANNERS */}
                <section>
                    <div id="about-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="main-title">O QUE É O PROJETO UNION</h3>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid" src="img/Estudante-LGBT.jpg" alt="Agência Favela"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="about-tittle">Nossa Missão </h3>
                                    <p> Receber acolhimento pode mudar - e salvar - a vida de muitas pessoas LGBTQIA no Brasil</p>
                                    <p>Mas, para muita gente, encontrar esse apoio é uma missão quase impossível.</p>
                                    <p>Falta grana, o acesso é dífícil, e não é qualquer profissional que sabe/queira acolher uma pessoa LGBTQIA. </p>
                                    <p>Pra essa conta fechar, queremos conectar pessoas LGBTQIA a parceiros que topem atendê-las de forma voluntária.</p>
                                    <p>Veja outros diferenciais</p>
                                    <ul id="about-list">
                                        <li><i className="fas fa-check"></i>Apoio psicológico</li>
                                        <li><i className="fas fa-check"></i>Vagas de empregos</li>
                                        <li><i className="fas fa-check"></i>Depoimentos de acolhidos</li>


                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* DESTAQUES */}
                <div className="container" id="featured-container">
                    <div className="col-12">
                        <h2 className="tittle primary-color">DESTAQUES</h2>
                        <p className="subtitle secondary-color">
                            Saiba Mais Sobre Nós
                        </p>
                    </div>
                    {/* cards */}

                    
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">ITALO VIANA</h5>
                                    <p className="card-text">Desenvolvedor Full Stack (em formação).</p>
                                    <a href="https://www.linkedin.com/in/italo-viana-4a2733207/" className="card-link"><i className="bi bi-linkedin"></i></a>
                                    <a href="https://github.com/italoviana" className="card-link"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">JULIANA BOLBA</h5>
                                    <p className="card-text">Desenvolvedora Full Stack (em formação).</p>
                                    <a href="https://www.linkedin.com/in/italo-viana-4a2733207/" className="card-link"><i className="bi bi-linkedin"></i></a>
                                    <a href="https://github.com/italoviana" className="card-link"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">INGRID RODRIGUES</h5>
                                    <p className="card-text">Desenvolvedora Full Stack (em formação).</p>
                                    <a href="https://www.linkedin.com/in/italo-viana-4a2733207/" className="card-link"><i className="bi bi-linkedin"></i></a>
                                    <a href="https://github.com/italoviana" className="card-link"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br></br><br></br>
                </div>
                </main>
                )
}
}
                export default SobreNos;