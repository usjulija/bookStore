import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helper';

class Cart extends React.Component {
  static propTypes = {
    books: PropTypes.object,
    order: PropTypes.object,
    modal: PropTypes.bool,
    cart: PropTypes.bool,
    deleteFromOrder: PropTypes.func,
    toggleCart: PropTypes.func
  };

  renderOrder = (key) => {
    const book = this.props.books[key];
    const count = this.props.order[key];
    const tabindex = this.props.modal ? "-1" : "0";
    if (!book) return null; //make sure the book is loaded
    if (book && book.available) {
      return (
        <li key={key}>
          <p>{count} book(s)</p>
          <p>{book.name}</p>
          <p>{formatPrice(count * book.price)}</p>
          <button
            title="remove from order"
            tabIndex={tabindex}
            onClick={() => {this.props.deleteFromOrder(key)}}>&times;</button>
        </li>
      );
    } else {
      return <li key={key}>Sorry {book ? book.name : "book"} is no longer available</li>;
    }
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const book = this.props.books[key];
      const count = this.props.order[key];
      const isAvailable = book && book.available;
      if(isAvailable) {
        return prevTotal + (count * book.price);
      }
      return prevTotal;
    }, 0);
    const tabindex = this.props.modal ? "-1" : "0";
    const cartVisibility = this.props.cart ? "visible" : "hidden";
    const clsForCart = `store-left cart ${cartVisibility}`;
    return (
      <div className={clsForCart}>
        <button tabIndex={tabindex} className="close-cart" onClick={this.props.toggleCart}>&times;</button>
        <h2>Your cart</h2>
        <ul className="cart-list">{orderIds.map(this.renderOrder)}</ul>
        <p className="total-price">Total: {formatPrice(total)}</p>
      </div>
    )
  }
}

export default Cart;
