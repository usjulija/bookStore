import React from 'react';
import ProductCard from './ProductCard'

class ProductsGallery extends React.Component {
  render() {
    return (
      <div className="products-gallery">
        {Object.keys(this.props.books).map(key => (
          <ProductCard
            key={key}
            ndex={key}
            details={this.props.books[key]}/>
        ))}
      </div>
    )
  }
}

export default ProductsGallery;
