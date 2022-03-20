

import React, { Component } from 'react';

import './index.css';



class Home extends Component {

  render() {




    return (


      <main>


        <div className="background-image">
          {/* <img src="https://cdn.pixabay.com/photo/2016/02/10/13/39/expectrum-1191724_960_720.png" className="img-fluid" alt="..."></img> */}
          <br></br>
          <br></br>
          <div className="textoinicial">
            <div className="container">

              <h2 className="background-text ">Seja bem-vind@ do jeito que você é!</h2>
              <h4>Valorizamos, respeitamos e acolhemos a diversidade</h4>
              <h4>
                A Union é uma plataforma de serviços à comunidade LGBTQIA+ </h4>
              <h4>que une profissionais voluntários a quem precisa de ajuda.</h4>
              <ul>

                <li id="top">Acolhimento psicológico</li>
                <li id="top">Grupos de apoio</li>
                <li id="top">Parcerias para qualificação profissional</li>
                <li id="top">Vagas de emprego</li>
              </ul>
              <h4>Faça seu cadastro gratuitamente:</h4>

              <a href="./views/Cadastro" className="btn btn-lg btn-outline-primary mb-3" >Estou procurando ajuda</a>

              <a href="./views/Cadastro" className="btn btn-lg btn-outline-primary mb-3" >Quero ser voluntário</a>

            </div>
          </div>
          <br></br>
          <br></br>
        </div>

        <div className="container px-4 px-md-3"> {/*margem */}
          <div className="row mb-1 pb-md-1 align-items-center">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                  <img src="img/unides.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    {/* <h5 class="card-title"></h5> */}
                    <p class="card-text">Sessões de conversa em grupo, mediadas por profissionais qualificados para travestis,
              mulheres transexuais e homens trans em situação de vulnerabilidade.
              Atualmente o programa possui 40 vagas nos grupos presenciais.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="img/curriculo.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    {/* <h5 class="card-title"></h5> */}
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="img/psicologos.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="img/doacao.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Quer fazer uma doação?</h5>
                    <p class="card-text">Com a sua ajuda conseguiremos alcançar cada vez mais pessoas que estão precisando.
                </p>
                <a href="#" className="btn btn-dark">Doar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<br></br>


<div className="container mb-2 pb-3">
          <div class="card text-center">
            <div class="card-header">
              MAIS INFORMAÇÕES
            </div>
            <h1 className="titulo">Estes dados fazem a diferença</h1>
            <p className="subtitle primary-color">
              O Programa Union Compartilha promove sessões de conversa em grupo, mediadas por profissionais qualificados para travestis,
              mulheres transexuais e homens trans em situação de vulnerabilidade.
              Atualmente o programa possui 40 vagas nos grupos presenciais.
            </p>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">135</h5>
                  <p class="card-text">Pessoas cadastradas</p>

                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">58</h5>
                  <p class="card-text">Ajudas feitas</p>

                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">150</h5>
                  <p class="card-text">Vagas disponíveis</p>

                </div>
              </div>
            </div>
          </div>
        
        </div>

        <section className="container">
        <div className="col-12 col-md-10 offset-md-1" id="mini-banners">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card text-center">
                <i className="bi bi-box primary-color"></i>
                <div className="card-body">
                  <i className="bi bi-calendar-check"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="auto" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg></i>
                  <h5 className="card-tittle primary-color">Agende</h5>
                  <p className="card-text secondary-color">Já está cadastrado? Faça login e agende seu atendimento online ou presencial</p>
                  <a href="/Usuario/_ViewStart" className="btn btn-dark">Login</a>

                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card text-center">
                <i className="bi bi-house-heart"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="auto" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Zm-5-.225C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
                </svg></i>
                <div className="card-body">
                  <h5 className="card-tittle primary-color">Opções de Ajuda</h5>
                  <p className="card-text secondary-color">Temos atendimentos com profissionais qualificados, com segurança e acolhimento! É fácil e rápido de se cadastrar!
                  </p>
                  <a href="#" className="btn btn-dark">Cadastro</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card text-center">
                <i className="bi bi-align-center"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="auto" fill="currentColor" className="bi bi-chat-left-heart bi-align-center" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" />
                  <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                </svg></i>
                <div className="card-body">
                  <h5 className="card-tittle primary-color">Depoimentos</h5>
                  <p className="card-text secondary-color">A travesti Valéria Rodrigues, 35, deixou a escola na quinta série, depois de apanhar dezenas de vezes dos colegas. "Só agora é que eu estou conseguindo voltar a estudar, por meio do Union", conta.
                  </p>
                  <a href="#" className="btn btn-dark"> + Depoimentos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script> <script src="/docs/4.0/assets/js/vendor/jquery-slim.min.js"></script></script>

        <script src="/docs/4.0/assets/js/vendor/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script><script src="/docs/4.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script><script src="/docs/4.0/assets/js/docs.min.js"></script>

      </main>
    )
  }

}

export default Home;
