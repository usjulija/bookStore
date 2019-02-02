import React from 'react';
import NavMenu from './NavMenu'
import StoreCategory from './StoreCategory'

class Store extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavMenu />
        <StoreCategory />
      </React.Fragment>
    )
  }
}

export default Store;
