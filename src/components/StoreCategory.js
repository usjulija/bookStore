import React from 'react';
import PropTypes from 'prop-types';
import allBooks from './images/books.svg';
import fiction from './images/001-android.svg';
import fantasy from './images/fantasy.svg';
import novel from './images/004-book.svg';

class StoreCategory extends React.Component {
  static propTypes = {
    modal: PropTypes.bool,
    sortByCategory: PropTypes.func
  };
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <React.Fragment>
        <h2>Select genre</h2>
        <div id="myBtnContainer" className="select-category">
          <button tabIndex={tabindex} onClick={() => { this.props.sortByCategory("all") }}>
            <img src={allBooks} alt="bookshelf"/>
            <p>All</p>
          </button>
          <button tabIndex={tabindex} onClick={() => { this.props.sortByCategory("fantasy") }}>
            <img src={fantasy} alt="unicorn"/>
            <p>Fantasy</p>
          </button>
          <button tabIndex={tabindex} onClick={() => { this.props.sortByCategory("fiction") }}>
            <img src={fiction} alt="robot"/>
            <p>Fiction</p>
          </button>
          <button tabIndex={tabindex} onClick={() => { this.props.sortByCategory("novel") }}>
            <img src={novel} alt="book"/>
            <p>Novel</p>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default StoreCategory;
