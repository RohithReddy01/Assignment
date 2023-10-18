import React from 'react';
import './App.css'; 
import LeftPanel from './LeftPanel';
import UpperRight from './UpperRight';
import './upperright.css';
// import MiddleRight from './MiddleRight';
import './leftpanel.css'; 
import BottomRight from './BottomRight';


function App() {
  return (
    <div className="page-container">
      <LeftPanel />
      <div className="content">
        <div className="upper-right">
          <UpperRight/>
        </div>
        <div className="middle-right">
          {/* <MiddleRight/> */}
        </div>
        <div className="bottom-right">
          <BottomRight/>
        </div>
      </div>
    </div>
  );
}

export default App;
