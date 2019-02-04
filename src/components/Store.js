import React from 'react';
import NavMenu from './NavMenu';
import StoreCategory from './StoreCategory';
import ProductsGallery from './ProductsGallery';
import Cart from './Cart';
import sampleBooks from '../books-data';

class Store extends React.Component {
  state = {
    books: sampleBooks,
    order: {},
    modal: false,
    cart: false
  };

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

  toggleCart = () => {
    this.setState({cart: !this.state.cart});
  }

  sortByCategory = (query) => {
    //takes the books object
    const myBooks = {...this.state.books};
    //changes visibility to false for every book
    Object.keys(myBooks).map(key => {
      return myBooks[key].visible = false;
    });
    //if all button pressed shows all books
    if (query === "all") {
      Object.keys(myBooks).map(key => {
        return myBooks[key].visible = true;
      });
    } else {
      Object.keys(myBooks).map(key => {
        //if the button matches the book category the book is shown
        if (query === myBooks[key].category) {
          return myBooks[key].visible = true;
        } else {
          //otherwise hidden
          return myBooks[key].visible = false;
        }
      });
    }
    this.setState({ books: myBooks });
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  render() {
    const shrinkStore = this.state.cart ? "store-right" : "store-center";
    return (
      <div className="store-main-page">
        <NavMenu
          modal={this.state.modal}
          cart={this.state.cart}
          toggleCart={this.toggleCart}/>
        <Cart
          cart={this.state.cart}
          toggleCart={this.toggleCart}
          books={this.state.books}
          order={this.state.order}/>
        <div className={shrinkStore}>
          <StoreCategory
            books={this.state.books}
            sortByCategory={this.sortByCategory}
            modal={this.state.modal}/>
          <ProductsGallery
            books={this.state.books}
            toggleModal={this.toggleModal}
            modal={this.state.modal}
            addToOrder={this.addToOrder}/>
        </div>
      </div>
    )
  }
}

export default Store;
