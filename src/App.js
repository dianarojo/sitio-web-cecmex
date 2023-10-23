import React from 'react';
import './App.css';

import logo from '../src/assets/img/logo.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <img src={logo} alt="Logo de la empresa" />
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Suscripción</a></li>
            </ul>
          </nav>
        </div>
        <div className="content-container">
          <p className="legend">
          "SOMOS UNA EMPRESA DEDICADA A LA CAPACITACIÓN EN MEDICINA COMPLEMENTARIA CON PRESENCIA EN TODO MEXICO Y LATAM"
          </p>
        </div>
      </header>
    </div>
  )
};

export default App;