import React from 'react';
import Modal from './Modal';
import cart from './images/001-add-to-cart.svg';
import info from './images/002-info.svg';
import { formatPrice } from '../helper';

class ProductCard extends React.Component {
  render() {
    const { image, name, price, author, visible } = this.props.details;
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
          <img className="cover" src={image} alt={name}/>
          <div className="card-footer">
            <button tabIndex={tabindex} title="add to cart" className="card-button" aria-label="add to cart">
              <img src={cart} alt="cart icon"/>
            </button>
            <button tabIndex={tabindex} title="book description" className="card-button" aria-label="book description" onClick={() => { this.props.toggleModal(name) }}>
              <img src={info} alt="info icon"/>
            </button>
          </div>
        </div>
        <Modal index={this.props.index} details={this.props.details} toggleModal={this.props.toggleModal}/>
      </React.Fragment>
    )
  }
}

export default ProductCard;
