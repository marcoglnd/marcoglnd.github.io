import React, { Component } from "react";
import Header from "../components/Header";
import "../styles/Projects.scss";
import recipesAppImg from "../assets/images/recipes-app.png";
import triviaGameImg from "../assets/images/trivia-game.png";
import githubUserImg from "../assets/images/github-user-search.png";
import todoList from "../assets/images/todo-list.png";
import pixelsArt from "../assets/images/pixels-art.png";
import shoppingCart from "../assets/images/shopping-cart.png";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default class Projects extends Component {
  render() {
    return (
      <section>
        <Header />
        <section id="projects">
          <h2>projetos</h2>
          <div id="inner-projects">
            <ProjectCard
              name="Recipes App"
              date="Agosto/2021"
              img={recipesAppImg}
              summary="Aplicativo de receitas onde o usuário pode pesquisar e
              favoritar receitas de comidas e bebidas. Feito com React,
              Context API e requisições API."
              deploy="https://marcoglnd.github.io/recipes-app/"
              repo="https://github.com/marcoglnd/recipes-app"
            />
            <ProjectCard
              name="Trivia Game"
              date="Julho/2021"
              img={triviaGameImg}
              summary="Jogo de variedades onde o usuário deve responder a perguntas
              sobre assuntos diversos antes que o tempo acabe. Feito com
              React, Redux e requisições API."
              deploy="https://marcoglnd.github.io/trivia-game"
              repo="https://github.com/marcoglnd/trivia-game"
            />
            <ProjectCard
              name="GitHub User Search"
              date="Junho/2021"
              img={githubUserImg}
              summary="Aplicação onde o usuário pode buscar por outros usuários
              cadastrados no GitHub. Criado com React e Redux, usando
              requisições API."
              deploy="https://marcoglnd.github.io/github-redux-app"
              repo="https://github.com/marcoglnd/github-redux-app"
            />
            <ProjectCard
              name="Shopping Cart"
              date="Maio/2021"
              img={shoppingCart}
              summary="Página web com carrinho de compras criada a partir de uma
              requisição da API do Mercado Livre. Criado com HTML, CSS e
              JS, usando requisições API."
              deploy="https://marcoglnd.github.io/shopping-cart/"
              repo="https://github.com/marcoglnd/shopping-cart"
            />
            <ProjectCard
              name="To Do List"
              date="Maio/2021"
              img={todoList}
              summary="Lista de tarefas customizável, onde o usuário pode
              adicionar, remover e salvar tarefas diversas. Feito com
              HTML, CSS e JS."
              deploy="https://marcoglnd.github.io/todo-list/"
              repo="https://github.com/marcoglnd/todo-list"
            />
            <ProjectCard
              name="Pixels Art"
              date="Abril/2021"
              img={pixelsArt}
              summary="Aplicação web onde você pode criar uma arte pixelada,
              interagindo com uma paleta de cores e uma tela em branco.
              Feito com HTML, CSS e JS."
              deploy="https://marcoglnd.github.io/pixels-art/"
              repo="https://github.com/marcoglnd/pixels-art"
            />
          </div>
        </section>
        <Footer />
      </section>
    );
  }
}
