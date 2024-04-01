// GridStatus.js
import React from 'react';
import gridIcon from "./grid.jpg"; 
const GridStatus = ({ gridStatus }) => {
  return (
    <div className="grid-status-section grid-section">
      <div className="dotted-data-separator"></div>
      <h2>Grid Status</h2>
      <div className="grid-status">
      
      <img src={gridIcon} alt="Grid Icon" className="grid-icon" />
       
      </div>
      <div className="grid-power-flow">
    
      <strong>Status:</strong> {gridStatus.status}
        <p><strong>Power Flow:</strong> {gridStatus.powerFlow} kW</p>
      </div>
      
    </div>
    
  );
};

export default GridStatus;
