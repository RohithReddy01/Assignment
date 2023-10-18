import React from 'react';
import LeftPanel from './LeftPanel';
import UpperRight from './UpperRight';
import MiddleRight from './MiddleRight';
import BottomRight from './BottomRight';

function Overview() {
  return (
    <div className="app">
      <LeftPanel />
      <UpperRight />
      <MiddleRight />
      <BottomRight />
    </div>
  );
}

export default Overview;