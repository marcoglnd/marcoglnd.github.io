import React, { Component } from "react";
import heroPhoto from "../assets/images/hero-photo.JPG";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import "../styles/Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <main className="hero">
          <div id="hero-head">
            <h1>marco galindo</h1>
            <p id="online-portfolio">{`// ONLINE PORTFOLIO 2021`}</p>
          </div>
          <div id="heroInfo">
            <img
              className="hero-photo"
              src={heroPhoto}
              alt="Foto de Marco Galindo"
            />
            <div className="about-me">
              <p>
                {" "}
                Olá! Meu nome é Marco, tenho 28 anos e moro em João Pessoa.
                Inspirado pelo meu interesse em tecnologia, resolvi me tornar
                desenvolvedor web júnior. Procuro maneiras de gerar melhorias na
                sociedade através de soluções digitais. Formado em Jornalismo
                pela Universidade Federal da Paraíba, atualmente sou estudante
                do curso de Desenvolvimento Web da Trybe.
              </p>
            </div>
          </div>
          <Skills />
        </main>
        <Footer />
      </div>
    );
  }
}
