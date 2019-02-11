import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helper';
import sold from './images/sold.svg';
import cart from './images/add-to-cart.svg';

class Modal extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      author: PropTypes.string,
      modalVisible: PropTypes.bool,
      desc: PropTypes.string,
      available: PropTypes.bool
    }),
    addToOrder: PropTypes.func,
    toggleModal: PropTypes.func,
    index: PropTypes.string
  };

  render() {
    const id = `myModal${this.props.index}`;
    const { image, name, price, author, desc, modalVisible, available } = this.props.details;
    const additionalClass = modalVisible ? "visible" : "hidden";
    const modalClass = `modal ${additionalClass}`;
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
            <button disabled={!available} title={available ? "add to cart" : "sold out"} className="card-button-modal" aria-label="add to cart" onClick={() => {this.props.addToOrder(this.props.index)}}>
              {available ? <img src={cart} alt="cart icon"/> : <img src={sold} alt="cart icon"/>}
            </button>
          </article>
          <button className="close" onClick={ () => this.props.toggleModal(name)}>&times;</button>
        </div>
      </div>
    )
  }
}

export default Modal;
