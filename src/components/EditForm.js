import React from 'react';

class EditForm extends React.Component {
  handleChange = (e) => {
    const updatedBook = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateBook(this.props.index, updatedBook);
  }
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <div className="add-product-form" onSubmit={this.createBook}>
        <p>Update {this.props.details.name}:</p>
        <input
          tabIndex={tabindex}
          type="text"
          name="name"
          value={this.props.details.name}
          onChange={this.handleChange}
        />
        <input
          tabIndex={tabindex}
          type="text"
          name="author"
          value={this.props.details.author}
          onChange={this.handleChange}
        />
        <input
          tabIndex={tabindex}
          type="text"
          name="price"
          value={this.props.details.price}
          onChange={this.handleChange}
        />
        <select
          tabIndex={tabindex}
          name="available"
          value={this.props.details.available}
          onChange={this.handleChange}>
          <option value="true">Available</option>
          <option value="false">Sold out</option>
        </select>
        <select
          tabIndex={tabindex}
          name="category"
          value={this.props.details.category}
          onChange={this.handleChange}>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="novel">Novel</option>
        </select>
        <textarea
          tabIndex={tabindex}
          name="desc"
          value={this.props.details.desc}
          onChange={this.handleChange}></textarea>
        <input
          tabIndex={tabindex}
          type="text"
          name="image"
          value={this.props.details.image}
          onChange={this.handleChange}
        />
        <button
          tabIndex={tabindex}
          className="remove-book-button"
          onClick={() => {this.props.deleteBook(this.props.index)}}>Remove book from the store</button>
      </div>
    )
  }
}

export default EditForm;
