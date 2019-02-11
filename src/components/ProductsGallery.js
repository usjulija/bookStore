import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductsGallery extends React.Component {
  static propTypes = {
    books: PropTypes.object,
    toggleModal: PropTypes.func,
    addToOrder: PropTypes.func,
    modal: PropTypes.bool
  };
  render() {
    return (
      <div className="products-gallery">
        {Object.keys(this.props.books).map(key => (
          <ProductCard
            key={key}
            index={key}
            details={this.props.books[key]}
            toggleModal={this.props.toggleModal}
            modal={this.props.modal}
            addToOrder={this.props.addToOrder}
          />
        ))}
      </div>
    )
  }
}

export default ProductsGallery;
