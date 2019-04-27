import React from 'react';
import './styles/reset.css';
import './styles/Nav.css';

class Nav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className="Nav">
        <div className="fullname">katie truong</div>
        <div className="navbar-options">
          <div>Resume</div>
          <div>Projects</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </nav>
    )
  }
}

export default Nav;
