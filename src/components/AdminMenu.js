import React from 'react';
import Form from './Form';
import EditForm from './EditForm';

class AdminMenu extends React.Component {
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    const menuVisibility = this.props.adminMenu ? "visible" : "hidden";
    const clsForMenu = `store-left adminMenu ${menuVisibility}`;
    return (
      <div className={clsForMenu}>
        <button className="close-cart" tabIndex={tabindex} onClick={this.props.toggleAdminMenu}>&times;</button>
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
