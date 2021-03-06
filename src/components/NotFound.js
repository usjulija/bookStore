import React from 'react';
import PropTypes from 'prop-types';
import boy from './images/404.svg';

class NotFound extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  loadStore = () => {
    this.props.history.push('/store');
  }
  render() {
    return (
      <header className="not-found">
        <h2>Ups! Page is not found!</h2>
        <img src={boy} alt="boy on the book"/>
        <button className="store-button" onClick={this.loadStore}>
          <span>Shop Now </span>
        </button>
      </header>
    )
  }
}

export default NotFound;
