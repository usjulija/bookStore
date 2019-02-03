import React from 'react';
import allBooks from './images/003-books.svg';
import fiction from './images/001-android.svg';
import fantasy from './images/002-unicorn.svg';
import novel from './images/004-book.svg';

class StoreCategory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Select genre</h2>
        <div id="myBtnContainer" className="select-category">
          <button className="btn active" onClick={() => { this.props.sortByCategory("all") }}>
            <img src={allBooks} alt="bookshelf"/>
            <p>All</p>
          </button>
          <button className="btn" onClick={() => { this.props.sortByCategory("fantasy") }}>
            <img src={fantasy} alt="unicorn"/>
            <p>Fantasy</p>
          </button>
          <button className="btn" onClick={() => { this.props.sortByCategory("fiction") }}>
            <img src={fiction} alt="robot"/>
            <p>Fiction</p>
          </button>
          <button className="btn" onClick={() => { this.props.sortByCategory("novel") }}>
            <img src={novel} alt="book"/>
            <p>Novel</p>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default StoreCategory;
