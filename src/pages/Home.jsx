import React, { Component } from 'react';
import heroPhoto from '../assets/images/hero-photo.jpeg';
import NavBar from '../components/NavBar';
import '../styles/Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
 
        <main className="hero">
          <div id="hero-head">
            <h1>marco galindo</h1>
            <p id="online-portfolio">{`// ONLINE PORTFOLIO 2021`}</p>
          </div>
          <div id="heroInfo">
            <img className="hero-photo" src={ heroPhoto } alt="Foto de Marco Galindo" />
            <div className="about-me">
              <p> Olá! Meu nome é Marco, tenho 28 anos e moro em João Pessoa. Inspirado pelo meu interesse em tecnologia, resolvi me tornar desenvolvedor web júnior. Procuro maneiras de gerar melhorias na sociedade através de soluções digitais.
              Formado em Jornalismo pela Universidade Federal da Paraíba, atualmente sou estudante do curso de Desenvolvimento Web da Trybe.</p>
            </div>
          </div>
          <section id="skills">
            <div id="inner-skills">
              <h2>habilidades</h2>
              <ul class="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Sass</li>
                <li>Git</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
