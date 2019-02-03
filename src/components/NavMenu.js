import React from 'react';
import logo from './images/logo.png'

class NavMenu extends React.Component {
  render() {
    return (
      <nav className="topnav" id="nav">
        <img src={logo} alt="logo with books"/>
        <div className="right-align">
          <button><span role="img" aria-label="shopping cart" title="cart">🛒</span></button>
          <button><span role="img" aria-label="manage inventory" title="manage shop">⚙️</span></button>
        </div>
      </nav>
    )
  }
}

export default NavMenu;
