import React, { Component } from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";

export default class Navbar extends Component {
  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="phone" className="logo" />
            </Link>
            <button type="button" className={this.state.isOpen ? "nav-btn btn-back" : "nav-btn"} onClick={this.handleToggle}>
              <FiAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "golden-text nav-links"} onClick={this.handleToggle}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/ourservice">our service</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
