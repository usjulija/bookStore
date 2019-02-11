import React from 'react';
import PropTypes from 'prop-types';

class EditForm extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      author: PropTypes.string,
      available: PropTypes.bool,
      desc: PropTypes.string,
      category: PropTypes.string,
      visible: PropTypes.bool
    }),
    modal: PropTypes.bool,
    updateBook: PropTypes.func,
    deleteBook: PropTypes.func,
    index: PropTypes.string
  };

  handleChange = (e) => {
    const updatedBook = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateBook(this.props.index, updatedBook);
  }
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    const { name, author, price, available, category, desc, image, visible } = this.props.details;
    const additional = visible ? "show" : "";
    const classAdditionalName = additional + " add-product-form";
    return (
      <div className={classAdditionalName} onSubmit={this.createBook}>
        <p>Update {name}:</p>
        <input
          tabIndex={tabindex}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          tabIndex={tabindex}
          type="text"
          name="author"
          value={author}
          onChange={this.handleChange}
        />
        <input
          tabIndex={tabindex}
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select
          tabIndex={tabindex}
          name="available"
          value={available}
          onChange={this.handleChange}>
          <option value="true">Available</option>
          <option value="false">Sold out</option>
        </select>
        <select
          tabIndex={tabindex}
          name="category"
          value={category}
          onChange={this.handleChange}>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="novel">Novel</option>
        </select>
        <textarea
          tabIndex={tabindex}
          name="desc"
          value={desc}
          onChange={this.handleChange}></textarea>
        <input
          tabIndex={tabindex}
          type="text"
          name="image"
          value={image}
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
