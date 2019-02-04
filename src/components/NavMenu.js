import React from 'react';
import logo from './images/logo.png'

class NavMenu extends React.Component {
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <nav className="topnav" id="nav">
        <img src={logo} alt="logo with books"/>
        <div className="right-align">
          <button tabIndex={tabindex} title="your cart"><span role="img" aria-label="shopping cart" onClick={this.props.toggleCart}>🛒</span></button>
        </div>
      </nav>
    )
  }
}

export default NavMenu;
