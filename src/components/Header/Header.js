

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



class Header extends Component {

  render() {

    
    return <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar" id="bdNavbar">
     

      <nav className="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
        <a className="navbar-brand p-0 me-2" href="/" aria-label="logo"><img src="img/logo.png" id="logo"></img> </a>



        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link p-2" href="/" >Home</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link p-2" href="./sobrenos">Sobre nós</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link p-2" href="./seusdireitos" >Seus direitos</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link p-2" href="./Footer">Contato</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link p-2" href="./usuario" rel="noopener noreferrer">Procuro ajuda</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link p-2" href="./profissional" rel="noopener noreferrer">Sou profissional</a>
            </li>

             

          </ul>

        </div>
       
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeHolder="Buscar" aria-label="OK"></input>
          <button className="btn btn-outline-warning" type="submit">Ok</button>
        </form>

        <hr className="d-md-none text-white-50"></hr>

        <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
          <li className="nav-item col-6 col-md-auto">
            <a className="nav-link p-2" href="#" target="_blank" rel="noopener noreferrer">
              
              <svg xmlns="http://www.w3.org/2000/svg"  className="navbar-nav-svg d-inline-block align-text-top"viewBox="0 0 448 512" role="img"><title>Whatsapp</title> <path fill="currentColor" fillRule="evenodd" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              <small className="d-md-none ms-2">Whatsapp</small>
            </a>
          </li>
          <li className="nav-item col-6 col-md-auto">
            <a className="nav-link p-2" href="#" target="_blank" rel="noopener noreferrer">
              
              <svg xmlns="http://www.w3.org/2000/svg"  className="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 576 512"  role="img"><title>Youtube</title> <path  fill="currentColor" fillRule="evenodd" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              <small className="d-md-none ms-2">Youtube</small>
            </a>
          </li>
          <li className="nav-item col-6 col-md-auto">
            <a className="nav-link p-2" href="#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 16 16" role="img"><title>Facebook</title> <path fill="currentColor" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg>
              <small className="d-md-none ms-2">Facebook</small>
            </a>
          </li>
          <li className="nav-item col-6 col-md-auto">
            <a className="nav-link p-2" href="#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 16 16" role="img"><title>Instagram</title><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <small className="d-md-none ms-2">Instagram</small>
            </a>
          </li>
          <li><Link to="/login">
          <button id="login" type="button" className="btn btn-secondary" data-toggle="button" aria-pressed="false" autoComplete="off"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="auto" fill="currentColor" className="px-2 mb-1 icon" viewBox="0 0 512 512"><path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z"/></svg> 
    Login
</button>
        </Link></li>
        </ul>
        


      </nav>
      <link href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <link href="https://getbootstrap.com/docs/5.0/assets/css/docs.css" rel="stylesheet"></link>
      <link  rel="canonical" href="https://getbootstrap.com/docs/4.0/components/buttons/"></link>
      <link href="https://code.jquery.com/jquery-3.2.1.slim.min.js" rel="stylesheet"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
<script><script src="/docs/4.0/assets/js/vendor/jquery-slim.min.js"></script></script>

<script src="/docs/4.0/assets/js/vendor/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script><script src="/docs/4.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script><script src="/docs/4.0/assets/js/docs.min.js"></script>
    </header>

  }
}

export default Header;
