import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import "../styles/Header.scss";

export default class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <div class="nav-links">
          <Link to="/">home</Link>
          <Link to="/projects">projetos</Link>
          <Link to="/contact">contato</Link>
        </div>
        <div className="social-media">
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/marcoglnd/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="contact-links"
            href="https://github.com/marcoglnd"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </header>
    );
  }
}
