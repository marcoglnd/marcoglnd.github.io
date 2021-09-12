import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Projects.scss';
import recipesAppImg from '../assets/images/recipes-app.png';
import triviaGameImg from '../assets/images/trivia-game.png';
import githubUserImg from '../assets/images/github-user-search.png';

export default class Projects extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <section id="projects">
          <h2>projetos</h2>
          <div id="inner-projects">
            <div>
              <a class="project" id="github-redux-app" href="https://marcoglnd.github.io/github-redux-app" target="_blank" rel="noreferrer">
                <img src={ githubUserImg } alt="Github User Search" />
                <div>
                  <div>
                    <h3>GitHub User Search</h3><h4>| Junho/2021</h4>
                  </div>
                  <p>Aplicação onde o usuário pode buscar por outros usuários cadastrados no GitHub. Criado com React e Redux, usando requisições API.</p>
                </div>
              </a>
            </div>
            <div>
              <a class="project" id="trivia-game" href="https://marcoglnd.github.io/trivia-game" target="_blank" rel="noreferrer">
                <img src={ triviaGameImg } alt="Trivia Game" />
                <div>
                  <div>
                    <h3>Trivia Game</h3><h4>| Julho/2021</h4>
                  </div>
                  <p>Jogo de variedades onde o usuário deve responder a perguntas sobre assuntos diversos antes que o tempo acabe. Feito com React, Redux e requisições API.</p>
                </div>
              </a>
            </div>
            <div>
              <a class="project" id="recipes-app" href="https://marcoglnd.github.io/recipes-app/" target="_blank" rel="noreferrer">
                <img src={ recipesAppImg } alt="Recipes App" />
                <div>
                  <div>
                    <h3>App de Receitas</h3><h4>| Agosto/2021</h4>
                  </div>
                  <p>Aplicativo de receitas onde o usuário pode pesquisar e favoritar receitas de comidas e bebidas. Feito com React, Context API e requisições API.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
