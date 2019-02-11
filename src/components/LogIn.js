import React from 'react';
import PropTypes from 'prop-types';

class LogIn extends React.Component {
  static propTypes = {
    modal: PropTypes.bool,
    authenticate: PropTypes.func
  }

  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <div className="log-in">
        <h2>Administrator Login</h2>
        <p>Sign in to manage your store.</p>
        <button tabIndex={tabindex} className="github" onClick={() => this.props.authenticate('Github')}>LogIn with GitHub</button>
        <button tabIndex={tabindex} className="facebook" onClick={() => this.props.authenticate('Facebook')}>LogIn with Facebook</button>
      </div>
    )
  }
}

export default LogIn;
