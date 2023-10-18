import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUser, faMoneyBill, faBullhorn, faQuestionCircle, faArrowDown } from '@fortawesome/free-solid-svg-icons';




function LeftPanel() {
  const [expanded, setExpanded] = useState(false);
  const [productExpanded, setProductExpanded] = useState(false);
  const [customerExpanded, setCustomerExpanded] = useState(false);
  const [incomeExpanded, setIncomeExpanded] = useState(false);
  const [promoteExpanded, setPromoteExpanded] = useState(false);
  const [helpExpanded, setHelpExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleProductExpand = () => {
    setProductExpanded(!productExpanded);
  };

  const toggleCustomerExpand = () => {
    setCustomerExpanded(!customerExpanded);
  };

  const toggleIncomeExpand = () => {
    setIncomeExpanded(!incomeExpanded);
  };

  const togglePromoteExpand = () => {
    setPromoteExpanded(!promoteExpanded);
  };

  const toggleHelpExpand = () => {
    setHelpExpanded(!helpExpanded);
  };

  return (
    <div className="left-panel">
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="main-heading">
        Dashboard <span onClick={toggleExpand}>{expanded ? '▼' : '▶'}</span>
      </div>
      {expanded && (
        <div className="sub-heading">
          <div className="sub-heading-item">
            <FontAwesomeIcon icon={faCogs} /> Product <span onClick={toggleProductExpand}>{productExpanded ? '▼' : '▶'}</span>
          </div>
          {productExpanded && (
            <div>Sub-item 1</div>
            // Add more sub-items as needed
          )}
          <div className="sub-heading-item">
            <FontAwesomeIcon icon={faUser} /> Customer <span onClick={toggleCustomerExpand}>{customerExpanded ? '▼' : '▶'}</span>
          </div>
          {customerExpanded && (
            <div>Sub-item 1</div>
            // Add more sub-items as needed
          )}
          <div className="sub-heading-item">
            <FontAwesomeIcon icon={faMoneyBill} /> Income <span onClick={toggleIncomeExpand}>{incomeExpanded ? '▼' : '▶'}</span>
          </div>
          {incomeExpanded && (
            <div>Sub-item 1</div>
            // Add more sub-items as needed
          )}
          <div className="sub-heading-item">
            <FontAwesomeIcon icon={faBullhorn} /> Promote <span onClick={togglePromoteExpand}>{promoteExpanded ? '▼' : '▶'}</span>
          </div>
          {promoteExpanded && (
            <div>Sub-item 1</div>
            // Add more sub-items as needed
          )}
          <div className="sub-heading-item">
            <FontAwesomeIcon icon={faQuestionCircle} /> Help <span onClick={toggleHelpExpand}>{helpExpanded ? '▼' : '▶'}</span>
          </div>
          {helpExpanded && (
            <div>Sub-item 1</div>
            // Add more sub-items as needed
          )}
        </div>
      )}
      <div className="footer">
        <span><FontAwesomeIcon icon={faArrowDown} /></span> Rohith as Product Manager
      </div>
    </div>
  );
}

export default LeftPanel;
