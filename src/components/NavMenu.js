import React from 'react';
import PropTypes from 'prop-types';
import logo from './images/logo.png';
import cart from './images/cart.svg';
import gear from './images/gear.svg';

class NavMenu extends React.Component {
  static propTypes = {
    modal: PropTypes.bool,
    order: PropTypes.object,
    books: PropTypes.object,
    toggleCart: PropTypes.func,
    toggleAdminMenu: PropTypes.func,
  };
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const book = this.props.books[key];
      const count = this.props.order[key];
      const isAvailable = book && book.available;
      if(isAvailable) {
        return prevTotal + count;
      }
      return prevTotal;
    }, 0);
    return (
      <nav className="topnav" id="nav">
        <img src={logo} alt="logo with books" className="logo"/>
        <div className="right-align">
          <button tabIndex={tabindex} title="your cart" onClick={this.props.toggleCart}>
            <img src={cart} alt="shopping cart"/>
            <span>{total}</span>
          </button>
          <button tabIndex={tabindex} title="manage store" onClick={this.props.toggleAdminMenu}>
            <img src={gear} alt="gear"/>
          </button>
        </div>
      </nav>
    )
  }
}

export default NavMenu;
