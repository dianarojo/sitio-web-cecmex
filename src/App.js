import React from 'react';
import './App.css';

import logo from '../src/assets/img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <img src={logo} alt="Logo de la empresa" />
          <nav>
            <ul>
              <li><a href="#">INICIO</a></li>
              <li><a href="#">CURSOS</a></li>
              <li><a href="#">SUSCRIPCIÓN</a></li>
            </ul>
          </nav>
        </div>
        <div className="content-container">
          <p className="legend">
            "SOMOS UNA EMPRESA DEDICADA A LA CAPACITACIÓN EN MEDICINA COMPLEMENTARIA CON PRESENCIA EN TODO MEXICO Y LATAM"
          </p>
        </div>
      </header>
      <div className="footer">
        <div className="footer-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="footer-contact">
          <h2>Teléfono:</h2>
          <span>333-393-9360</span>
        </div>
        <div>
          <h2>E-mail</h2>
          <span>cecmex.oficial@gmail.com</span>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
      </div>
    </div>
  );
}

export default App;
