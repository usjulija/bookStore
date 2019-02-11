import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  static propTypes = {
    modal: PropTypes.bool,
    searchFilter: PropTypes.func
  };

  searchRef = React.createRef();

  handleSearch = (e) => {
    const query = this.searchRef.current.value;
    this.props.searchFilter(query);
    console.log(query);
  }
  render() {
    const tabindex = this.props.modal ? "-1" : "0";
    return (
      <form className="search-wrapper" onChange={this.handleSearch} onSubmit={(e) => e.preventDefault()}>
        <svg alt="search icon" xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 485.213 485.213'>
          <g fill='#3D5A80' className="search-icon">
            <path d='M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324 c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z'/>
            <path d='M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951 C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46 c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465 C318.424,257.208,257.206,318.416,181.956,318.416z'/>
            <path d='M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z'/>
          </g>
        </svg>
        <input tabIndex={tabindex} className="search" ref={this.searchRef} placeholder="Enter the book name"/>
      </form>
    )
  }
}

export default Search;
