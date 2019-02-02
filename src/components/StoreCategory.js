import React from 'react';

class StoreCategory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Select category</h2>
        <div id="myBtnContainer" className="select-category">
          <button className="btn active" onClick="filterSelection('all')">All</button>
          <button className="btn" onClick="filterSelection('fiction')">Fiction</button>
          <button className="btn" onClick="filterSelection('scandinavian')">Drama</button>
          <button className="btn" onClick="filterSelection('decor')">Classisc</button>
        </div>
      </React.Fragment>
    )
  }
}

export default StoreCategory;
