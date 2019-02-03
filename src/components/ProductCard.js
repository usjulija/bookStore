import React from 'react';
import Modal from './Modal';
import cart from './images/001-add-to-cart.svg';
import info from './images/002-info.svg';
import sold from './images/sold.svg';
import { formatPrice } from '../helper';

class ProductCard extends React.Component {
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
          <img className="cover" src={image} alt={name}/>
          <div className="card-footer">
            <button disabled={!available} tabIndex={tabindex} title={available ? "add to cart" : "sold out"} className="card-button" aria-label="add to cart">
              {available ? <img src={cart} alt="cart icon"/> : <img src={sold} alt="cart icon"/>}
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
