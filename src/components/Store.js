import React from 'react';
import NavMenu from './NavMenu';
import StoreCategory from './StoreCategory';
import ProductsGallery from './ProductsGallery';
import sampleBooks from '../books-data';

class Store extends React.Component {
  state = {
    books: sampleBooks,
    order: {},
    modal: false
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

  toggleModal = (query) => {
    const myBooks = {...this.state.books};
    Object.keys(myBooks).filter(key => {
      if(query === myBooks[key].name) {
        if (myBooks[key].modalVisible === true) {
          myBooks[key].modalVisible = false;
          this.setState({ modal: false });
        } else {
          myBooks[key].modalVisible = true;
          this.setState({ modal: true });
        }
      }
    });
    this.setState({ books: myBooks });
  }

  render() {
    return (
      <React.Fragment>
        <NavMenu modal={this.state.modal}/>
        <StoreCategory books={this.state.books} sortByCategory={this.sortByCategory} modal={this.state.modal}/>
        <ProductsGallery books={this.state.books} toggleModal={this.toggleModal} modal={this.state.modal}/>
      </React.Fragment>
    )
  }
}

export default Store;
