import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import cart from './images/add-to-cart.svg';
import info from './images/info.svg';
import sold from './images/sold.svg';
import { formatPrice } from '../helper';

class ProductCard extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      author: PropTypes.string,
      visible: PropTypes.bool,
      available: PropTypes.bool
    }),
    modal: PropTypes.bool,
    addToOrder: PropTypes.func,
    toggleModal: PropTypes.func,
    index: PropTypes.string
  };
  render() {
    const { image, name, price, author, visible, available } = this.props.details;
    const additional = visible ? "show" : "";
    const additionalCalss = `panelCard ${additional}`;
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <React.Fragment>
        <div className={additionalCalss}>
          <div className="card-header">
            <div className="title">
              <h3>{name}</h3>
              <p className="author">{author}</p>
            </div>
              <p className="price">{formatPrice(price)}</p>
          </div>
          <img className="cover" src={image} alt={name} title="click to read book description" onClick={() => { this.props.toggleModal(name) }}/>
          <div className="card-footer">
            <button disabled={!available} tabIndex={tabindex} title={available ? "add to cart" : "sold out"} className="card-button" aria-label="add to cart" onClick={() => {this.props.addToOrder(this.props.index)}}>
              {available ? <img src={cart} alt="cart icon"/> : <img src={sold} alt="cart icon"/>}
            </button>
            <button tabIndex={tabindex} title="book description" className="card-button" aria-label="book description" onClick={() => { this.props.toggleModal(name) }}>
              <img src={info} alt="info icon"/>
            </button>
          </div>
        </div>
        <Modal
          index={this.props.index}
          details={this.props.details}
          toggleModal={this.props.toggleModal}
          addToOrder={this.props.addToOrder}
        />
      </React.Fragment>
    )
  }
}

export default ProductCard;
