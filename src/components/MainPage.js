import React from 'react';
import mainImage from './images/main.svg';

class MainPage extends React.Component {
  loadStore= () => {
    this.props.history.push('/store');
  }
  render() {
    return (
      <div className="main-page-container">
        <img src={mainImage} alt="book shelf"/>
        <button className="store-button" onClick={this.loadStore}>
          <span>Shop Now </span>
        </button>
      </div>
    )
  }
}

export default MainPage;
