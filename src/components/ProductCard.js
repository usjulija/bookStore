import React from 'react';
import cart from './images/001-add-to-cart.svg'
import info from './images/002-info.svg'
import { formatPrice } from '../helper'

class ProductCard extends React.Component {
  render() {
    const { image, name, price, desc, available, author, category, visible } = this.props.details;
    const additional = visible ? "show" : "";
    const additionalCalss = `panelCard ${additional}`;
    return (
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
          <button title="add to cart" className="card-button" aria-label="add to cart">
            <img src={cart} alt="cart icon"/>
          </button>
          <button title="book description" className="card-button" aria-label="book description">
            <img src={info} alt="info icon"/>
          </button>
        </div>
      </div>
    )
  }
}

export default ProductCard;
