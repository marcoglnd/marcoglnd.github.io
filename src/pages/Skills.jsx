import React, { Component } from 'react'
import '../styles/Skills.scss';
import NavBar from '../components/NavBar'

export default class Skills extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <section id="skills">
          <div>
            <h2>habilidades</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Git e Github</p>
          </div>
        </section>
      </main>
    )
  }
}
