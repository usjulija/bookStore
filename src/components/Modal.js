import React from 'react';
import { formatPrice } from '../helper';
import cart from './images/001-add-to-cart.svg';

class Modal extends React.Component {
  render() {
    const id = `myModal${this.props.index}`;
    const { image, name, price, author, desc, modalVisible } = this.props.details;
    const modalClass = `modal ${modalVisible ? "visible" : "hidden"}`;
    return (
      <div className={modalClass} id={id}>
        <div className="modal-content">
          <div className="modal-left">
            <article className="card-header">
              <div className="title">
                <h3>{name}</h3>
                <p className="author">{author}</p>
              </div>
              <p className="price">{formatPrice(price)}</p>
            </article>
            <img className="cover" src={image} alt={name}/>
          </div>
          <article className="modal-right">
            <p className="description">{desc}</p>
            <button title="add to cart" className="card-button" aria-label="add to cart">
              <img src={cart} alt="cart icon"/>
            </button>
          </article>
          <button className="close" onClick={ () => this.props.toggleModal(name)}>&times;</button>
        </div>
      </div>
    )
  }
}

export default Modal;
