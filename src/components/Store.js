import React from 'react';
import NavMenu from './NavMenu';
import StoreCategory from './StoreCategory';
import ProductsGallery from './ProductsGallery';
import Cart from './Cart';
import AdminMenu from './AdminMenu';
import sampleBooks from '../books-data';
import base from '../base';

class Store extends React.Component {
  state = {
    books: {},
    order: {},
    modal: false,
    cart: false,
    adminMenu: false
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('store');
    if(localStorageRef){
      this.setState({ order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState("/store/books", {
      context: this,
      state: "books"
    });
  }

  componentDidUpdate() {
    localStorage.setItem('store', JSON.stringify(this.state.order));
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
      return null;
    });
    this.setState({ books: myBooks });
  }

  toggleCart = () => {
    this.setState({adminMenu: false});
    this.setState({cart: !this.state.cart});
  }

  toggleAdminMenu = () => {
    this.setState({cart: false});
    this.setState({adminMenu: !this.state.adminMenu});
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

  addBook = (book) => {
    const books = {...this.state.books};
    books[`book${Date.now()}`] = book;
    this.setState({ books });
  }

  updateBook = (key, updatedBook) => {
    const books = {...this.state.books};
    books[key] = updatedBook;
    this.setState({ books });
  }

  deleteBook = (key) => {
    const books = {...this.state.books};
    books[key] = null;
    this.setState({ books });
  }

  loadSamples = () => {
    this.setState({ books: sampleBooks });
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  deleteFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  render() {
    const shrinkStore = this.state.cart || this.state.adminMenu ? "store-right" : "store-center";
    return (
      <div className="store-main-page">
        <NavMenu
          books={this.state.books}
          order={this.state.order}
          modal={this.state.modal}
          cart={this.state.cart}
          adminMenu={this.state.adminMenu}
          toggleCart={this.toggleCart}
          toggleAdminMenu={this.toggleAdminMenu}
        />
        <Cart
          modal={this.state.modal}
          cart={this.state.cart}
          toggleCart={this.toggleCart}
          books={this.state.books}
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}
        />
        <AdminMenu
          modal={this.state.modal}
          adminMenu={this.state.adminMenu}
          toggleAdminMenu={this.toggleAdminMenu}
          books={this.state.books}
          order={this.state.order}
          addBook={this.addBook}
          loadSamples={this.loadSamples}
          updateBook ={this.updateBook}
          deleteBook={this.deleteBook}
        />
        <div className={shrinkStore}>
          <StoreCategory
            books={this.state.books}
            sortByCategory={this.sortByCategory}
            modal={this.state.modal}
          />
          <ProductsGallery
            books={this.state.books}
            toggleModal={this.toggleModal}
            modal={this.state.modal}
            addToOrder={this.addToOrder}
          />
        </div>
      </div>
    )
  }
}

export default Store;
