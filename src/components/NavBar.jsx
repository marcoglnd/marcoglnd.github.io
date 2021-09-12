import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <div id="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/projects">PROJETOS</Link>
            <Link to="/contact">CONTATO</Link>
          </div>
        </nav>
      </header>
    )
  }
}
