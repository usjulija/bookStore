import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Form from './Form';
import EditForm from './EditForm';
import LogIn from './LogIn';
import base, { firebaseApp } from '../base';

class AdminMenu extends React.Component {
  static propTypes = {
    books: PropTypes.object,
    modal: PropTypes.bool,
    adminMenu: PropTypes.bool,
    addBook: PropTypes.func,
    updateBook: PropTypes.func,
    deleteBook: PropTypes.func,
    toggleAdminMenu: PropTypes.func,
    loadSamples: PropTypes.func
  };

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user });
      }
    })
  }

  authHandler = async (authData) => {
    //Look up current Store
    const store = await base.fetch("store", { context: this });
    //Claim as there is no owner, if so, claim it as our own
    if(!store.owner) {
      await base.post("store/owner", {
        data: authData.user.uid
      });
    }
    //Show the state of inventory
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  }

  logout = async () => {
    console.log("Logging out")
    await firebase.auth().signOut();
    this.setState( { uid: null });
  }

  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    const menuVisibility = this.props.adminMenu ? "visible" : "hidden";
    const clsForMenu = `store-left adminMenu ${menuVisibility}`;

    const logout = <button onClick={this.logout} className="logout" tabIndex={tabindex}>Log out</button>

    if (!this.state.uid) {
      return (
        <div className={clsForMenu}>
          <button className="close-cart" tabIndex={tabindex} onClick={this.props.toggleAdminMenu}>&times;</button>
          <LogIn authenticate={this.authenticate} modal={this.props.modal} />
        </div>
      )
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div className={clsForMenu}>
          <button className="close-cart" tabIndex={tabindex} onClick={this.props.toggleAdminMenu}>&times;</button>
          <div className="log-in">
            <p>Sorry, you are not authorized to manage the store.</p>
            {logout}
          </div>
        </div>
      )
    }

    return (
      <div className={clsForMenu}>
        <button className="close-cart" tabIndex={tabindex} onClick={this.props.toggleAdminMenu}>&times;</button>
        {logout}
        <h2>Store Manager View</h2>
        {Object.keys(this.props.books).map(key => (
          <EditForm
            key={key}
            index={key}
            details={this.props.books[key]}
            updateBook={this.props.updateBook}
            deleteBook={this.props.deleteBook}
          />
        ))}
        <Form
          modal={this.props.modal}
          addBook={this.props.addBook}
        />
        <button onClick={this.props.loadSamples} className="load-samples" tabIndex={tabindex}>+ Add sample books</button>
      </div>
    )
  }
}

export default AdminMenu;
