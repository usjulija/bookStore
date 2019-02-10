import React from 'react';
import Form from './Form';

class AdminMenu extends React.Component {
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    const menuVisibility = this.props.adminMenu ? "visible" : "hidden";
    const clsForMenu = `store-left adminMenu ${menuVisibility}`;
    return (
      <div className={clsForMenu}>
        <button className="close-cart" tabIndex={tabindex} onClick={this.props.toggleAdminMenu}>&times;</button>
        <h2>Store Manager View</h2>
        <Form
          modal={this.props.modal}
          addBook={this.props.addBook}/>
        <button onClick={this.props.loadSamples} className="load-samples" tabIndex={tabindex}>+ Add sample books</button>
      </div>
    )
  }
}

export default AdminMenu;
