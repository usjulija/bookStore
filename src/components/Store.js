import React from 'react';
import NavMenu from './NavMenu';
import StoreCategory from './StoreCategory';
import ProductsGallery from './ProductsGallery';
import sampleBooks from '../books-data';

class Store extends React.Component {
  state = {
    books: sampleBooks,
    order: {}
  };

  sortByCategory = (query) => {
    //takest the books objec
    const myBooks = {...this.state.books};
    //changes visibility to false for every book
    Object.keys(myBooks).map(key => {
      return myBooks[key].visible = false;
    });
    if (query === "all") {
      Object.keys(myBooks).map(key => {
        return myBooks[key].visible = true;
      });
    } else {
      Object.keys(myBooks).map(key => {
        if (query === myBooks[key].category) {
          return myBooks[key].visible = true;
        } else {
          return myBooks[key].visible = false;
        }
      });
    }
    this.setState({ books: myBooks });
  }

  render() {
    return (
      <React.Fragment>
        <NavMenu />
        <StoreCategory books={this.state.books} sortByCategory={this.sortByCategory}/>
        <ProductsGallery books={this.state.books}/>
      </React.Fragment>
    )
  }
}

export default Store;
