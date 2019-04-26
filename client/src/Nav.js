import React from 'react';
import './reset.css';

class Nav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className="Nav">
        <div className="fullname">Katie Truong</div>
        <div className="navbar-options">
            <div>About</div>
            <div>Porfolio</div>
            <div>Blog</div>
            <div>Contact</div>
        </div>
      </nav>
    )
  }
}

export default Nav;
