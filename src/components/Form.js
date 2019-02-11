import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    addBook: PropTypes.func,
    modal: PropTypes.bool
  };

  nameRef = React.createRef();
  authorRef = React.createRef();
  priceRef = React.createRef();
  avRef = React.createRef();
  catRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBook = (e) => {
    e.preventDefault();
    const book = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
      desc: this.descRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      available: JSON.parse(this.avRef.current.value),
      author: this.nameRef.current.value,
      category: this.catRef.current.value,
      visible: true,
      modalVisible: false
    }
    this.props.addBook(book);
    e.currentTarget.reset();
  }
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <form className="add-product-form show" onSubmit={this.createBook}>
        <p>New book:</p>
        <input
          ref={this.nameRef}
          tabIndex={tabindex}
          type="text"
          name="name"
          placeholder="Book name"
          required/>
        <input
          ref={this.authorRef}
          tabIndex={tabindex}
          type="text"
          name="author"
          placeholder="Book author"
          required/>
        <input
          ref={this.priceRef}
          tabIndex={tabindex}
          type="text"
          name="price"
          placeholder="Price"
          required/>
        <select
          ref={this.avRef}
          tabIndex={tabindex}
          name="available"
          required>
          <option value="true">Available</option>
          <option value="false">Sold out</option>
        </select>
        <select
          ref={this.catRef}
          tabIndex={tabindex}
          name="category"
          required>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="novel">Novel</option>
        </select>
        <textarea
          ref={this.descRef}
          tabIndex={tabindex}
          name="desc"
          placeholder="Book description"
          required></textarea>
        <input
          ref={this.imageRef}
          tabIndex={tabindex}
          type="text"
          name="image"
          placeholder="Book image"
          required/>
        <button tabIndex={tabindex} type="submit">+ Add book</button>
      </form>
    )
  }
}

export default Form;
