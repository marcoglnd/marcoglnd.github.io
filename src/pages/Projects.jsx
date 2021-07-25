import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <section id="projects">
          <div id="inner-projects">
            <h2>projetos</h2>
            <div>
              <a className="project" id="github-search" href="https://marcoglnd.github.io/github-redux-app/" rel="noreferrer" target="_blank"><h3>Github Search App</h3> 
              <p>Aplicação onde o usuário pode buscar por outros usuários cadastrados no GitHub. Criado com React e Redux, usando requisições API.</p></a>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
