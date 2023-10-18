import React from 'react';
import './BottomRight.css';

function BottomRight() {
  return (
    <div className="bottom-right">
      <div className="header">
        <div className="heading">Product Shell</div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="last-30-days">
          Last 30 Days <span>▼</span>
        </div>
      </div>
      <div className="table">
        <div className="row header-row">
          <div className="cell">Product Name</div>
          <div className="cell">Stock </div>
          <div className="cell">Price </div>
          <div className="cell">Total Sales</div>
        </div>
        <div className="row">
          <div className="cell">Abstract 3D</div>
          <div className="cell">32 in stock</div>
          <div className="cell">$45.99</div>
          <div className="cell">20 </div>
        </div>
        <div className="row">
          <div className="cell">Sarphens illustration</div>
          <div className="cell">32 in stock</div>
          <div className="cell">$45.99</div>
          <div className="cell">20 </div>
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
}

export default BottomRight;
