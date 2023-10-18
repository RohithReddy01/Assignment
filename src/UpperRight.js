import React from 'react';

function UpperRight() {
  return (
    <div>
      <header className='e'><h4>Hi Rohith 👋</h4>
      <input type="text"  placeholder="Search" /></header>
    
    <div className="upper-right">
      <div className="box">
        <div className="icon">
          <span>$</span>
        </div>
        <div className="title">Earning</div>
        <div className="amount">$198k</div>
        <div className="percentage">
          <span>▲</span>
          <span>38.7% this month</span>
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <span>📦</span> {/* Icon for Orders */}
        </div>
        <div className="title">Orders</div>
        <div className="amount">500</div> {/* Number of orders */}
        <div className="percentage">
          <span>▲</span>
          <span>12.5% this month</span> {/* Increase in orders */}
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <span>💰</span> {/* Icon for Balance */}
        </div>
        <div className="title">Balance</div>
        <div className="amount">$5,000</div> {/* Balance amount */}
        <div className="percentage">
          <span>▲</span>
          <span>5.2% this month</span> {/* Increase in balance */}
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <span>💲</span> {/* Icon for Total Sales */}
        </div>
        <div className="title">Total Sales</div>
        <div className="amount">$250k</div> {/* Total sales amount */}
        <div className="percentage">
          <span>▲</span>
          <span>20.0% this week</span> {/* Increase in total sales */}
        </div>
      </div>
   
    </div>
    </div>
  );
}

export default UpperRight;
